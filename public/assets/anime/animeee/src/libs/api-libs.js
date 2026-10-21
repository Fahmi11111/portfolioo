// src/libs/api-libs.js
//
// Sumber data: AniList GraphQL (https://graphql.anilist.co), karena API publik Jikan sudah mati.
// Fungsi getAnimeResponse(resource, query) DIPERTAHANKAN dengan pemanggilan gaya Jikan
// ("top/anime", "anime/{mal_id}", dst), dan hasilnya diubah ke bentuk yang mirip Jikan
// (mal_id, images.webp.image_url, score, year, trailer.youtube_id, ...),
// sehingga komponen lain hampir tidak perlu diubah.
//
// Catatan: AniList saat ini dibatasi ~30 request/menit, jadi semua hasil di-cache di memori.

const ANILIST_URL = "https://graphql.anilist.co";

const TTL_LIST = 30 * 60 * 1000; // 30 menit
const TTL_DETAIL = 60 * 60 * 1000; // 1 jam
const TTL_SEARCH = 10 * 60 * 1000; // 10 menit
const MAX_CACHE_ENTRIES = 300;

/* ------------------------------ cache sederhana ----------------------------- */

const cache = new Map(); // key -> { value, expires }
const inflight = new Map(); // key -> Promise (hindari request ganda yang bersamaan)

async function cached(key, ttl, loader) {
  const hit = cache.get(key);
  if (hit && hit.expires > Date.now()) return hit.value;
  if (inflight.has(key)) return inflight.get(key);

  const promise = (async () => {
    try {
      const value = await loader();
      if (value) {
        if (cache.size >= MAX_CACHE_ENTRIES) {
          cache.delete(cache.keys().next().value); // buang entri tertua
        }
        cache.set(key, { value, expires: Date.now() + ttl });
        return value;
      }
      return hit?.value ?? null; // pakai data lama kalau ada
    } catch (err) {
      console.error("FETCH FAILED:", err);
      return hit?.value ?? null; // pakai data lama kalau request gagal
    } finally {
      inflight.delete(key);
    }
  })();

  inflight.set(key, promise);
  return promise;
}

/* --------------------------------- GraphQL ---------------------------------- */

const MEDIA_FIELDS = `
  id
  idMal
  title { romaji english native }
  coverImage { extraLarge large medium }
  bannerImage
  averageScore
  popularity
  favourites
  seasonYear
  startDate { year }
  format
  status
  episodes
  duration
  genres
  description(asHtml: false)
  trailer { id site }
  studios(isMain: true) { nodes { name } }
`;

const RECOMMENDATION_FIELDS = `
  recommendations(sort: RATING_DESC, perPage: 8) {
    nodes {
      mediaRecommendation {
        id
        idMal
        title { romaji english native }
        coverImage { extraLarge large medium }
        averageScore
        seasonYear
        startDate { year }
        format
      }
    }
  }
`;

const DETAIL_QUERY = `
  query ($idMal: Int) {
    Media(idMal: $idMal, type: ANIME) {
      ${MEDIA_FIELDS}
      rankings { rank type allTime }
      ${RECOMMENDATION_FIELDS}
    }
  }
`;

const PAGE_QUERY = `
  query ($page: Int, $perPage: Int, $sort: [MediaSort], $search: String) {
    Page(page: $page, perPage: $perPage) {
      pageInfo { total currentPage lastPage hasNextPage perPage }
      media(type: ANIME, sort: $sort, search: $search, isAdult: false) {
        ${MEDIA_FIELDS}
      }
    }
  }
`;

async function anilist(query, variables) {
  const res = await fetch(ANILIST_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ query, variables }),
    cache: "no-store",
    signal: AbortSignal.timeout(20000),
  });

  if (res.status === 429) throw new Error("AniList rate limited (429)");
  const json = await res.json().catch(() => null);

  if (!res.ok || !json || json.errors) {
    const msg = json?.errors?.[0]?.message ?? `HTTP ${res.status}`;
    throw new Error(`AniList error: ${msg}`);
  }
  return json.data;
}

/* ------------------------- mapping ke bentuk Jikan -------------------------- */

const TYPE_MAP = {
  TV: "TV",
  TV_SHORT: "TV",
  MOVIE: "Movie",
  SPECIAL: "Special",
  OVA: "OVA",
  ONA: "ONA",
  MUSIC: "Music",
};

const STATUS_MAP = {
  FINISHED: "Finished Airing",
  RELEASING: "Currently Airing",
  NOT_YET_RELEASED: "Not yet aired",
  CANCELLED: "Cancelled",
  HIATUS: "Hiatus",
};

const cleanText = (text) =>
  text
    ? text
        .replace(/<br\s*\/?>/gi, "\n")
        .replace(/<[^>]+>/g, "")
        .trim()
    : null;

function mapImages(cover) {
  const small = cover?.large ?? cover?.medium ?? null;
  const large = cover?.extraLarge ?? cover?.large ?? null;
  const set = {
    image_url: small,
    small_image_url: cover?.medium ?? small,
    large_image_url: large,
  };
  return { jpg: set, webp: set };
}

function mapMedia(m) {
  if (!m) return null;

  const isYoutube = m.trailer?.site === "youtube" && m.trailer?.id;

  return {
    mal_id: m.idMal,
    anilist_id: m.id,
    url: m.idMal ? `https://myanimelist.net/anime/${m.idMal}` : null,
    images: mapImages(m.coverImage),
    banner_image: m.bannerImage ?? null,
    trailer: {
      youtube_id: isYoutube ? m.trailer.id : null,
      url: isYoutube ? `https://www.youtube.com/watch?v=${m.trailer.id}` : null,
      embed_url: isYoutube
        ? `https://www.youtube.com/embed/${m.trailer.id}`
        : null,
    },
    title:
      m.title?.english || m.title?.romaji || m.title?.native || "Tanpa judul",
    title_english: m.title?.english ?? null,
    title_japanese: m.title?.native ?? null,
    type: TYPE_MAP[m.format] ?? m.format ?? null,
    episodes: m.episodes ?? null,
    status: STATUS_MAP[m.status] ?? m.status ?? null,
    duration: m.duration ? `${m.duration} min per ep` : null,
    score: m.averageScore ? Math.round(m.averageScore) / 10 : null, // 0-100 -> 0-10
    rank:
      m.rankings?.find((r) => r.type === "RATED" && r.allTime)?.rank ?? null,
    popularity: m.popularity ?? null,
    members: m.popularity ?? null,
    favorites: m.favourites ?? null,
    synopsis: cleanText(m.description),
    year: m.seasonYear ?? m.startDate?.year ?? null,
    genres: (m.genres ?? []).map((name, i) => ({ mal_id: i + 1, name })),
    studios: (m.studios?.nodes ?? []).map((n) => ({ name: n.name })),
  };
}

function mapPagination(pageInfo, count) {
  return {
    last_visible_page: pageInfo?.lastPage ?? 1,
    has_next_page: pageInfo?.hasNextPage ?? false,
    current_page: pageInfo?.currentPage ?? 1,
    items: {
      count,
      total: pageInfo?.total ?? count,
      per_page: pageInfo?.perPage ?? count,
    },
  };
}

/* ------------------------------ fungsi inti --------------------------------- */

async function fetchPage({ page, perPage, sort, search }) {
  const variables = { page, perPage, sort: [sort] };
  if (search) variables.search = search;

  const data = await anilist(PAGE_QUERY, variables);
  const items = (data?.Page?.media ?? [])
    .map(mapMedia)
    .filter((a) => a?.mal_id);

  return {
    data: items,
    pagination: mapPagination(data?.Page?.pageInfo, items.length),
  };
}

async function fetchDetail(malId) {
  const data = await anilist(DETAIL_QUERY, { idMal: malId });
  const media = data?.Media;
  if (!media) return null;

  return {
    anime: mapMedia(media),
    recommendations: (media.recommendations?.nodes ?? [])
      .map((n) => mapMedia(n.mediaRecommendation))
      .filter((a) => a?.mal_id),
  };
}

const getDetail = (malId) =>
  cached(`detail:${malId}`, TTL_DETAIL, () => fetchDetail(malId));

/**
 * Pemanggilan gaya Jikan. Resource yang didukung:
 *   top/anime              (?page=&limit=)
 *   recommendations/anime  (daftar yang sedang tren)
 *   anime                  (?q=kata&page=&limit=)  -> pencarian
 *   anime/{mal_id}
 *   anime/{mal_id}/videos
 *   anime/{mal_id}/recommendations
 */
const getAnimeResponse = async (resource, query = "") => {
  if (!resource || resource.includes("undefined")) return null;

  const params = new URLSearchParams(query);
  const page = Math.max(1, Number(params.get("page")) || 1);
  const limit = Math.min(50, Math.max(1, Number(params.get("limit")) || 24));
  const parts = resource.split("/").filter(Boolean);

  try {
    // Daftar anime populer
    if (resource === "top/anime") {
      return await cached(`top:${page}:${limit}`, TTL_LIST, () =>
        fetchPage({ page, perPage: limit, sort: "POPULARITY_DESC" }),
      );
    }

    // "Rekomendasi" -> anime yang sedang tren (bentuk Jikan: data[].entry[])
    if (resource === "recommendations/anime") {
      return await cached(`trending:${page}`, TTL_LIST, async () => {
        const result = await fetchPage({
          page,
          perPage: 20,
          sort: "TRENDING_DESC",
        });
        return {
          ...result,
          data: result.data.map((anime) => ({ entry: [anime] })),
        };
      });
    }

    // Pencarian: anime?q=...
    if (resource === "anime") {
      const q = (params.get("q") ?? "").trim();
      const sort = q ? "SEARCH_MATCH" : "POPULARITY_DESC";
      return await cached(
        `search:${q.toLowerCase()}:${page}:${limit}`,
        TTL_SEARCH,
        () => fetchPage({ page, perPage: limit, sort, search: q || undefined }),
      );
    }

    // anime/{mal_id}[/videos|/recommendations]
    if (parts[0] === "anime" && parts[1]) {
      const malId = Number(parts[1]);
      if (!Number.isInteger(malId) || malId <= 0) return null;

      const detail = await getDetail(malId);
      if (!detail) return null;

      if (!parts[2]) return { data: detail.anime };

      if (parts[2] === "videos") {
        const t = detail.anime.trailer;
        return {
          data: {
            promo: t.youtube_id ? [{ title: "Trailer", trailer: t }] : [],
          },
        };
      }

      if (parts[2] === "recommendations") {
        return { data: detail.recommendations.map((entry) => ({ entry })) };
      }
    }

    console.warn("Resource belum didukung:", resource);
    return null;
  } catch (err) {
    console.error("FETCH FAILED:", err);
    return null;
  }
};

export default getAnimeResponse;

/* ------------------------------- helper lain -------------------------------- */

export const getNestedAnimeResponse = async (resource, objectProperty) => {
  const response = await getAnimeResponse(resource);

  if (!response || !response.data) return [];

  return response.data.flatMap((item) => item?.[objectProperty] ?? []);
};

export const reproduce = (data, gap) => {
  if (!data || data.length === 0) return { data: [] };

  const first = Math.max(0, Math.floor(Math.random() * (data.length - gap)));
  const last = first + gap;

  return {
    data: data.slice(first, last),
  };
};

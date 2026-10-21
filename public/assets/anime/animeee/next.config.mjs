/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "myanimelist.net",
      },
      {
        protocol: "https",
        hostname: "cdn.myanimelist.net",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      // Gambar cover dari AniList (mis. s4.anilist.co)
      {
        protocol: "https",
        hostname: "**.anilist.co",
      },
    ],
  },
};

export default nextConfig;

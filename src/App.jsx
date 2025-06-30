import DataImage from "./data";
import { listTools, listProyek } from "./data";

function App() {
  return (
    <main className="transition-all duration-300">
      {/* Beranda */}
      <div
        id="beranda"
        className="scroll-mt-20 pt-24 animate__animated animate__fadeInUp animate__delay-5s"
      >
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 items-center gap-10">
          {/* Kiri (Teks) */}
          <div>
            <div className="flex items-center gap-3 mb-5 bg-zinc-800 w-fit p-3 rounded-2xl">
              <img
                src={DataImage.HeroImage}
                alt="Hero"
                className="w-20 sm:w-14 md:w-10 rounded-md"
              />
              <q className="text-sm sm:text-base text-white">
                Konsistensi dan ketekunan adalah kunci menuju sukses 😉.
              </q>
            </div>
            <h1 className="text-3xl font-bold mb-5 text-[var(--text)] leading-tight">
              Halo 👋, saya Muhammad Fahmi
            </h1>
            <p className="text-base leading-loose mb-5 text-[var(--text)]">
              Saya seorang mahasiswa aktif yang memiliki minat kuat di bidang
              pengembangan web dan desain digital. Antusias dalam mempelajari
              teknologi baru serta membangun berbagai proyek untuk mengasah
              kemampuan dan pengalaman.
            </p>

            <div className="flex items-center gap-3 flex-wrap">
              <a
                href="https://drive.google.com/file/d/1NNFjwjS7rZ8pPVYkhMVB7UmgxK5inzjL/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white px-5 py-2 rounded-2xl hover:bg-gray-900 transition"
              >
                Download CV <i className="ri-download-line ri-lg"></i>
              </a>
              <a
                href="#proyek"
                className="bg-black text-white px-5 py-2 rounded-2xl hover:bg-gray-900 transition"
              >
                Lihat Proyek <i className="ri-arrow-down-line ri-lg"></i>
              </a>
            </div>
          </div>

          {/* Kanan (Gambar) */}
          <div className="mt-3 md:-mt-13">
            <img
              src={DataImage.HeroImage}
              alt="Hero"
              className="w-full sm:w-[450px] md:w-[500px] mx-auto md:ml-auto -mt-10 sm:mt-0 md:-mt-6 animate__animated animate__fadeInUp animate__delay-7s"
            />
          </div>
        </div>
      </div>

      {/* Tentang */}
      <div
        id="tentang"
        className="scroll-mt-20 mt-10 py-16 px-4 animate__animated animate__fadeInUp animate__delay-7s"
      >
        <div className="max-w-3xl mx-auto p-8 rounded-2xl border border-zinc-200 bg-white dark:bg-[var(--card)] shadow-sm dark:shadow-none relative overflow-hidden transition-all duration-300">
          <p className="text-base leading-relaxed text-zinc-700 dark:text-[var(--subtext)]">
            Saya adalah mahasiswa Universitas Indraprasta PGRI yang saat ini
            aktif menempuh semester 5. Saya memiliki semangat belajar tinggi,
            suka mengeksplorasi dunia teknologi, dan sering membuat proyek
            pribadi sebagai sarana pengembangan diri. Dengan keinginan untuk
            terus bertumbuh, saya siap untuk menghadapi tantangan baru di dunia
            kerja maupun industri kreatif.
          </p>

          <div className="flex items-center justify-between flex-wrap gap-4 mt-8">
            <img
              src={DataImage.LogoImage}
              alt="Hero"
              className="w-12 h-12 rounded-md hidden sm:block shadow"
            />
            <div className="flex gap-8 text-zinc-900 dark:text-[var(--text)]">
              <div>
                <h1 className="text-2xl font-bold">
                  2<span>+</span>
                </h1>
                <p className="text-sm text-zinc-500 dark:text-[var(--subtext)]">
                  Proyek Pribadi
                </p>
              </div>
              <div>
                <h1 className="text-2xl font-bold">Aktif</h1>
                <p className="text-sm text-zinc-500 dark:text-[var(--subtext)]">
                  Belajar & Berkembang
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tools */}
      <div
        id="tools"
        className="scroll-mt-20 mt-5 px-4 animate__animated animate__fadeInUp animate__delay-7s"
      >
        <h1 className="text-3xl font-bold mb-3 text-[var(--text)]">
          Tools yang Digunakan
        </h1>
        <p className="text-base text-[var(--subtext)] max-w-2xl">
          Berikut adalah beberapa tools yang saya gunakan:
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {listTools.map((tool) => (
            <div
              key={tool.id}
              data-aos="fade-up"
              data-aos-delay="200"
              className="flex items-center gap-4 p-4 border border-zinc-700 rounded-xl bg-[var(--card)] hover:scale-[1.02] transition-all duration-300 ease-in-out group"
            >
              <img
                src={tool.gambar}
                alt={tool.nama}
                className="w-12 h-12 object-contain bg-zinc-900 p-2 rounded-lg shadow-sm group-hover:bg-zinc-700 transition"
              />
              <div>
                <h4 className="font-semibold text-[var(--text)] text-base group-hover:text-blue-400 transition">
                  {tool.nama}
                </h4>
                <p className="text-sm text-zinc-400">{tool.ket}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Proyek */}
      <div
        id="proyek"
        className="scroll-mt-20 mt-5 py-10 px-4"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <h1 className="text-center text-3xl font-bold mb-2 text-[var(--text)]">
          Proyek
        </h1>
        <p className="text-base leading-loose text-center text-[var(--subtext)] max-w-xl mx-auto">
          Beberapa proyek yang telah saya kerjakan mencerminkan ketertarikan
          saya dalam pengembangan web dan desain antarmuka yang fungsional dan
          estetis. Klik pada gambar di bawah untuk melihat detail masing-masing
          proyek.
        </p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {listProyek.map((proyek, index) => (
            <div
              key={proyek.id}
              data-aos="zoom-in"
              data-aos-delay={index * 100} // efek masuk bertahap per card
              className="bg-[var(--card)] rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
            >
              <img
                src={proyek.gambar}
                alt={proyek.nama}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h2 className="text-xl font-bold mb-2 text-[var(--text)]">
                  {proyek.nama}
                </h2>
                <p className="text-sm text-[var(--subtext)] mb-3">
                  {proyek.desk}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {proyek.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 text-blue-700 text-xs font-medium px-2 py-1 rounded-full"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                <a
                  href={proyek.URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md transition duration-200"
                >
                  Lihat Web
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Kontak */}
      <div
        id="kontak"
        className="scroll-mt-20 py-16 px-4"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <h1 className="text-3xl font-bold text-center mb-3 text-[var(--text)]">
          Kontak
        </h1>
        <p className="text-center text-base mb-10 text-[var(--subtext)] opacity-70 max-w-xl mx-auto">
          Hubungi saya melalui email. Saya akan segera merespons pesan Anda.
        </p>

        <form
          action="https://formsubmit.co/fahmimuhammad409@gmail.com"
          method="POST"
          autoComplete="off"
          className="bg-white dark:bg-zinc-800 p-8 md:p-10 max-w-md w-full mx-auto rounded-xl shadow-lg"
        >
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="nama"
                className="font-semibold text-gray-800 dark:text-white"
              >
                Nama Lengkap
              </label>
              <input
                type="text"
                id="nama"
                name="Nama"
                placeholder="Masukkan nama lengkap Anda"
                className="p-3 rounded-md border border-gray-300 dark:border-zinc-600 bg-white dark:bg-zinc-900 text-gray-800 dark:text-white placeholder:text-gray-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="font-semibold text-gray-800 dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="Email"
                placeholder="Masukkan email aktif"
                className="p-3 rounded-md border border-gray-300 dark:border-zinc-600 bg-white dark:bg-zinc-900 text-gray-800 dark:text-white placeholder:text-gray-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="pesan"
                className="font-semibold text-gray-800 dark:text-white"
              >
                Pesan
              </label>
              <textarea
                id="pesan"
                name="Pesan"
                placeholder="Tuliskan pesan Anda di sini"
                rows="6"
                className="p-1 rounded-md border border-gray-300 dark:border-zinc-600 bg-white dark:bg-zinc-900 text-gray-800 dark:text-white placeholder:text-gray-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 transition duration-200 p-3 rounded-lg font-semibold text-white shadow-sm"
            >
              Kirim Pesan
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default App;

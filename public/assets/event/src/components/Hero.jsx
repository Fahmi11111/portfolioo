const Hero = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center bg-slate-50 dark:bg-stone-950 text-slate-900 dark:text-stone-100 transition-colors duration-500 overflow-hidden">
      {/* Ambient Glow Gradient */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-indigo-500/15 dark:bg-indigo-600/25 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[400px] h-[250px] bg-purple-500/10 dark:bg-purple-600/20 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Kolom Kiri: Headline & CTA */}
          <div className="lg:col-span-7 space-y-8 text-left">
            {/* Badge Sub-header */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-200/80 dark:bg-stone-900/80 border border-slate-300/80 dark:border-stone-700/60 backdrop-blur-md shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-indigo-600 dark:bg-indigo-400 animate-ping"></span>
              <span className="text-xs sm:text-sm font-semibold tracking-wider text-indigo-700 dark:text-indigo-300 uppercase">
                ✦ Konferensi Teknologi & Inovasi 2026
              </span>
            </div>

            {/* Judul Utama */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-slate-900 dark:text-white">
              Akselerasi Inovasi &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400">
                Masa Depan Digital
              </span>
            </h1>

            {/* Deskripsi */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-stone-300 leading-relaxed max-w-2xl font-normal">
              Wadah eksklusif bagi pengembang, arsitek sistem, dan praktisi
              teknologi untuk mengeksplorasi batas baru kecerdasan buatan,
              rekayasa perangkat lunak, serta transformasi digital.
            </p>

            {/* Tombol Aksi */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#kontak"
                className="px-7 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm sm:text-base shadow-lg shadow-indigo-500/25 dark:shadow-indigo-900/40 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2"
              >
                <span>Daftar Konferensi</span>
                <i className="ri-arrow-right-line text-lg"></i>
              </a>

              <a
                href="#agenda"
                className="px-7 py-4 rounded-xl bg-slate-200/80 hover:bg-slate-300/80 dark:bg-stone-900/80 dark:hover:bg-stone-800 text-slate-800 dark:text-stone-200 border border-slate-300 dark:border-stone-700/80 backdrop-blur-md font-semibold text-sm sm:text-base transition-all duration-300"
              >
                Eksplorasi Agenda & Speaker
              </a>
            </div>
          </div>

          {/* Kolom Kanan: Visual Robot */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-none">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 rounded-3xl blur-2xl pointer-events-none"></div>
              <img
                src="/robot.png"
                alt="AI Future Technology"
                className="relative z-10 w-full h-auto object-contain drop-shadow-2xl rounded-2xl transform hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

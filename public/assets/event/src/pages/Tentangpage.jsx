const Tentangpage = () => {
  return (
    <section
      className="tentang py-24 lg:py-32 bg-stone-950 relative overflow-hidden font-sans text-stone-100 selection:bg-indigo-500 selection:text-white"
      id="tentang"
    >
      {/* Ambient Glow Latar Belakang (Disamakan dengan Homepage) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-600/20 blur-[130px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-16 lg:mb-20">
          <div className="bg-stone-900/80 border border-stone-700/60 backdrop-blur-md w-fit py-2 px-4 rounded-full flex items-center gap-3 mx-auto mb-6 shadow-xl">
            <span className="flex h-2 w-2 rounded-full bg-indigo-500 animate-ping"></span>
            <p className="text-indigo-300 font-medium text-xs sm:text-sm tracking-wider uppercase">
              Mengenal Lebih Dekat
            </p>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight leading-[1.1]">
            Tentang{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
              Konferensi & Event
            </span>
          </h1>

          <p className="text-stone-400 text-base md:text-lg leading-relaxed font-normal max-w-3xl mx-auto">
            Di era digital yang bergerak eksponensial, inovasi dan kemampuan
            adaptasi bukan lagi sekadar pilihan, melainkan sebuah keharusan.
            Seminar ini hadir sebagai jembatan strategis untuk menutup
            kesenjangan antara potensi teknologi dan implementasi nyatanya di
            berbagai sektor industri. Kami menyediakan ruang interaktif di mana
            pengetahuan, pengalaman, dan gagasan disruptif dapat dieksplorasi
            secara terbuka.
          </p>
        </div>

        {/* Grid Layout untuk Tujuan, Visi, Misi */}
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8 md:gap-12 items-start">
          {/* Card Tujuan */}
          <div className="bg-stone-900/40 border border-stone-800/80 rounded-3xl p-8 md:p-10 backdrop-blur-md hover:bg-stone-900/80 hover:border-indigo-500/40 hover:-translate-y-1 transition-all duration-300 shadow-2xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-stone-800 border border-stone-700/50 flex items-center justify-center shrink-0">
                <i className="ri-focus-3-line text-indigo-400 text-2xl"></i>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Tujuan Utama
              </h2>
            </div>

            <ul className="flex flex-col gap-8">
              <li className="flex gap-4 items-start">
                <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-stone-800 border border-stone-700/60 text-indigo-400 flex items-center justify-center font-bold text-sm shadow-inner">
                  01
                </span>
                <div>
                  <h3 className="text-white font-semibold text-lg md:text-xl mb-1">
                    Menginspirasi & Mengedukasi
                  </h3>
                  <p className="text-stone-400 text-sm leading-relaxed">
                    Memberikan wawasan komprehensif mengenai tren teknologi
                    terkini dan memantik peserta untuk berpikir kritis dalam
                    menciptakan inovasi.
                  </p>
                </div>
              </li>

              <li className="flex gap-4 items-start">
                <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-stone-800 border border-stone-700/60 text-purple-400 flex items-center justify-center font-bold text-sm shadow-inner">
                  02
                </span>
                <div>
                  <h3 className="text-white font-semibold text-lg md:text-xl mb-1">
                    Ekspansi Jaringan Profesional
                  </h3>
                  <p className="text-stone-400 text-sm leading-relaxed">
                    Menciptakan ekosistem eksklusif bagi para profesional,
                    pengembang, dan visioner teknologi untuk berkolaborasi dan
                    membangun relasi strategis.
                  </p>
                </div>
              </li>

              <li className="flex gap-4 items-start">
                <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-stone-800 border border-stone-700/60 text-pink-400 flex items-center justify-center font-bold text-sm shadow-inner">
                  03
                </span>
                <div>
                  <h3 className="text-white font-semibold text-lg md:text-xl mb-1">
                    Akselerasi Implementasi Praktis
                  </h3>
                  <p className="text-stone-400 text-sm leading-relaxed">
                    Berfokus pada studi kasus nyata (*real-world use cases*)
                    yang aplikatif dan relevan dengan dinamika proyek atau
                    pekerjaan peserta saat ini.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Kolom Visi & Misi */}
          <div className="flex flex-col gap-8">
            {/* Card Visi */}
            <div className="bg-stone-900/40 border border-stone-800/80 rounded-3xl p-8 md:p-10 backdrop-blur-md hover:bg-stone-900/80 hover:border-indigo-500/40 hover:-translate-y-1 transition-all duration-300 shadow-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-stone-800 border border-stone-700/50 flex items-center justify-center shrink-0">
                  <i className="ri-eye-line text-purple-400 text-2xl"></i>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  Visi
                </h2>
              </div>
              <p className="text-stone-400 text-sm md:text-base leading-relaxed">
                Menjadi katalisator utama dalam mendorong akselerasi inovasi dan
                transformasi digital di Indonesia, serta membangun komunitas
                yang proaktif berkolaborasi untuk merancang masa depan teknologi
                yang inklusif.
              </p>
            </div>

            {/* Card Misi */}
            <div className="bg-stone-900/40 border border-stone-800/80 rounded-3xl p-8 md:p-10 backdrop-blur-md hover:bg-stone-900/80 hover:border-indigo-500/40 hover:-translate-y-1 transition-all duration-300 shadow-2xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-stone-800 border border-stone-700/50 flex items-center justify-center shrink-0">
                  <i className="ri-rocket-line text-pink-400 text-2xl"></i>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  Misi
                </h2>
              </div>
              <ul className="flex flex-col gap-4">
                {[
                  "Menyelenggarakan konferensi dan lokakarya bertaraf profesional yang selaras dengan standar dan kebutuhan industri.",
                  "Menghadirkan praktisi ahli dan pakar teknologi dengan rekam jejak terbukti di bidangnya.",
                  "Membangun platform interaktif yang berkelanjutan untuk memfasilitasi pertukaran pengetahuan dan ide.",
                  "Memberdayakan talenta digital dan organisasi agar tangkas beradaptasi terhadap perubahan tren teknologi.",
                ].map((misi, index) => (
                  <li key={index} className="flex gap-4 items-start">
                    <i className="ri-checkbox-circle-fill text-indigo-400 mt-0.5 text-xl shrink-0"></i>
                    <p className="text-stone-400 text-sm leading-relaxed">
                      {misi}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tentangpage;

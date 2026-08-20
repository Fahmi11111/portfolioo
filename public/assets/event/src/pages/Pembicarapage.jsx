import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

// Import Theme Context
import { useTheme } from "../context/ThemeContext";

// Import data
import { DataPembicara } from "../data";

const Pembicarapage = () => {
  const { isDark } = useTheme();

  return (
    <section
      className={`pembicara py-16 sm:py-24 lg:py-32 relative overflow-hidden font-sans transition-colors duration-300 selection:bg-indigo-500 selection:text-white ${
        isDark ? "bg-stone-950 text-stone-100" : "bg-slate-50 text-slate-900"
      }`}
    >
      {/* Ambient Glow Latar Belakang - Ukuran Adaptif */}
      <div
        className={`absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] lg:w-[600px] h-[200px] sm:h-[300px] lg:h-[350px] blur-[90px] sm:blur-[120px] rounded-full pointer-events-none ${
          isDark ? "bg-indigo-600/20" : "bg-indigo-400/20"
        }`}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 lg:mb-20">
          <div
            className={`w-fit py-1.5 px-3.5 sm:py-2 sm:px-4 rounded-full flex items-center gap-2.5 sm:gap-3 mx-auto mb-4 sm:mb-6 shadow-md border backdrop-blur-md transition-colors ${
              isDark
                ? "bg-stone-900/80 border-stone-700/60"
                : "bg-white/80 border-indigo-100 shadow-indigo-100/50"
            }`}
          >
            <span className="flex h-2 w-2 rounded-full bg-indigo-500 animate-ping"></span>
            <p
              className={`font-semibold text-[11px] sm:text-xs md:text-sm tracking-wider uppercase ${
                isDark ? "text-indigo-300" : "text-indigo-600"
              }`}
            >
              Para Pakar & Pemimpin Industri
            </p>
          </div>

          <h1
            className={`text-3xl sm:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 tracking-tight leading-[1.15] ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            Narasumber &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              Penampil Utama
            </span>
          </h1>
          <p
            className={`text-sm sm:text-base lg:text-lg leading-relaxed font-normal max-w-2xl mx-auto ${
              isDark ? "text-stone-400" : "text-slate-600"
            }`}
          >
            Temui para ahli, praktisi, dan visioner teknologi yang akan
            membagikan wawasan eksklusif serta memeriahkan panggung utama acara
            kami.
          </p>
        </div>

        {/* Wrapper Swiper & Tombol Navigasi */}
        <div className="relative px-0 sm:px-10 md:px-12">
          {/* Tombol Navigasi Kustom (Kiri) - Tampil di Tablet/Desktop */}
          <button
            className={`speaker-prev hidden sm:flex absolute left-0 md:-left-2 lg:-left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 lg:w-12 lg:h-12 rounded-full items-center justify-center transition-all duration-300 shadow-lg cursor-pointer ${
              isDark
                ? "bg-stone-800/90 border border-stone-700 text-stone-200 hover:bg-indigo-600 hover:border-indigo-500 hover:text-white"
                : "bg-white border border-slate-200 text-slate-700 hover:bg-indigo-600 hover:border-indigo-600 hover:text-white shadow-slate-300"
            }`}
            aria-label="Previous Slide"
          >
            <i className="ri-arrow-left-s-line text-xl lg:text-2xl"></i>
          </button>

          {/* Tombol Navigasi Kustom (Kanan) - Tampil di Tablet/Desktop */}
          <button
            className={`speaker-next hidden sm:flex absolute right-0 md:-right-2 lg:-right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 lg:w-12 lg:h-12 rounded-full items-center justify-center transition-all duration-300 shadow-lg cursor-pointer ${
              isDark
                ? "bg-stone-800/90 border border-stone-700 text-stone-200 hover:bg-indigo-600 hover:border-indigo-500 hover:text-white"
                : "bg-white border border-slate-200 text-slate-700 hover:bg-indigo-600 hover:border-indigo-600 hover:text-white shadow-slate-300"
            }`}
            aria-label="Next Slide"
          >
            <i className="ri-arrow-right-s-line text-xl lg:text-2xl"></i>
          </button>

          {/* Swiper Slider */}
          <Swiper
            slidesPerView={1}
            spaceBetween={16}
            loop={true}
            grabCursor={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={{
              prevEl: ".speaker-prev",
              nextEl: ".speaker-next",
            }}
            breakpoints={{
              // HP kecil (320px - 479px)
              320: {
                slidesPerView: 1,
                spaceBetween: 16,
              },
              // HP besar / Phablet (480px - 639px)
              480: {
                slidesPerView: 1.2,
                spaceBetween: 20,
              },
              // Tablet Portrait (640px - 767px)
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              // Tablet Landscape (768px - 1023px)
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              // Laptop (1024px - 1279px)
              1024: {
                slidesPerView: 3,
                spaceBetween: 28,
              },
              // Desktop Large (1280px+)
              1280: {
                slidesPerView: 4,
                spaceBetween: 32,
              },
            }}
            modules={[Pagination, Navigation, Autoplay]}
            className={`mySwiper !pb-12 sm:!pb-14 ${
              isDark
                ? "[&_.swiper-pagination-bullet]:!bg-stone-600 [&_.swiper-pagination-bullet-active]:!bg-indigo-500"
                : "[&_.swiper-pagination-bullet]:!bg-slate-400 [&_.swiper-pagination-bullet-active]:!bg-indigo-600"
            }`}
          >
            {DataPembicara.map((data) => (
              <SwiperSlide key={data.id} className="pb-2">
                {/* Card Container */}
                <div
                  className={`group relative rounded-2xl overflow-hidden border transition-all duration-500 cursor-pointer aspect-[3/4] shadow-xl ${
                    isDark
                      ? "border-stone-800 bg-stone-900 hover:border-indigo-500/50"
                      : "border-slate-200 bg-white hover:border-indigo-400 hover:shadow-2xl"
                  }`}
                >
                  {/* Foto Pembicara */}
                  <img
                    src={data.img}
                    alt={data.nama}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />

                  {/* Gradient Overlay Gelap di Bagian Bawah */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-300"></div>

                  {/* Konten Teks */}
                  <div className="absolute bottom-0 left-0 w-full p-4 sm:p-5 lg:p-6 flex flex-col justify-end z-10">
                    <div className="transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                      {/* Badge Profesi / Jabatan */}
                      <span className="inline-block bg-indigo-600 text-white font-bold text-[10px] sm:text-[11px] tracking-wider uppercase px-2.5 sm:px-3 py-1 rounded-md mb-2 shadow-md">
                        {data.job || "Keynote Speaker"}
                      </span>

                      {/* Nama Pembicara (Putih Terang) */}
                      <h3 className="!text-white text-lg sm:text-xl lg:text-2xl font-extrabold leading-tight mb-1 drop-shadow-md">
                        {data.nama}
                      </h3>

                      {/* Deskripsi Tambahan */}
                      {data.desc && (
                        <p className="!text-slate-300 text-xs sm:text-sm line-clamp-2 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                          {data.desc}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Pembicarapage;

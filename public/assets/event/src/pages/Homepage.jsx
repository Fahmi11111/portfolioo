import { useState } from "react";
import { Image, SekilasAcara } from "../data";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

// import Swal from "sweetalert2";

import { toast } from "sonner";

const Homepage = () => {
  const { isDark } = useTheme();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    noHp: "",
    instansi: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsSubmitted(false);
    setIsLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // 1. Request Snap Token ke Backend Express
      const response = await fetch("http://localhost:5000/api/create-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nama: formData.nama,
          email: formData.email,
          noHp: formData.noHp,
          instansi: formData.instansi,
          grossAmount: 50000,
        }),
      });

      const data = await response.json();

      // 2. Jika Snap Token didapat, buka Midtrans Pop-up
      if (window.snap && data.snapToken) {
        window.snap.pay(data.snapToken, {
          // A. Pembayaran Berhasil
          onSuccess: function (result) {
            console.log("Payment success:", result);

            toast.success("Pembayaran Berhasil! 🎉", {
              description: "E-Ticket telah dikirim ke email kamu.",
            });

            setIsSubmitted(true);
            setIsLoading(false);
          },

          // B. Pembayaran Menunggu (Pending)
          onPending: function (result) {
            console.log("Payment pending:", result);

            toast.warning("Menunggu Pembayaran ⏳", {
              description:
                "Silakan selesaikan pembayaran Anda sebelum batas waktu berakhir.",
            });

            setIsLoading(false);
          },

          // C. Pembayaran Gagal
          onError: function (result) {
            console.log("Payment error:", result);

            toast.error("Pembayaran Gagal ❌", {
              description:
                "Terjadi kesalahan saat memproses transaksi. Silakan coba lagi.",
            });

            setIsLoading(false);
          },

          // D. Pop-up Ditutup Pembeli
          onClose: function () {
            toast.info("Transaksi Dibatalkan", {
              description:
                "Kamu menutup halaman pembayaran sebelum transaksi selesai.",
            });
            setIsLoading(false);
          },
        });
      } else {
        throw new Error("Snap Token tidak ditemukan dari server.");
      }
    } catch (error) {
      console.error("Payment Error:", error);

      const toastId = toast.loading("Memproses pembayaran...");

      toast.success("Pembayaran Berhasil! 🎉", {
        id: toastId,
        description: "E-Ticket telah dikirim ke email kamu.",
      });

      toast.error("Pembayaran Gagal ❌", {
        description: error.message || "Terjadi kesalahan. Silakan coba lagi.",
      });

      setIsLoading(false);
    }
  };

  return (
    <div
      className={`homepage overflow-hidden font-sans transition-colors duration-300 selection:bg-indigo-500 selection:text-white ${
        isDark ? "bg-stone-950 text-stone-100" : "bg-slate-50 text-slate-900"
      }`}
    >
      {/* HERO SECTION */}
      <section
        className={`relative
    pt-28 pb-16
    sm:pt-32 sm:pb-20
    lg:pt-44 lg:pb-32
    transition-colors duration-300
    overflow-hidden
    ${
      isDark
        ? "bg-radial from-stone-900 via-stone-950 to-stone-950"
        : "bg-gradient-to-b from-indigo-50/80 via-slate-50 to-slate-50"
    }`}
      >
        {/* Glowing Ambient Background */}
        <div
          className={`absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] blur-[130px] rounded-full pointer-events-none ${
            isDark ? "bg-indigo-600/20" : "bg-indigo-400/20"
          }`}
        ></div>

        <div className="container mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
          <div className="hero grid md:grid-cols-2 items-center gap-12 lg:gap-16">
            <div className="text-center md:text-left">
              {/* Badge */}
              <div
                className={`w-fit py-2 px-4 rounded-full flex items-center gap-3 mx-auto md:mx-0 mb-6 shadow-md border backdrop-blur-md transition-colors ${
                  isDark
                    ? "bg-stone-900/80 border-stone-700/60"
                    : "bg-white/80 border-indigo-100 shadow-indigo-100/50"
                }`}
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <span className="flex h-2 w-2 rounded-full bg-indigo-500 animate-ping"></span>

                <p
                  className={`font-medium text-xs sm:text-sm tracking-wider uppercase ${
                    isDark ? "text-indigo-300" : "text-indigo-600"
                  }`}
                >
                  Konferensi Teknologi & Inovasi 2026
                </p>
              </div>

              {/* Title */}
              <h1
                className={`
    text-[2.35rem]
    leading-[1.08]
    sm:text-6xl
    lg:text-7xl
    font-extrabold
    mb-5
    tracking-tight
    ${isDark ? "text-white" : "text-slate-900"}
  `}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="100"
              >
                Membangun <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                  Masa Depan Digital
                </span>
              </h1>

              {/* Subtitle */}
              <p
                className={`
    text-[15px]
    sm:text-lg
    leading-7
    mb-7
    max-w-lg
    mx-auto
    md:mx-0
    font-normal
    ${isDark ? "text-stone-400" : "text-slate-600"}
  `}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                Titik temu bagi para pengembang, pemimpin pemikiran, dan
                praktisi industri untuk mengeksplorasi batas baru kecerdasan
                buatan, arsitektur perangkat lunak, dan transformasi teknologi.
              </p>

              {/* Action Buttons */}
              <div
                className="
    flex flex-col
    sm:flex-row
    items-center
    gap-3
    justify-center
    md:justify-start
  "
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="300"
              >
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="
    w-full sm:w-auto
    min-h-[54px]
    bg-gradient-to-r
    from-indigo-600
    via-purple-600
    to-pink-600
    hover:from-indigo-500
    hover:via-purple-500
    hover:to-pink-500
    text-white
    py-3.5
    px-8
    rounded-2xl
    font-semibold
    shadow-xl
    shadow-indigo-600/25
    hover:-translate-y-0.5
    transition-all
    duration-300
    flex
    items-center
    justify-center
    gap-2
    group
    cursor-pointer
  "
                >
                  <span>Amankan Tiket Sekarang</span>
                  <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform"></i>
                </button>

                <a
                  href="#pelaksanaan-event"
                  className={`
    w-full sm:w-auto
    min-h-[54px]
    py-3.5
    px-6
    rounded-2xl
    font-medium
    transition-all
    duration-300
    text-center
    border
    flex items-center justify-center
    ${
      isDark
        ? "text-stone-300 hover:text-white bg-stone-900/70 hover:bg-stone-800 border-stone-800"
        : "text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-100 border-slate-300 shadow-sm"
    }
  `}
                >
                  Lihat Lokasi & Agenda
                </a>
              </div>

              {/* Quick Metrics */}
              <div
                className={`
    grid grid-cols-3
    gap-2
    sm:gap-4
    mt-10
    pt-6
    sm:pt-8
    border-t
    ${isDark ? "border-stone-800/80" : "border-slate-200"}
  `}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="400"
              >
                <div
                  className={`
    rounded-2xl
    p-3
    sm:p-0
    ${
      isDark
        ? "bg-stone-900/60 sm:bg-transparent"
        : "bg-white sm:bg-transparent"
    }
  `}
                >
                  <h4
                    className={`
      text-xl
      sm:text-2xl
      lg:text-3xl
      font-bold
      ${isDark ? "text-white" : "text-slate-900"}
    `}
                  >
                    xxx+
                  </h4>

                  <p
                    className={`
      text-[10px]
      sm:text-xs
      mt-1
      leading-tight
      ${isDark ? "text-stone-400" : "text-slate-500"}
    `}
                  >
                    Peserta Terdaftar
                  </p>
                </div>

                <div>
                  <h4
                    className={`text-2xl lg:text-3xl font-bold ${
                      isDark ? "text-white" : "text-slate-900"
                    }`}
                  >
                    xx+
                  </h4>

                  <p
                    className={`text-xs mt-1 ${
                      isDark ? "text-stone-400" : "text-slate-500"
                    }`}
                  >
                    Sesi & Workshop
                  </p>
                </div>

                <div>
                  <h4
                    className={`text-2xl lg:text-3xl font-bold ${
                      isDark ? "text-white" : "text-slate-900"
                    }`}
                  >
                    100%
                  </h4>

                  <p
                    className={`text-xs mt-1 ${
                      isDark ? "text-stone-400" : "text-slate-500"
                    }`}
                  >
                    Sertifikat Resmi
                  </p>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div
              className="relative w-full flex justify-center md:justify-end mt-8 md:mt-0"
              data-aos="zoom-in"
              data-aos-duration="1200"
            >
              {/* Glow khusus mobile */}
              <div
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
    w-[260px] h-[260px] md:w-80 md:h-80
    blur-[80px] md:blur-3xl rounded-full
    ${isDark ? "bg-indigo-500/30" : "bg-indigo-300/40"}`}
              ></div>

              <div className="relative z-10 p-4 sm:p-0">
                <img
                  src={Image.HeroImage}
                  alt="Ilustrasi Konferensi Teknologi"
                  className="
        w-full
        max-w-[300px]
        sm:max-w-[380px]
        md:max-w-[460px]
        object-contain
        drop-shadow-[0_20px_50px_rgba(79,70,229,0.25)]
        hover:scale-[1.02]
        transition-transform duration-500
      "
                />

                {/* Floating badge khusus mobile */}
                <div
                  className={`
        absolute -bottom-2 left-1/2 -translate-x-1/2
        md:hidden
        px-4 py-2
        rounded-full
        border
        backdrop-blur-xl
        shadow-xl
        whitespace-nowrap
        ${
          isDark
            ? "bg-stone-900/80 border-stone-700 text-stone-200"
            : "bg-white/90 border-slate-200 text-slate-700"
        }
      `}
                >
                  <div className="flex items-center gap-2 text-xs font-semibold">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span>Tech Conference 2026</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section
        className={`py-16 sm:py-20 lg:py-32 relative border-t transition-colors duration-300 ${
          isDark ? "bg-stone-950 border-stone-900" : "bg-white border-slate-200"
        }`}
      >
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2
              className={`text-3xl md:text-5xl font-bold mb-6 tracking-tight ${
                isDark ? "text-white" : "text-slate-900"
              }`}
              data-aos="fade-up"
            >
              Pengalaman Konferensi Kelas Dunia
            </h2>

            <p
              className={`text-base md:text-lg leading-relaxed ${
                isDark ? "text-stone-400" : "text-slate-600"
              }`}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Rangkaian acara yang dirancang untuk memperluas cakrawala
              berpikir, mengasah keterampilan praktis, dan membangun jejaring
              strategis di industri teknologi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SekilasAcara.map((acara, index) => (
              <div
                key={acara.id || index}
                className={`
  p-6
  sm:p-8
  rounded-2xl
  border
  backdrop-blur-sm
  group
  transition-all
  duration-300
  ${
    isDark
      ? "bg-stone-900/40 border-stone-800/80 hover:bg-stone-900/80 hover:border-indigo-500/40 hover:-translate-y-1"
      : "bg-slate-50/80 border-slate-200 hover:bg-white hover:border-indigo-300 hover:shadow-xl hover:-translate-y-1"
  }
`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div
                  className={`w-14 h-14 border rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:border-indigo-500 transition-colors duration-300 ${
                    isDark
                      ? "bg-stone-800 border-stone-700/50"
                      : "bg-indigo-50 border-indigo-100"
                  }`}
                >
                  <i
                    className={`${acara.icon} text-2xl transition-colors duration-300 ${
                      isDark
                        ? "text-indigo-400 group-hover:text-white"
                        : "text-indigo-600 group-hover:text-white"
                    }`}
                  ></i>
                </div>

                <h3
                  className={`text-xl font-bold mb-3 ${
                    isDark ? "text-white" : "text-slate-900"
                  }`}
                >
                  {acara.judul}
                </h3>

                <p
                  className={`leading-relaxed text-sm ${
                    isDark ? "text-stone-400" : "text-slate-600"
                  }`}
                >
                  {acara.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPEAKERS SECTION */}
      <section
        className={`pembicara py-16 sm:py-20 lg:py-32 border-t transition-colors duration-300 ${
          isDark
            ? "bg-stone-900/30 border-stone-900"
            : "bg-slate-100/70 border-slate-200"
        }`}
      >
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2
              className={`text-3xl md:text-5xl font-bold mb-6 tracking-tight ${
                isDark ? "text-white" : "text-slate-900"
              }`}
              data-aos="fade-up"
            >
              Pembicara & Visioner
            </h2>

            <p
              className={`text-base md:text-lg leading-relaxed ${
                isDark ? "text-stone-400" : "text-slate-600"
              }`}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Pelajari tren masa depan langsung dari para eksekutif dan pakar
              yang menggerakkan inovasi global.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
            {/* Speaker 1 */}
            <div
              className={`group relative w-full max-w-[320px] sm:max-w-[320px] rounded-2xl overflow-hidden border transition-all duration-500 shadow-xl ${
                isDark
                  ? "border-stone-800 bg-stone-900 hover:border-indigo-500/50"
                  : "border-slate-200 bg-white hover:border-indigo-400 hover:shadow-2xl"
              }`}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="overflow-hidden aspect-[4/5] relative bg-stone-900">
                <img
                  src={Image.Pembicara1}
                  alt="Ms. Jessica - Keynote Speaker"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/30 to-transparent"></div>
              </div>

              <div className="absolute bottom-0 left-0 w-full p-6">
                <h3 className="text-indigo-400 text-xl sm:text-2xl font-bold mb-1">
                  Ms. Jessica
                </h3>

                <p className="text-indigo-300 font-medium text-sm">
                  Chief Executive Officer @ TechCorp
                </p>
              </div>
            </div>

            {/* Speaker 2 */}
            <div
              className={`group relative w-full max-w-[320px] sm:max-w-[320px] rounded-2xl overflow-hidden border transition-all duration-500 shadow-xl ${
                isDark
                  ? "border-stone-800 bg-stone-900 hover:border-indigo-500/50"
                  : "border-slate-200 bg-white hover:border-indigo-400 hover:shadow-2xl"
              }`}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="overflow-hidden aspect-[4/5] relative bg-stone-900">
                <img
                  src={Image.Pembicara2}
                  alt="Mr. Jajang - Keynote Speaker"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/30 to-transparent"></div>
              </div>

              <div className="absolute bottom-0 left-0 w-full p-6">
                <h3 className="text-indigo-400 text-xl sm:text-2xl font-bold mb-1">
                  Mr. Jajang
                </h3>

                <p className="text-indigo-300 font-medium text-sm">
                  VP of Engineering @ Techno Group
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12" data-aos="fade-up">
            <Link
              to="/pembicara-event"
              className={`inline-flex items-center gap-2 font-semibold transition-colors ${
                isDark
                  ? "text-indigo-400 hover:text-indigo-300"
                  : "text-indigo-600 hover:text-indigo-700"
              }`}
            >
              Lihat Seluruh Pembicara
              <i className="ri-arrow-right-line"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* SPONSOR SECTION */}
      <section
        className={`sponsor py-16 border-y transition-colors duration-300 ${
          isDark ? "bg-stone-950 border-stone-900" : "bg-white border-slate-200"
        }`}
      >
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <p
            className={`text-center font-semibold text-xs tracking-widest uppercase mb-8 ${
              isDark ? "text-stone-500" : "text-slate-400"
            }`}
          >
            Mitra Strategis & Sponsor Resmi
          </p>

          <div
            className="flex
    items-center
    justify-center
    gap-8
    sm:gap-16
    flex-wrap
    sm:flex-nowrap
    opacity-70
    hover:opacity-100
    transition-opacity
    duration-300"
          >
            <img
              src={Image.Sponsor1}
              alt="Sponsor 1"
              className={`
  h-7
  sm:h-10
  max-w-[90px]
  sm:max-w-none
  w-auto
  object-contain
  ${isDark ? "brightness-200" : "brightness-100"}
`}
            />

            <img
              src={Image.Sponsor2}
              alt="Sponsor 2"
              className={`
  h-7
  sm:h-10
  max-w-[90px]
  sm:max-w-none
  w-auto
  object-contain
  ${isDark ? "brightness-200" : "brightness-100"}
`}
            />

            <img
              src={Image.Sponsor3}
              alt="Sponsor 3"
              className={`
  h-7
  sm:h-10
  max-w-[90px]
  sm:max-w-none
  w-auto
  object-contain
  ${isDark ? "brightness-200" : "brightness-100"}
`}
            />

            <img
              src={Image.Sponsor4}
              alt="Sponsor 4"
              className={`
  h-7
  sm:h-10
  max-w-[90px]
  sm:max-w-none
  w-auto
  object-contain
  ${isDark ? "brightness-200" : "brightness-100"}
`}
            />
          </div>
        </div>
      </section>

      {/* EVENT DETAILS & REGISTRATION */}
      <section
        id="pelaksanaan-event"
        className={`pelaksanaan py-16 sm:py-20 lg:py-32 transition-colors duration-300 ${
          isDark ? "bg-stone-950" : "bg-slate-50"
        }`}
      >
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2
              className={`text-3xl md:text-5xl font-bold mb-6 tracking-tight ${
                isDark ? "text-white" : "text-slate-900"
              }`}
              data-aos="fade-up"
            >
              Pelaksanaan Acara
            </h2>

            <p
              className={`text-base md:text-lg ${
                isDark ? "text-stone-400" : "text-slate-600"
              }`}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Diselenggarakan di lokasi strategis dengan fasilitas premium untuk
              kenyamanan belajar dan berjejaring.
            </p>
          </div>

          <div
            className={`grid lg:grid-cols-12 gap-8 items-stretch rounded-3xl p-6 md:p-10 border backdrop-blur-md transition-all duration-300 ${
              isDark
                ? "bg-stone-900/60 border-stone-800"
                : "bg-white border-slate-200 shadow-xl"
            }`}
          >
            {/* Map */}
            <div
              className="
    lg:col-span-7
    w-full
    h-[280px]
    sm:h-[350px]
    rounded-2xl
    overflow-hidden
    border
    border-slate-200
    dark:border-stone-700/50
    shadow-md
  "
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.0139752529158!2d107.59354422414098!3d-6.888928867409505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6603f5b8f93%3A0x65b023128ec2b79a!2sParis%20Van%20Java%2C%20Jl.%20Sukajadi%20No.131-139%2C%20Cipedes%2C%20Kec.%20Sukajadi%2C%20Kota%20Bandung%2C%20Jawa%20Barat%2040162!5e0!3m2!1sid!2sid!4v1786421547777!5m2!1sid!2sid"
                width="100%"
                height="100%"
                title="Lokasi Event"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                className="
  w-full
  h-full
  object-cover
  opacity-90
  hover:opacity-100
  transition-all
  duration-500
"
              ></iframe>
            </div>

            {/* Details & CTA */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl border flex items-center justify-center shrink-0 ${
                      isDark
                        ? "bg-stone-800 border-stone-700"
                        : "bg-indigo-50 border-indigo-100"
                    }`}
                  >
                    <i
                      className={`ri-map-pin-2-fill text-xl ${
                        isDark ? "text-indigo-400" : "text-indigo-600"
                      }`}
                    ></i>
                  </div>

                  <div>
                    <h4
                      className={`text-lg font-semibold ${
                        isDark ? "text-white" : "text-slate-900"
                      }`}
                    >
                      Paris Van Java (PVJ)
                    </h4>

                    <p
                      className={`text-sm ${
                        isDark ? "text-stone-400" : "text-slate-600"
                      }`}
                    >
                      Grand Ballroom, Kota Bandung, Jawa Barat
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl border flex items-center justify-center shrink-0 ${
                      isDark
                        ? "bg-stone-800 border-stone-700"
                        : "bg-indigo-50 border-indigo-100"
                    }`}
                  >
                    <i
                      className={`ri-calendar-event-fill text-xl ${
                        isDark ? "text-indigo-400" : "text-indigo-600"
                      }`}
                    ></i>
                  </div>

                  <div>
                    <h4
                      className={`text-lg font-semibold ${
                        isDark ? "text-white" : "text-slate-900"
                      }`}
                    >
                      Kamis, 20 Agustus 2026
                    </h4>

                    <p
                      className={`text-sm ${
                        isDark ? "text-stone-400" : "text-slate-600"
                      }`}
                    >
                      09.00 - 17.00 WIB (Registrasi Ulang 08.00 WIB)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl border flex items-center justify-center shrink-0 ${
                      isDark
                        ? "bg-stone-800 border-stone-700"
                        : "bg-indigo-50 border-indigo-100"
                    }`}
                  >
                    <i
                      className={`ri-pass-valid-fill text-xl ${
                        isDark ? "text-indigo-400" : "text-indigo-600"
                      }`}
                    ></i>
                  </div>

                  <div>
                    <h4
                      className={`text-lg font-semibold ${
                        isDark ? "text-white" : "text-slate-900"
                      }`}
                    >
                      Fasilitas Peserta
                    </h4>

                    <p
                      className={`text-sm ${
                        isDark ? "text-stone-400" : "text-slate-600"
                      }`}
                    >
                      E-Certificate, Lunch Box, Networking Kit & Swag Bag
                    </p>
                  </div>
                </div>
              </div>

              {/* Pricing & Form Trigger */}
              <div
                className={`pt-6 border-t ${
                  isDark ? "border-stone-800" : "border-slate-200"
                }`}
              >
                <div className="flex justify-between items-center mb-2">
                  <span
                    className={`text-sm font-medium ${
                      isDark ? "text-stone-400" : "text-slate-500"
                    }`}
                  >
                    Harga Tiket Early Bird
                  </span>
                </div>

                <div className="flex items-baseline gap-2 mb-6">
                  <h3
                    className={`text-4xl font-extrabold ${
                      isDark ? "text-white" : "text-slate-900"
                    }`}
                  >
                    Rp 50.000
                  </h3>

                  <span
                    className={`text-sm ${
                      isDark ? "text-stone-500" : "text-slate-500"
                    }`}
                  >
                    / orang
                  </span>
                </div>

                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full bg-indigo-600 hover:bg-indigo-500 text-white py-4 px-6 rounded-xl text-base font-bold transition-all duration-300 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-500/50 cursor-pointer text-center block"
                >
                  Daftar Sekarang
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MODAL PENDAFTARAN INTERAKTIF */}
      {isModalOpen && (
        <div
          className="
    fixed inset-0
    z-50
    flex
    items-end
    sm:items-center
    justify-center
    p-0
    sm:p-4
    bg-black/70
    backdrop-blur-md
  "
        >
          <div
            className={`
    border
    w-full
    max-w-lg
    p-5
    sm:p-8
    relative
    shadow-2xl

    rounded-t-[2rem]
    sm:rounded-2xl

    max-h-[92vh]
    overflow-y-auto

    animate-in
    fade-in
    slide-in-from-bottom-5
    sm:zoom-in-95
    duration-300

    ${
      isDark
        ? "bg-stone-900 border-stone-800 text-white"
        : "bg-white border-slate-200 text-slate-900"
    }
  `}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className={`absolute top-4 right-4 p-2 rounded-lg transition-colors ${
                isDark
                  ? "text-stone-400 hover:text-white hover:bg-stone-800"
                  : "text-slate-400 hover:text-slate-800 hover:bg-slate-100"
              }`}
            >
              <i className="ri-close-line text-2xl"></i>
            </button>

            {!isSubmitted ? (
              <>
                <h3
                  className={`text-2xl font-bold mb-2 ${
                    isDark ? "text-white" : "text-slate-900"
                  }`}
                >
                  Formulir Pendaftaran
                </h3>

                <p
                  className={`text-sm mb-6 ${
                    isDark ? "text-stone-400" : "text-slate-600"
                  }`}
                >
                  Isi data Anda di bawah ini untuk mengamankan tiket konferensi.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      className={`block text-xs font-semibold uppercase tracking-wider mb-2 ${
                        isDark ? "text-stone-300" : "text-slate-700"
                      }`}
                    >
                      Nama Lengkap
                    </label>

                    <input
                      type="text"
                      name="nama"
                      required
                      value={formData.nama}
                      onChange={handleInputChange}
                      placeholder="Masukkan nama lengkap Anda"
                      className={`
  w-full
  rounded-xl
  px-4
  py-3.5
  border
  text-sm
  focus:outline-none
  focus:ring-2
  focus:ring-indigo-500/20
  focus:border-indigo-500
  transition-all
  ${
    isDark
      ? "bg-stone-950 border-stone-800 text-white placeholder-stone-600"
      : "bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400"
  }
`}
                    />
                  </div>

                  <div>
                    <label
                      className={`block text-xs font-semibold uppercase tracking-wider mb-2 ${
                        isDark ? "text-stone-300" : "text-slate-700"
                      }`}
                    >
                      Alamat Email
                    </label>

                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="contoh@email.com"
                      className={`w-full rounded-xl px-4 py-3 border focus:outline-none focus:border-indigo-500 transition-colors ${
                        isDark
                          ? "bg-stone-950 border-stone-800 text-white placeholder-stone-600"
                          : "bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400"
                      }`}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        className={`block text-xs font-semibold uppercase tracking-wider mb-2 ${
                          isDark ? "text-stone-300" : "text-slate-700"
                        }`}
                      >
                        Nomor WhatsApp
                      </label>

                      <input
                        type="tel"
                        name="noHp"
                        required
                        value={formData.noHp}
                        onChange={handleInputChange}
                        placeholder="08123456789"
                        className={`w-full rounded-xl px-4 py-3 border focus:outline-none focus:border-indigo-500 transition-colors ${
                          isDark
                            ? "bg-stone-950 border-stone-800 text-white placeholder-stone-600"
                            : "bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400"
                        }`}
                      />
                    </div>

                    <div>
                      <label
                        className={`block text-xs font-semibold uppercase tracking-wider mb-2 ${
                          isDark ? "text-stone-300" : "text-slate-700"
                        }`}
                      >
                        Instansi / Perusahaan
                      </label>

                      <input
                        type="text"
                        name="instansi"
                        value={formData.instansi}
                        onChange={handleInputChange}
                        placeholder="Universitas / Perusahaan"
                        className={`w-full rounded-xl px-4 py-3 border focus:outline-none focus:border-indigo-500 transition-colors ${
                          isDark
                            ? "bg-stone-950 border-stone-800 text-white placeholder-stone-600"
                            : "bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400"
                        }`}
                      />
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="
  w-full
  min-h-[54px]
  bg-gradient-to-r
  from-indigo-600
  via-purple-600
  to-indigo-600
  hover:from-indigo-500
  hover:via-purple-500
  hover:to-indigo-500
  disabled:opacity-60
  text-white
  font-bold
  py-3.5
  px-6
  rounded-xl
  transition-all
  duration-300
  shadow-xl
  shadow-indigo-600/25
  cursor-pointer
  flex
  items-center
  justify-center
  gap-2
"
                    >
                      {isLoading ? (
                        <>
                          <i className="ri-loader-4-line animate-spin text-xl"></i>
                          <span>Memproses Pembayaran...</span>
                        </>
                      ) : (
                        <span>Konfirmasi & Lanjut Pembayaran</span>
                      )}
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div className="text-center py-6">
                <div className="w-16 h-16 bg-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-500/30">
                  <i className="ri-checkbox-circle-fill text-3xl"></i>
                </div>

                <h3
                  className={`text-2xl font-bold mb-2 ${
                    isDark ? "text-white" : "text-slate-900"
                  }`}
                >
                  Pendaftaran Berhasil!
                </h3>

                <p
                  className={`text-sm mb-6 ${
                    isDark ? "text-stone-400" : "text-slate-600"
                  }`}
                >
                  Terima kasih,{" "}
                  <span
                    className={
                      isDark
                        ? "text-white font-semibold"
                        : "text-slate-900 font-semibold"
                    }
                  >
                    {formData.nama}
                  </span>
                  . Instruksi pembayaran dan E-Ticket telah dikirimkan ke email{" "}
                  <span className="text-indigo-600 dark:text-indigo-400 font-medium">
                    {formData.email}
                  </span>
                  .
                </p>

                <button
                  onClick={closeModal}
                  className={`font-semibold py-2.5 px-6 rounded-xl text-sm transition-colors ${
                    isDark
                      ? "bg-stone-800 hover:bg-stone-700 text-white"
                      : "bg-slate-200 hover:bg-slate-300 text-slate-800"
                  }`}
                >
                  Tutup
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Homepage;

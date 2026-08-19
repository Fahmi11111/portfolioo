import { useEffect, useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import DataImage from "./data";
import { listTools, listProyek, listSertifikat } from "./data";
import AOS from "aos";
import "aos/dist/aos.css";
import PreLoader from "./components/PreLoader"; // <-- 1. IMPORT PRELOADER DI SINI

import {
  Download,
  ExternalLink,
  Send,
  Terminal,
  User,
  Briefcase,
  Award,
  Mail,
  FileText,
} from "lucide-react";

function App() {
  const audioRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1300,
      once: true,
      disableMutationObserver: true,
      easing: "ease-out-cubic",
    });
    audioRef.current = new Audio("/mixkit-retro-game-notification-212.wav");
  }, []);

  function playClickSound() {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  }

  function createRipple(e) {
    const button = e.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - button.getBoundingClientRect().left - radius}px`;
    circle.style.top = `${e.clientY - button.getBoundingClientRect().top - radius}px`;
    circle.classList.add("ripple");

    const existingRipple = button.getElementsByClassName("ripple")[0];
    if (existingRipple) existingRipple.remove();

    button.appendChild(circle);
  }

  return (
    <main className="relative transition-all duration-300 bg-[var(--bg)] text-[var(--text)] overflow-hidden">
      {/* Background Ambient Glow (Opsional untuk estetika Elegant Darkness) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-500/20 rounded-full blur-[100px]"></div>
        <div className="absolute top-[40%] right-[-5%] w-80 h-80 bg-purple-500/20 rounded-full blur-[120px]"></div>
      </div>

      {/* BERANDA */}
      <section
        id="beranda"
        className="min-h-screen flex items-center pt-24 px-4 scroll-mt-20"
      >
        <div
          className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12"
          data-aos="fade-up"
        >
          {/* Teks Hero */}
          <div data-aos="fade-right" data-aos-delay="100">
            {/* Badge Quote (Glassmorphism) - DIPERBAIKI */}
            <div className="flex items-center gap-3 mb-6 bg-gray-100/80 dark:bg-white/5 backdrop-blur-md border border-gray-300 dark:border-white/10 w-fit p-2 pr-4 rounded-full shadow-lg transition-colors">
              <img
                src={DataImage.HeroImage}
                alt="Profile Mini"
                className="w-10 h-10 object-cover rounded-full border-2 border-blue-500"
              />
              <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                Konsistensi & ketekunan adalah kunci 😉
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight tracking-tight">
              Halo 👋, saya <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Muhammad Fahmi
              </span>
            </h1>

            <div className="flex items-center gap-2 text-xl md:text-2xl font-semibold text-[var(--subtext)] mb-4">
              <Terminal size={24} className="text-blue-400" />
              <TypeAnimation
                sequence={[
                  "Punya Semangat Belajar Tinggi",
                  2000,
                  "Mahasiswa Teknik Informatika",
                  2000,
                  "Front-End Web Developer",
                  2000,
                  "Aktif Membangun Proyek Pribadi",
                  2000,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
              />
            </div>

            <p className="text-base md:text-lg leading-relaxed text-gray-400 dark:text-gray-300 mt-2 mb-8 max-w-lg">
              Mahasiswa Universitas Indraprasta PGRI yang antusias mendalami
              dunia pengembangan web & desain antarmuka. Selalu bersemangat
              mengubah ide menjadi kode dan pengalaman digital yang interaktif.
            </p>

            <div className="flex gap-4 flex-wrap">
              <a
                href="https://drive.google.com/file/d/17oHyN6yCQSlLz-geFi11aH3QNNiSo7Ix/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.6)] hover:-translate-y-1"
              >
                <Download size={18} /> Download CV
              </a>
              <a
                href="#proyek"
                className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-gray-600 hover:border-gray-400 text-[var(--text)] px-6 py-3 rounded-full font-medium transition-all duration-300 hover:-translate-y-1"
              >
                <Briefcase size={18} /> Lihat Proyek
              </a>
            </div>
          </div>

          {/* Gambar Hero - DIPERBAIKI */}
          <div
            className="mt-10 md:mt-0 flex justify-center"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <div className="relative flex justify-center items-center">
              {/* Dekorasi lingkaran di belakang gambar (sekarang menempel pas di tengah) */}
              <div className="absolute w-[250px] h-[250px] md:w-[320px] md:h-[320px] bg-gradient-to-tr from-blue-600 to-purple-600 rounded-full blur-[80px] opacity-40 animate-pulse"></div>

              <img
                src={DataImage.HeroImage}
                alt="Muhammad Fahmi"
                className="relative w-[280px] md:w-[450px] object-cover drop-shadow-[0_20px_50px_rgba(0,0,0,0.2)] dark:drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-10 transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TENTANG */}
      <section id="tentang" className="scroll-mt-20 py-20 px-4">
        <div
          data-aos="fade-up"
          className="max-w-4xl mx-auto p-8 md:p-12 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl relative overflow-hidden group"
        >
          {/* Aksen garis atas */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

          <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
            <div className="w-24 h-24 shrink-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-1 shadow-lg">
              <img
                src={DataImage.LogoImage}
                alt="Logo UNINDRA"
                className="w-full h-full object-cover rounded-xl bg-[var(--bg)]"
              />
            </div>

            <div>
              <h2 className="flex items-center justify-center md:justify-start gap-2 text-2xl font-bold mb-3">
                <User className="text-blue-400" /> Tentang Saya
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-[var(--subtext)]">
                Saat ini saya menempuh pendidikan semester 7 di{" "}
                <strong>Universitas Indraprasta PGRI (UNINDRA)</strong>. Saya
                sangat menikmati proses memecahkan masalah melalui kode dan
                merancang *user interface* yang tidak hanya fungsional, tetapi
                juga memanjakan mata.
              </p>

              <div className="flex justify-center md:justify-start gap-8 mt-6">
                <div className="text-center md:text-left">
                  <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                    5+
                  </h3>
                  <p className="text-sm font-medium text-[var(--subtext)]">
                    Proyek Pribadi
                  </p>
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
                    Aktif
                  </h3>
                  <p className="text-sm font-medium text-[var(--subtext)]">
                    Eksplorasi Teknologi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TOOLS */}
      <section id="tools" className="py-16 px-4" data-aos="fade-up">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Tech Stack & Tools</h2>
            <p className="text-base text-[var(--subtext)] max-w-xl mx-auto">
              Teknologi dan perangkat lunak yang biasa saya gunakan untuk
              merancang dan membangun proyek.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {listTools.map((tool, index) => (
              <button
                key={tool.id}
                onClick={(e) => {
                  createRipple(e);
                  playClickSound();
                  e.currentTarget.classList.add("scale-95");
                  setTimeout(
                    () => e.currentTarget.classList.remove("scale-95"),
                    150,
                  );
                }}
                className="relative overflow-hidden group focus:outline-none transition-all duration-300"
                data-aos="zoom-in-up"
                data-aos-delay={index * 100}
              >
                <div className="flex items-center gap-4 p-5 min-h-[100px] rounded-2xl border border-white/5 bg-[var(--card)] hover:bg-white/5 shadow-md hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:border-blue-500/30 transition-all duration-300 z-10">
                  <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center p-2 group-hover:scale-110 transition-transform duration-300">
                    <img
                      src={tool.gambar}
                      alt={tool.nama}
                      className="w-full h-full object-contain drop-shadow-md"
                    />
                  </div>
                  <div className="flex flex-col text-left">
                    <h4 className="font-semibold text-lg text-[var(--text)] group-hover:text-blue-400 transition-colors duration-200">
                      {tool.nama}
                    </h4>
                    <p className="text-sm text-[var(--subtext)] line-clamp-1">
                      {tool.ket}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* SERTIFIKAT */}
      <section
        id="sertifikat"
        className="scroll-mt-20 py-20 px-4"
        data-aos="fade-up"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="flex items-center justify-center gap-2 text-3xl font-bold mb-3">
              <Award className="text-blue-400" /> Lisensi & Sertifikasi
            </h2>
            <p className="text-base text-[var(--subtext)] max-w-xl mx-auto">
              Bukti kompetensi dan pelatihan resmi yang telah saya selesaikan
              untuk menunjang keahlian profesional.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {listSertifikat.map((cert, index) => (
              <div
                key={cert.id}
                data-aos="zoom-in-up"
                data-aos-delay={index * 100}
                className="group bg-[var(--card)] rounded-2xl border border-white/10 overflow-hidden shadow-lg hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                {/* Image Preview */}
                <span className="absolute top-3 right-3 bg-blue-600/80 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {cert.tahun}
                </span>

                {/* Body Info */}
                <div className="p-5 flex-grow flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-medium text-blue-400 uppercase tracking-wider">
                      {cert.penerbit}
                    </span>
                    <h3 className="text-lg font-bold text-[var(--text)] mt-1 mb-2 line-clamp-2">
                      {cert.nama}
                    </h3>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 mt-4 pt-4 border-t border-white/10">
                    <a
                      href={cert.filePdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 bg-blue-600/20 hover:bg-blue-600 border border-blue-500/30 text-xs font-medium text-blue-400 hover:text-white py-2 rounded-lg transition"
                    >
                      <FileText size={16} /> Dokumen PDF
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROYEK - DIPERBAIKI (Background Menyatu Sempurna) */}
      <section
        id="proyek"
        className="scroll-mt-20 py-20 px-4 bg-transparent transition-colors"
        data-aos="fade-up"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Karya & Proyek</h2>
            <p className="text-base text-[var(--subtext)] max-w-xl mx-auto">
              Implementasi dari pembelajaran yang saya lakukan. Mengubah barisan
              kode menjadi antarmuka yang estetis dan fungsional.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {listProyek.map((proyek, index) => (
              <div
                key={proyek.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="group bg-[var(--card)] rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-blue-900/20 border border-white/10 overflow-hidden flex flex-col h-full transition-all duration-300 hover:-translate-y-2"
              >
                {/* Efek Hover Gambar */}
                <div className="relative overflow-hidden h-52">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all duration-500 z-10"></div>
                  <img
                    src={proyek.gambar}
                    alt={proyek.nama}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2 text-[var(--text)] group-hover:text-blue-400 transition-colors">
                    {proyek.nama}
                  </h3>
                  <p className="text-sm text-[var(--subtext)] mb-5 flex-grow">
                    {proyek.desk}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {proyek.tools.map((tool, i) => (
                      <span
                        key={i}
                        className="bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold px-3 py-1 rounded-full"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <a
                    href={proyek.URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-white/5 hover:bg-blue-600 border border-white/10 hover:border-blue-600 text-white px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300"
                  >
                    <ExternalLink size={16} /> Lihat Web
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KONTAK */}
      <section
        id="kontak"
        className="scroll-mt-20 py-24 px-4"
        data-aos="fade-up"
      >
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="flex items-center justify-center gap-2 text-3xl font-bold mb-3">
              <Mail className="text-blue-400" /> Mari Berkolaborasi
            </h2>
            <p className="text-base text-[var(--subtext)]">
              Tertarik bekerja sama atau sekadar menyapa? Kirim pesan melalui
              formulir di bawah ini.
            </p>
          </div>

          <form
            action="https://formsubmit.co/fahmimuhammad409@gmail.com"
            method="POST"
            autoComplete="off"
            className="bg-[var(--card)] p-8 md:p-12 rounded-3xl shadow-xl border border-white/10 relative overflow-hidden"
          >
            {/* Hiasan form */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-bl-full pointer-events-none"></div>

            <div className="flex flex-col gap-5 relative z-10">
              <div>
                <label className="block text-sm font-medium text-[var(--subtext)] mb-2 ml-1">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  name="Nama"
                  placeholder="John Doe"
                  required
                  className="w-full px-5 py-3.5 bg-black/20 border border-white/10 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 outline-none text-white placeholder-gray-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--subtext)] mb-2 ml-1">
                  Email Aktif
                </label>
                <input
                  type="email"
                  name="Email"
                  placeholder="johndoe@email.com"
                  required
                  className="w-full px-5 py-3.5 bg-black/20 border border-white/10 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 outline-none text-white placeholder-gray-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--subtext)] mb-2 ml-1">
                  Pesan
                </label>
                <textarea
                  name="Pesan"
                  rows="4"
                  placeholder="Tuliskan pesan, ide, atau tawaran Anda..."
                  required
                  className="w-full px-5 py-3.5 bg-black/20 border border-white/10 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 outline-none text-white placeholder-gray-500 transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="group w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-blue-500/25 transition-all mt-2 hover:-translate-y-1"
              >
                Kirim Pesan{" "}
                <Send
                  size={20}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </button>
            </div>
          </form>
        </div>
      </section>
      <PreLoader />
    </main>
  );
}

export default App;

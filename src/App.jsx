import { useEffect, useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import DataImage from "./data";
import { listTools, listProyek } from "./data";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const audioRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
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
    circle.style.left = `${
      e.clientX - button.getBoundingClientRect().left - radius
    }px`;
    circle.style.top = `${
      e.clientY - button.getBoundingClientRect().top - radius
    }px`;
    circle.classList.add("ripple");

    const existingRipple = button.getElementsByClassName("ripple")[0];
    if (existingRipple) existingRipple.remove();

    button.appendChild(circle);
  }

  return (
    <main className="transition-all duration-300 bg-[var(--bg)] text-[var(--text)]">
      {/* Beranda */}
      <section id="beranda" className="pt-24 px-4 scroll-mt-20">
        <div
          className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-10"
          data-aos="fade-up"
        >
          {/* Teks */}
          <div data-aos="fade-right" data-aos-delay="100">
            <div className="flex items-center gap-3 mb-5 bg-zinc-800 text-white w-fit p-3 rounded-2xl shadow">
              <img
                src={DataImage.HeroImage}
                alt="Hero"
                className="w-14 md:w-10 rounded-md"
              />
              <q className="text-sm sm:text-base text-white">
                Konsistensi dan ketekunan adalah kunci menuju sukses 😉.
              </q>
            </div>

            <h1 className="text-3xl font-bold mb-5 leading-tight">
              Halo 👋, saya Muhammad Fahmi
            </h1>

            <TypeAnimation
              sequence={[
                "Punya Semangat Belajar Tinggi",
                2000,
                "Teknik Informatika",
                2000,
                "Aktif Mengembangkan Proyek Pribadi",
                2000,
              ]}
              wrapper="p"
              cursor={true}
              repeat={Infinity}
              className="text-lg font-semibold text-[var(--subtext)]"
            />

            <p className="text-base leading-relaxed mt-3 mb-5">
              Saya seorang mahasiswa aktif yang memiliki minat kuat di bidang
              pengembangan web dan desain digital. Antusias dalam mempelajari
              teknologi baru serta membangun berbagai proyek untuk mengasah
              kemampuan dan pengalaman.
            </p>

            <div className="flex gap-3 flex-wrap">
              <a
                href="https://drive.google.com/file/d/17oHyN6yCQSlLz-geFi11aH3QNNiSo7Ix/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Download CV
              </a>
              <a href="#proyek" className="btn-primary">
                Lihat Proyek
              </a>
            </div>
          </div>

          {/* Gambar */}
          <div
            className="mt-3 md:-mt-13"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <img
              src={DataImage.HeroImage}
              alt="Hero"
              className="w-full sm:w-[450px] md:w-[500px] mx-auto md:ml-auto -mt-10 sm:mt-0 md:-mt-6"
            />
          </div>
        </div>
      </section>

      {/* Tentang */}
      <section
        id="tentang"
        className="scroll-mt-20 mt-14 py-16 px-4"
        data-aos="fade-up"
      >
        <div className="max-w-3xl mx-auto p-8 rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow transition-all">
          <div className="flex justify-center mb-6">
            <img
              src={DataImage.LogoImage}
              alt="Logo"
              className="w-14 h-14 sm:w-12 sm:h-12"
            />
          </div>
          <p className="text-base leading-relaxed text-[var(--subtext)]">
            Saya adalah mahasiswa Universitas Indraprasta PGRI yang saat ini
            aktif menempuh semester 5. Saya memiliki semangat belajar tinggi,
            suka mengeksplorasi dunia teknologi, dan sering membuat proyek
            pribadi sebagai sarana pengembangan diri.
          </p>
          <div className="flex justify-between gap-4 mt-8 text-[var(--text)]">
            <div>
              <h1 className="text-2xl font-bold">2+</h1>
              <p className="text-sm text-[var(--subtext)]">Proyek Pribadi</p>
            </div>
            <div>
              <h1 className="text-2xl font-bold">Aktif</h1>
              <p className="text-sm text-[var(--subtext)]">
                Belajar & Berkembang
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools */}
      <section id="tools" className="mt-10 px-4" data-aos="fade-up">
        <h1 className="text-3xl font-bold mb-2">Tools yang Digunakan</h1>
        <p className="text-base text-[var(--subtext)]">
          Berikut adalah beberapa tools yang saya gunakan:
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {listTools.map((tool, index) => (
            <button
              key={tool.id}
              onClick={(e) => {
                createRipple(e);
                playClickSound();
                e.currentTarget.classList.add("active-hover");
                setTimeout(() => {
                  e.currentTarget.classList.remove("active-hover");
                }, 500);
              }}
              className="relative overflow-hidden group focus:outline-none transition-all duration-300 active:scale-[0.97]"
              data-aos="zoom-in-up"
              data-aos-delay={index * 100}
            >
              <div className="flex gap-4 p-4 min-h-[100px] border border-[var(--border)] rounded-xl bg-[var(--card)] shadow hover:shadow-md">
                <img
                  src={tool.gambar}
                  alt={tool.nama}
                  className="w-12 h-12 object-contain bg-zinc-900 p-2 rounded-lg group-hover:bg-zinc-700"
                />
                <div className="flex flex-col justify-start text-left -mt-1">
                  <h4 className="font-semibold text-lg text-black dark:text-white group-hover:text-blue-500 transition-colors duration-200">
                    {tool.nama}
                  </h4>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 tracking-wide leading-snug">
                    {tool.ket}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Proyek */}
      <section
        id="proyek"
        className="scroll-mt-20 mt-16 py-10 px-4"
        data-aos="fade-up"
      >
        <h1 className="text-center text-3xl font-bold mb-2">Proyek</h1>
        <p className="text-center text-base text-[var(--subtext)] max-w-xl mx-auto">
          Beberapa proyek yang telah saya kerjakan mencerminkan ketertarikan
          saya dalam pengembangan web dan desain antarmuka yang estetis.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {listProyek.map((proyek, index) => (
            <div
              key={proyek.id}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className="bg-[var(--card)] rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
            >
              <img
                src={proyek.gambar}
                alt={proyek.nama}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h2 className="text-xl font-bold mb-2">{proyek.nama}</h2>
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
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm transition"
                >
                  Lihat Web
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Kontak */}
      <section
        id="kontak"
        className="scroll-mt-20 py-16 px-4"
        data-aos="fade-up"
      >
        <h1 className="text-3xl font-bold text-center mb-3">Kontak</h1>
        <p className="text-center text-base mb-10 text-[var(--subtext)] max-w-xl mx-auto">
          Hubungi saya melalui email. Saya akan segera merespons pesan Anda.
        </p>

        <form
          action="https://formsubmit.co/fahmimuhammad409@gmail.com"
          method="POST"
          autoComplete="off"
          className="bg-[var(--card)] p-8 md:p-10 max-w-md w-full mx-auto rounded-xl shadow-md border border-[var(--border)]"
        >
          <div className="flex flex-col gap-6">
            <input
              type="text"
              name="Nama"
              placeholder="Nama Lengkap"
              required
            />
            <input
              type="email"
              name="Email"
              placeholder="Email Aktif"
              required
            />
            <textarea
              name="Pesan"
              rows="5"
              placeholder="Tuliskan pesan Anda..."
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold shadow hover:shadow-lg transition"
            >
              Kirim Pesan
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}

export default App;

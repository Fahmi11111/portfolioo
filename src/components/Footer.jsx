import { useEffect, useState } from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { href: "#beranda", label: "Beranda" },
    { href: "#tentang", label: "Tentang" },
    { href: "#proyek", label: "Proyek" },
    { href: "#kontak", label: "Kontak" },
  ];

  const socials = [
    {
      href: "https://github.com/Fahmi11111/portofolio",
      icon: "ri-github-fill",
      title: "GitHub",
      hoverStyle:
        "hover:bg-zinc-800 hover:text-white hover:border-zinc-600 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]",
    },
    {
      href: "https://www.instagram.com/mfahmiiiiii_",
      icon: "ri-instagram-fill",
      title: "Instagram",
      hoverStyle:
        "hover:bg-gradient-to-tr hover:from-amber-500 hover:via-rose-500 hover:to-purple-600 hover:text-white hover:border-transparent hover:shadow-[0_0_15px_rgba(225,48,108,0.4)]",
    },
    {
      href: "https://www.tiktok.com/@flyingsolooooo",
      icon: "ri-tiktok-fill",
      title: "TikTok",
      hoverStyle:
        "hover:bg-zinc-800 hover:text-white hover:border-zinc-600 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)",
    },
  ];

  return (
    <footer
      className="relative w-full px-4 pt-12 pb-8 border-t border-[var(--border)] bg-[var(--bg)] text-[var(--text)] transition-colors duration-300"
      data-aos="fade-up"
    >
      {/* Garis Aksen Gradient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 md:w-1/2 h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent blur-[1px]" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-4">
        {/* Brand & Status Badge */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <span className="font-mono text-base font-bold text-[var(--text)] tracking-wide">
            <span className="text-blue-500">&lt;</span>
            Muhammad Fahmi
            <span className="text-blue-500"> /&gt;</span>
          </span>

          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Terbuka untuk Peluang Proyek
          </div>
        </div>

        {/* Navigasi Links */}
        <nav className="flex flex-wrap gap-6 md:gap-8 text-sm font-medium justify-center items-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-[var(--subtext)] hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200 py-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-blue-500 after:to-purple-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Sosial Media Icons & Tombol Scroll */}
        <div className="flex items-center gap-3">
          <div className="flex gap-2.5">
            {socials.map((social) => (
              <a
                key={social.title}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                title={social.title}
                className={`w-10 h-10 flex items-center justify-center rounded-xl border border-[var(--border)] bg-black/5 dark:bg-white/10 text-[var(--text)] transition-all duration-300 hover:-translate-y-1 ${social.hoverStyle}`}
              >
                <i className={`${social.icon} text-lg`}></i>
              </a>
            ))}
          </div>

          {showScrollTop && (
            <button
              onClick={scrollToTop}
              title="Kembali ke atas"
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:scale-110 active:scale-95 ml-2"
            >
              <i className="ri-arrow-up-line text-lg"></i>
            </button>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto my-6 border-t border-[var(--border)]" />

      {/* Copyright Line */}
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 px-4 text-xs font-mono text-[var(--subtext)]">
        <p>
          © {year} Portfolio by{" "}
          <span className="font-semibold text-[var(--text)]">
            Muhammad Fahmi
          </span>
          . All rights reserved.
        </p>
        <p className="text-[11px] opacity-75">
          Didesain & Dikembangkan dengan{" "}
          <span className="text-blue-500">React</span> &{" "}
          <span className="text-cyan-500">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

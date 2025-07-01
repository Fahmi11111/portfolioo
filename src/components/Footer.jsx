const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      className="w-full px-4 py-10 border-t border-[var(--border)] bg-[var(--bg)] text-[var(--subtext)] transition-all duration-300"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 px-2">
        {/* Navigasi Footer */}
        <nav className="flex flex-wrap gap-6 text-sm font-medium justify-center md:justify-start">
          <a
            href="#beranda"
            className="hover:text-blue-600 transition-colors duration-200"
          >
            Beranda
          </a>
          <a
            href="#tentang"
            className="hover:text-blue-600 transition-colors duration-200"
          >
            Tentang
          </a>
          <a
            href="#proyek"
            className="hover:text-blue-600 transition-colors duration-200"
          >
            Proyek
          </a>
          <a
            href="#kontak"
            className="hover:text-blue-600 transition-colors duration-200"
          >
            Kontak
          </a>
        </nav>

        {/* Sosial Media */}
        <div className="flex gap-4 text-xl justify-center md:justify-end">
          <a
            href="https://github.com/Fahmi11111/portofolio"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black text-[var(--subtext)] transition hover:scale-110"
            title="GitHub"
          >
            <i className="ri-github-fill"></i>
          </a>
          <a
            href="https://www.instagram.com/mfahmiiiiii_"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 text-[var(--subtext)] transition hover:scale-110"
            title="Instagram"
          >
            <i className="ri-instagram-fill"></i>
          </a>
          <a
            href="https://www.tiktok.com/@flyingsolooooo"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white dark:hover:text-white text-[var(--subtext)] transition hover:scale-110"
            title="TikTok"
          >
            <i className="ri-tiktok-fill"></i>
          </a>
        </div>
      </div>

      {/* Copyright */}
      <p className="mt-6 text-center text-sm text-[var(--subtext)] opacity-80">
        &copy; {year} Portfolio by{" "}
        <span className="font-semibold text-[var(--text)]">Fahmi</span>. All
        rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

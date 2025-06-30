const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-32 py-8 px-4 border-t border-zinc-200 dark:border-zinc-700 text-[var(--text)] transition-all duration-300">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Navigasi Footer */}
        <nav className="flex gap-6 text-sm font-medium">
          <a href="#beranda" className="hover:text-blue-500 transition-colors">
            Beranda
          </a>
          <a href="#tentang" className="hover:text-blue-500 transition-colors">
            Tentang
          </a>
          <a href="#proyek" className="hover:text-blue-500 transition-colors">
            Proyek
          </a>
          <a href="#kontak" className="hover:text-blue-500 transition-colors">
            Kontak
          </a>
        </nav>

        {/* Ikon Sosial Media */}
        <div className="flex gap-4 text-xl">
          {/* GitHub */}
          <a
            href="https://github.com/Fahmi11111/portofolio"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-zinc-500 hover:text-white dark:hover:text-black transition-colors duration-200 transform hover:scale-110"
          >
            <i className="ri-github-fill"></i>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/mfahmiiiiii_"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-zinc-500 hover:text-pink-500 transition-colors duration-200 transform hover:scale-110"
          >
            <i className="ri-instagram-fill"></i>
          </a>

          {/* TikTok */}
          <a
            href="https://www.tiktok.com/@flyingsolooooo?_t=ZS-8x8q9zl9dfr&_r="
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="text-zinc-500 hover:text-gray-900 dark:hover:text-black transition-colors duration-200 transform hover:scale-110"
          >
            <i className="ri-tiktok-fill"></i>
          </a>
        </div>
      </div>

      {/* Copyright */}
      <p className="mt-6 text-center text-sm text-zinc-500 dark:text-zinc-400">
        &copy; {year} Portfolio by Fahmi. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

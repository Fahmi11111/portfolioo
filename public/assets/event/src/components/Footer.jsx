const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-gray-950 to-black py-8 border-t border-gray-800/50 overflow-hidden">
      {/* Efek Cahaya (Glow) Latar Belakang */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
        {/* Copyright */}
        <p className="text-gray-400 text-sm md:text-base tracking-wide text-center md:text-left">
          &copy; {new Date().getFullYear()} Copyright by{" "}
          <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400 drop-shadow-sm">
            Fahmi
          </span>
          . All rights reserved.
        </p>

        {/* Social Media Links - Glassmorphism Style */}
        <div className="flex items-center gap-5 bg-white/5 px-6 py-2.5 rounded-full border border-white/10 shadow-lg backdrop-blur-md">
          <p className="text-gray-300 text-sm font-semibold tracking-wider uppercase">
            Connect
          </p>

          {/* Garis Pemisah Elegan */}
          <div className="w-px h-5 bg-gray-600/50"></div>

          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-gray-400 hover:text-pink-500 hover:scale-110 transition-all duration-300"
            >
              <i className="ri-instagram-fill text-xl"></i>
            </a>

            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="text-gray-400 hover:text-white hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all duration-300"
            >
              <i className="ri-tiktok-fill text-xl"></i>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-blue-500 hover:scale-110 transition-all duration-300"
            >
              <i className="ri-linkedin-fill text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

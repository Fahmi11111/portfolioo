import { useState, useEffect } from "react";
import { Terminal } from "lucide-react";

const PreLoader = () => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // 1. Otomatis kembalikan scroll layar ke posisi paling atas (0, 0) saat refresh
    window.scrollTo(0, 0);

    // 2. Kunci scrollbar agar layar tidak bisa di-scroll saat preloader muncul
    document.body.style.overflow = "hidden";

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 300) {
          clearInterval(interval);
          return 300;
        }
        const diff = Math.random() * 10 + 5;
        return Math.min(prev + diff, 100);
      });
    }, 350);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const fadeTimer = setTimeout(() => setFadeOut(true), 1000);
      const hideTimer = setTimeout(() => {
        setHidden(true);
        // 3. Kembalikan fungsi scrollbar setelah preloader selesai/hilang
        document.body.style.overflow = "auto";
      }, 1100);

      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(hideTimer);
      };
    }
  }, [progress]);

  if (hidden) return null;

  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen z-[9999] flex flex-col items-center justify-center bg-[var(--bg)] text-[var(--text)] transition-opacity duration-700 ease-in-out ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Ambient Glow */}
      <div className="absolute w-72 h-72 bg-gradient-to-tr from-blue-600/30 to-purple-600/30 rounded-full blur-[100px] pointer-events-none animate-pulse"></div>

      {/* Center Spinner & Icon */}
      <div className="relative flex items-center justify-center mb-8">
        <div className="w-24 h-24 rounded-full border-2 border-transparent border-t-blue-500 border-r-purple-500 animate-spin"></div>
        <div className="absolute w-16 h-16 rounded-full border-2 border-transparent border-b-blue-400 border-l-purple-400 animate-[spin_1.5s_linear_infinite_reverse]"></div>
        <div className="absolute flex items-center justify-center w-12 h-12 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-inner">
          <Terminal className="w-6 h-6 text-blue-400 animate-bounce" />
        </div>
      </div>

      {/* Text Branding & Counter */}
      <div className="text-center z-10">
        <h2 className="text-xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-2">
          Muhammad Fahmi
        </h2>

        <p className="text-sm font-mono text-[var(--subtext)] tracking-wider">
          Memuat Portofolio...{" "}
          <span className="text-blue-400 font-bold">
            {Math.floor(progress)}%
          </span>
        </p>
      </div>

      {/* Progress Bar */}
      <div className="w-48 h-1.5 bg-gray-200 dark:bg-zinc-800 rounded-full mt-6 overflow-hidden relative border border-white/5">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-200 shadow-[0_0_12px_rgba(59,130,246,0.8)]"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500/20 via-purple-500/40 to-blue-500/20"></div>
    </div>
  );
};

export default PreLoader;

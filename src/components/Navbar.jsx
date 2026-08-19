import { useState, useEffect } from "react";
import { Sun, Moon, Menu as MenuIcon, X, Code2 } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [themeClicked, setThemeClicked] = useState(false);

  const menu = [
    { id: "beranda", label: "Beranda" },
    { id: "tentang", label: "Tentang" },
    { id: "tools", label: "Tools" },
    { id: "proyek", label: "Proyek" },
    { id: "kontak", label: "Kontak" },
    { id: "sertifikat", label: "Sertifikat" },
  ];

  useEffect(() => {
    const root = document.documentElement;
    const saved = localStorage.getItem("theme");
    const isDarkMode =
      saved === "theme-dark" ||
      (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches);

    if (isDarkMode) {
      root.classList.add("dark", "theme-dark");
      root.classList.remove("theme-light");
      setIsDark(true);
    } else {
      root.classList.add("theme-light");
      root.classList.remove("dark", "theme-dark");
      setIsDark(false);
    }

    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const nextDark = !isDark;

    if (nextDark) {
      root.classList.add("dark", "theme-dark");
      root.classList.remove("theme-light");
      localStorage.setItem("theme", "theme-dark");
    } else {
      root.classList.add("theme-light");
      root.classList.remove("dark", "theme-dark");
      localStorage.setItem("theme", "theme-light");
    }

    setIsDark(nextDark);
    setThemeClicked(true);
    setTimeout(() => setThemeClicked(false), 300);
  };

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-gray-200/50 dark:border-white/10 shadow-md py-3"
          : "bg-transparent border-b border-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => scrollTo("beranda")}
          className="flex items-center gap-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white group"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300">
            <Code2 size={20} />
          </div>
          <span className="font-semibold text-xl">Portofolio</span>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {menu.map((m) => (
            <li key={m.id}>
              <button
                onClick={() => scrollTo(m.id)}
                className="relative text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-blue-500 after:to-purple-500 hover:after:w-full after:transition-all after:duration-300"
              >
                {m.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Tombol Aksi */}
        <div className="flex items-center gap-3">
          {/* Toggle Tema Interaktif */}
          <button
            onClick={toggleTheme}
            className={`p-2.5 rounded-xl border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-200 bg-gray-100/50 dark:bg-white/5 hover:bg-gray-200/60 dark:hover:bg-white/10 transition-all duration-300 ${
              themeClicked ? "scale-90 rotate-45" : "hover:scale-105"
            }`}
            aria-label="Toggle Theme"
          >
            {isDark ? (
              <Sun size={18} className="text-amber-400 animate-pulse" />
            ) : (
              <Moon size={18} className="text-blue-600" />
            )}
          </button>

          {/* Tombol Hamburger (Mobile) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2.5 md:hidden rounded-xl border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-200 bg-gray-100/50 dark:bg-white/5 transition-transform active:scale-90"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={20} /> : <MenuIcon size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-3 px-6 py-4 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-2xl border-t border-b border-gray-200/80 dark:border-white/10 shadow-xl flex flex-col gap-2 animate-in fade-in slide-in-from-top-3 duration-200">
          {menu.map((m) => (
            <button
              key={m.id}
              onClick={() => scrollTo(m.id)}
              className="w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200"
            >
              {m.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;

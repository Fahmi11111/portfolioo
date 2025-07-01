import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const savedTheme = localStorage.getItem("theme");

    const applyTheme = (theme) => {
      root.classList.remove("theme-light", "theme-dark");
      root.classList.add(theme);
      setIsDark(theme === "theme-dark");
    };

    if (savedTheme) {
      applyTheme(savedTheme);
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      applyTheme(prefersDark ? "theme-dark" : "theme-light");
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const currentTheme = root.classList.contains("theme-dark")
      ? "theme-dark"
      : "theme-light";
    const nextTheme =
      currentTheme === "theme-dark" ? "theme-light" : "theme-dark";

    root.classList.remove("theme-dark", "theme-light");
    root.classList.add(nextTheme);
    setIsDark(nextTheme === "theme-dark");
    localStorage.setItem("theme", nextTheme);
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const menuItems = [
    { id: "beranda", label: "🏠 Beranda" },
    { id: "tentang", label: "👤 Tentang" },
    { id: "proyek", label: "💼 Proyek" },
    { id: "kontak", label: "📞 Kontak" },
  ];

  return (
    <nav
      className={`fixed w-full top-0 z-50 backdrop-blur transition-all duration-300 ${
        scrolled
          ? "bg-white/30 dark:bg-zinc-900/30 border-b border-white/10 dark:border-zinc-700 shadow"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-[var(--text)]">Portfolio</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {menuItems.map((item, i) => (
            <li key={i}>
              <button
                onClick={() => scrollTo(item.id)}
                className="text-base text-[var(--subtext)] hover:text-blue-600 transition"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Buttons */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-zinc-300 dark:border-zinc-600 text-xl transition-all duration-300 hover:rotate-12 hover:scale-110 hover:bg-zinc-100 dark:hover:bg-zinc-800"
            title="Toggle Theme"
          >
            <span className="transition-all duration-300 ease-in-out">
              {isDark ? "☀️" : "🌙"}
            </span>
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`text-2xl text-[var(--text)] md:hidden transition-transform duration-300 transform ${
              isOpen ? "rotate-90 scale-110" : ""
            }`}
            aria-label="Toggle Menu"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`md:hidden bg-[var(--card)] px-4 py-4 space-y-4 shadow-md rounded-b-xl menu-transition`}
        >
          {menuItems.map((item, i) => (
            <button
              key={i}
              onClick={() => scrollTo(item.id)}
              className="block w-full text-left text-[var(--subtext)] hover:text-blue-600 transition"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

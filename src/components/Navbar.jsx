import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [themeClicked, setThemeClicked] = useState(false);
  const [menuClicked, setMenuClicked] = useState(false);

  // Daftar menu
  const menu = [
    { id: "beranda", label: "🏠 Beranda" },
    { id: "tentang", label: "👤 Tentang" },
    { id: "proyek", label: "💼 Proyek" },
    { id: "kontak", label: "📞 Kontak" },
  ];

  useEffect(() => {
    const root = document.documentElement;
    const saved = localStorage.getItem("theme");
    const defaultTheme =
      saved ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "theme-dark"
        : "theme-light");
    root.classList.add(defaultTheme);
    setIsDark(defaultTheme === "theme-dark");

    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const next = isDark ? "theme-light" : "theme-dark";
    root.classList.remove("theme-light", "theme-dark");
    root.classList.add(next);
    localStorage.setItem("theme", next);
    setIsDark(!isDark);

    // Animasi klik
    setThemeClicked(true);
    setTimeout(() => setThemeClicked(false), 200);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setMenuClicked(true);
    setTimeout(() => setMenuClicked(false), 200);
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--card)]/80 backdrop-blur border-b border-[var(--border)] shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-lg font-bold text-[var(--text)]">Portfolio</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center">
          {menu.map((m) => (
            <li key={m.id}>
              <button
                onClick={() => scrollTo(m.id)}
                className="text-base text-[var(--text)] hover:text-blue-600 transition"
              >
                {m.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Tombol Tema & Menu */}
        <div className="flex items-center gap-2">
          {/* Toggle Tema */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full border border-[var(--border)] text-xl text-[var(--text)] transition-all duration-200 transform ${
              themeClicked ? "scale-90" : "hover:rotate-12 hover:scale-110"
            } hover:bg-[var(--hover)]`}
            title="Toggle Theme"
          >
            {isDark ? "☀️" : "🌙"}
          </button>

          {/* Tombol Hamburger (Mobile) */}
          <button
            onClick={toggleMenu}
            className={`text-2xl md:hidden text-[var(--text)] transition-transform duration-300 transform ${
              menuClicked ? "scale-90" : "hover:scale-110"
            }`}
            title="Menu"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[var(--card)] px-4 py-4 space-y-3 shadow-md menu-transition rounded-b-xl">
          {menu.map((m) => (
            <button
              key={m.id}
              onClick={() => scrollTo(m.id)}
              className="block w-full text-left text-[var(--text)] hover:text-blue-600 transition"
            >
              {m.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

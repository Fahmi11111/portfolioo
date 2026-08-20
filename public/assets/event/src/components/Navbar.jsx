import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { path: "/", label: "Beranda" },
    { path: "/tentang-event", label: "Tentang Acara" },
    { path: "/pembicara-event", label: "Pembicara Utama" },
    { path: "/kontak-event", label: "Kontak" },
  ];

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? isDark
            ? "bg-[#0f0f11]/90 backdrop-blur-md border-b border-stone-800 shadow-lg py-2.5 sm:py-3 md:py-4"
            : "bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-md py-2.5 sm:py-3 md:py-4"
          : "bg-transparent py-3 sm:py-4 md:py-6"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="logo z-50 flex items-center">
            <h1
              className={`text-lg sm:text-2xl md:text-3xl font-extrabold tracking-widest uppercase transition-colors leading-none ${
                isDark ? "text-stone-200" : "text-slate-800"
              }`}
            >
              Event<span className="text-indigo-500">.</span>
            </h1>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-10">
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium tracking-wide transition-all duration-300 whitespace-nowrap ${
                    isActive
                      ? "text-indigo-500 font-semibold"
                      : isDark
                        ? "text-stone-300 hover:text-indigo-400"
                        : "text-slate-700 hover:text-indigo-600 font-semibold"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2 sm:gap-3 z-50">
            {/* Dark/Light Toggle Button - Ukuran Terkunci (w-9 h-9 / w-10 h-10) */}
            <button
              onClick={toggleTheme}
              className={`w-9 h-9 sm:w-10 sm:h-10 shrink-0 rounded-full transition-all duration-300 cursor-pointer flex items-center justify-center shadow-sm ${
                isDark
                  ? "bg-stone-800/80 border border-stone-700/60 text-stone-200 hover:scale-105"
                  : "bg-slate-100 border border-slate-300 text-slate-700 hover:scale-105"
              }`}
              aria-label="Toggle Theme"
            >
              {isDark ? (
                <i className="ri-sun-fill text-amber-400 text-base sm:text-lg"></i>
              ) : (
                <i className="ri-moon-clear-fill text-indigo-600 text-base sm:text-lg"></i>
              )}
            </button>

            {/* Desktop CTA Button */}
            {/* <NavLink
              to="/kontak-event"
              className="hidden lg:block px-5 xl:px-6 py-2 xl:py-2.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-full shadow-[0_0_15px_rgba(79,70,229,0.3)] transition-all duration-300 transform hover:scale-105"
            >
              Daftar Sekarang
            </NavLink> */}

            {/* Mobile Hamburger Button */}
            <button
              className={`lg:hidden w-9 h-9 sm:w-10 sm:h-10 shrink-0 flex items-center justify-center transition-colors ${
                isDark
                  ? "text-stone-200 hover:text-indigo-400"
                  : "text-slate-800 hover:text-indigo-600"
              }`}
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              <i
                className={`ri-${
                  isMenuOpen ? "close-line" : "menu-3-line"
                } text-2xl`}
              ></i>
            </button>
          </div>

          {/* Mobile Menu Drawer */}
          <div
            className={`fixed top-0 left-0 w-full h-dvh flex flex-col items-center justify-center gap-6 sm:gap-8 transition-transform duration-500 ease-in-out lg:hidden z-40 px-6 ${
              isDark ? "bg-[#0f0f11] text-stone-100" : "bg-white text-slate-900"
            } ${isMenuOpen ? "translate-y-0" : "-translate-y-full"}`}
          >
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `text-xl sm:text-2xl font-medium tracking-wide transition-all duration-300 text-center ${
                    isActive
                      ? "text-indigo-500 font-semibold"
                      : isDark
                        ? "text-stone-300 hover:text-indigo-400"
                        : "text-slate-700 hover:text-indigo-600"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            {/* <NavLink
              to="/kontak-event"
              onClick={() => setIsMenuOpen(false)}
              className="px-8 py-3 mt-4 sm:mt-6 text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-full shadow-[0_0_15px_rgba(79,70,229,0.4)] transition-all duration-300"
            >
              Daftar Sekarang
            </NavLink> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

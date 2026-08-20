import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-stone-800/90 dark:bg-stone-800/90 text-stone-200 hover:scale-110 transition-all duration-300 border border-stone-700/60 flex items-center justify-center cursor-pointer shadow-xl backdrop-blur-md"
      aria-label="Toggle Theme"
    >
      {isDark ? (
        <i className="ri-sun-fill text-xl text-amber-400"></i>
      ) : (
        <i className="ri-moon-clear-fill text-xl text-indigo-400"></i>
      )}
    </button>
  );
};

export default ThemeToggle;

import { useState, useEffect } from "react";

const PreLoader = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Animasi progress naik perlahan
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.random() * 10;
        return next >= 100 ? 100 : next;
      });
    }, 200);

    const timer = setTimeout(() => {
      setLoading(false);
      clearInterval(interval);
    }, 5000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white dark:bg-black transition-colors duration-500">
      {/* Spinner Icon */}
      <div className="mb-6 animate-spin">
        <svg
          className="w-14 h-14 text-blue-600"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 101"
          fill="none"
        >
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="currentColor"
            strokeWidth="10"
            className="opacity-20"
          />
          <path
            fill="currentColor"
            d="M95 50a45 45 0 00-45-45v20a25 25 0 0125 25h20z"
            className="opacity-80"
          />
        </svg>
      </div>

      {/* Branding */}
      <h1 className="text-2xl font-semibold tracking-widest text-zinc-800 dark:text-white mb-1">
        Loading
      </h1>

      <p className="text-sm text-zinc-600 dark:text-zinc-400 animate-pulse mb-8">
        Memuat halaman... {Math.floor(progress)}%
      </p>

      {/* Progress bar di bawah layar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-zinc-300 dark:bg-zinc-700">
        <div
          className="h-full bg-blue-600 transition-all duration-200"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default PreLoader;

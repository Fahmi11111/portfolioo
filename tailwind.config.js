/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  // DIBERSIHKAN: Menghapus '.css' dari path content agar Tailwind tidak me-scan file CSS sendiri (penyebab utama loading/HMR lambat)
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Palette warna khusus tema modern & gelap
        brand: {
          50: "#eff6ff",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
        },
        dark: {
          bg: "#0a0d14",
          card: "#121824",
          border: "#1e293b",
        },
      },
      backgroundImage: {
        "light-gradient": "linear-gradient(to bottom right, #ffffff, #f8fafc)",
        "glow-radial":
          "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(0,0,0,0) 70%)",
      },
      boxShadow: {
        "glow-blue": "0 0 25px -5px rgba(59, 130, 246, 0.4)",
        "glow-purple": "0 0 25px -5px rgba(168, 85, 247, 0.4)",
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.25)",
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
      },
    },
  },
  plugins: [],
};

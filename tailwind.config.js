// tailwind.config.js
export default {
  darkMode: "class", // <--- WAJIB
  content: ["./index.html", "./src/**/*.{js,css,jsx}"], // Pastikan path benar
  theme: {
    extend: {
      backgroundImage: {
        "light-gradient": "linear-gradient(to bottom right, #ffffff, #f9fafb)",
      },
      scale: {
        0: "0",
        100: "1",
      },
      transformOrigin: {
        top: "top",
      },
      spacing: {
        0: "0px",
      },
    },
  },
  plugins: [],
};

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// Context
import { ThemeProvider } from "./context/ThemeContext.jsx";

// Style & Global CSS
import "./index.css";
import "remixicon/fonts/remixicon.css";
import "aos/dist/aos.css";

// Library Initialization
import AOS from "aos";
import App from "./App.jsx";

// Inisialisasi Animate On Scroll (AOS) untuk animasi web yang elegan
AOS.init({
  duration: 1000, // Durasi animasi dalam milidetik
  once: true, // Animasi hanya berjalan sekali saat di-scroll
  easing: "ease-in-out",
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import Tentangpage from "./pages/Tentangpage";
import Pembicarapage from "./pages/Pembicarapage";
import Kontakpage from "./pages/Kontakpage";
import { Toaster } from "sonner";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
};

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-500 selection:text-white transition-colors duration-300">
      <ScrollToTop />

      {/* Navbar Utama (Sudah termasuk tombol Theme Toggle) */}
      <Navbar />

      {/* Konten Halaman */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/tentang-event" element={<Tentangpage />} />
          <Route path="/pembicara-event" element={<Pembicarapage />} />
          <Route path="/kontak-event" element={<Kontakpage />} />
        </Routes>
      </main>

      <Toaster position="top-right" richColors closeButton />

      {/* Footer Utama */}
      <Footer />
    </div>
  );
}

export default App;

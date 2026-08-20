// 1. IMPORT ASSETS
// Hero & Logo
import HeroImage from "/assets/fahmi.png";
import LogoImage from "/assets/unindra.png";

// Tools & Technologies
import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nodejs.png";
import Tools8 from "/assets/tools/php.png";
import Tools9 from "/assets/tools/github.png";

// Projects
import Proyek1 from "/assets/proyek/screenshot11.png";
import Proyek2 from "/assets/proyek/Screenshot (451).png";
import Proyek3 from "/assets/proyek/Screenshot 33.png";
import Proyek4 from "/assets/proyek/screenshot44.png";
import Proyek5 from "/assets/proyek/Screenshot 188.png";
import Proyek6 from "/assets/proyek/Screenshot-593.png";
import Proyek7 from "/assets/proyek/Screenshot (1206).png";

// 2. EXPORT DATA

// Image Object
const DataImage = {
  HeroImage,
  LogoImage,
};
export default DataImage;

// List Tools & Tech Stack
export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Primary Code Editor",
    dad: "150",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Frontend Library",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Utility-First CSS",
    dad: "450",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "CSS Framework",
    dad: "600",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "JavaScript",
    ket: "Programming Language",
    dad: "750",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Node JS",
    ket: "JavaScript Runtime",
    dad: "900",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "phpMyAdmin",
    ket: "Database",
    dad: "1050",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "GitHub",
    ket: "Version Control",
    dad: "1200",
  },
  {
    id: 10,
    gambar:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    nama: "HTML5",
    ket: "Bahasa Markup Web",
    dad: "1350",
  },
  {
    id: 11,
    gambar:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    nama: "CSS",
    ket: "Styling & Layout",
    dad: "1500",
  },
  {
    id: 12,
    nama: "Next.js",
    gambar:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    ket: "React Framework",
  },
  {
    id: 13,
    nama: "Express.js",
    gambar:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    ket: "Backend Framework",
  },
  {
    id: 14,
    nama: "Prisma",
    gambar:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
    ket: "Next-gen ORM",
  },
  {
    id: 15,
    nama: "NextAuth.js",
    gambar: "https://next-auth.js.org/img/logo/logo-sm.png",
    ket: "Authentication",
  },
  {
    id: 16,
    nama: "Midtrans API",
    gambar:
      "https://images.seeklogo.com/logo-png/30/1/midtrans-logo-png_seeklogo-306623.png",
    ket: "Payment Gateway",
  },
  {
    id: 17,
    nama: "REST API",
    gambar: "https://img.icons8.com/color/512/api.png",
    ket: "API Architecture",
  },
];

// List Proyek
export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Latte Luxe – Web Semi Warkop",
    desk: "Platform pemesanan kedai kopi modern berdesain interaktif. Dilengkapi fitur keranjang belanja, kalkulasi pesanan otomatis, serta tata letak responsif untuk kenyamanan pengguna.",
    tools: ["HTML5", "CSS3", "JavaScript"],
    dad: "200",
    URL: "/assets/Latte Luxe/index.html",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Website Undangan Digital Elegan",
    desk: "Website undangan digital eksklusif yang menyajikan informasi acara, integrasi peta lokasi, formulir RSVP interaktif, pemutar musik latar, serta galeri momen bersejarah.",
    tools: ["HTML5", "CSS3", "JavaScript", "Audio API"],
    dad: "400",
    URL: "/assets/Fahmi Wedding/index.html",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Dota 2 – Web Animasi Karakter",
    desk: "Showcase animasi web interaktif bertema karakter Dota 2. Menyoroti efek visual dinamis, transisi halus, dan desain responsif yang menghidupkan pengalaman antarmuka pengembang.",
    tools: ["HTML5", "CSS3", "JavaScript"],
    dad: "600",
    URL: "/assets/Animasi/index.html",
  },
  {
    id: 4,
    gambar: Proyek4,
    nama: "Nusantara – Portal Wisata Indonesia",
    desk: "Platform eksplorasi keindahan destinasi wisata dan kekayaan budaya Indonesia. Dilengkapi dukungan media video interaktif dan navigasi visual yang memanjakan mata.",
    tools: ["HTML5", "CSS3", "JavaScript", "HTML Video"],
    dad: "800",
    URL: "/assets/Nusantara/index.html",
  },
  {
    id: 5,
    gambar: Proyek5,
    nama: "VisitorHub – Digital Library Guestbook",
    desk: "Sistem buku tamu digital perpustakaan berbasis web untuk mencatat data kunjungan secara terstruktur, cepat, dan aman menggunakan pemrosesan server-side.",
    tools: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
    dad: "1000",
    URL: "https://visitorhub.kesug.com/",
  },
  {
    id: 6,
    gambar: Proyek6,
    nama: "Aniverse – Website Anime Explorer",
    desk: "Platform penjelajah anime berbasis Next.js modern dengan pencarian real-time via API MyAnimeList (Jikan), koleksi favorit pribadi, autentikasi OAuth, dan fitur diskusi interaktif.",
    tools: [
      "Next.js",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "NextAuth",
      "REST API",
    ],
    dad: "1200",
    URL: "https://aniverse-gf7t.onrender.com/",
  },
  {
    id: 7,
    gambar: Proyek7, // Sesuaikan variabel import gambarnya
    nama: "Eventify – Modern Event & Ticketing Platform",
    desk: "Platform manajemen dan pendaftaran event digital berbasis Full-Stack. Dilengkapi integrasi payment gateway otomatis (Midtrans API), sistem konfirmasi pesan dinamis, serta antarmuka responsif bertema gelap.",
    tools: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "Midtrans API",
    ],
    dad: "1400",
    URL: "https://event-id.netlify.app/",
  },
];

// List Sertifikat
export const listSertifikat = [
  {
    id: 1,
    nama: "Uji Kompetensi Teknik Sepeda Motor Honda",
    penerbit: "PT Daya Adicipta Motora",
    tahun: "2023",
    filePdf: "/sertifikat/sertifikat 1.pdf",
    kategori: "Keahlian & Otomotif",
    dad: "100",
  },
  {
    id: 2,
    nama: "TOEIC Listening and Reading Score Report",
    penerbit: "Educational Testing Service (ETS)",
    tahun: "2021",
    filePdf: "/sertifikat/sertifikat 4.pdf",
    kategori: "Sertifikasi Bahasa",
    dad: "200",
  },
  {
    id: 3,
    nama: "Pelatihan AutoCAD & SolidWorks 2D & 3D",
    penerbit: "HUMAN UNISMA Bekasi",
    tahun: "2022",
    filePdf: "/sertifikat/sertifikat 6.pdf",
    kategori: "Desain Teknik / CAD",
    dad: "300",
  },
  {
    id: 4,
    nama: "Hour of Code at Microsoft Office Jakarta",
    penerbit: "Microsoft Indonesia",
    tahun: "2016",
    filePdf: "/sertifikat/sertifikat 7.pdf",
    kategori: "Programming",
    dad: "400",
  },
  {
    id: 5,
    nama: "Praktek Kerja Industri (Body Repair)",
    penerbit: "CV. Karya Indah Motor",
    tahun: "2022",
    filePdf: "/sertifikat/sertifikat 8.pdf",
    kategori: "Pengalaman Kerja",
    dad: "500",
  },
  {
    id: 6,
    nama: "Belajar Membuat Front-End Web untuk Pemula",
    penerbit: "Dicoding Indonesia",
    tahun: "2026",
    filePdf: "/sertifikat/sertifikat 9.pdf",
    kategori: "Front-End Web",
    dad: "600",
  },
  {
    id: 7,
    nama: "Belajar Dasar Pemrograman JavaScript",
    penerbit: "Dicoding Indonesia",
    tahun: "2026",
    filePdf: "/sertifikat/sertifikat 10.pdf",
    kategori: "Web Development",
    dad: "700",
  },
  {
    id: 8,
    nama: "Belajar Dasar Pemrograman Web",
    penerbit: "Dicoding Indonesia",
    tahun: "2026",
    filePdf: "/sertifikat/sertifikat 11.pdf",
    kategori: "Web Development",
    dad: "800",
  },
  {
    id: 9,
    nama: "Introduction to Financial Literacy",
    penerbit: "Dicoding Indonesia",
    tahun: "2026",
    filePdf: "/sertifikat/sertifikat 12.pdf",
    kategori: "Soft Skills / Finance",
    dad: "900",
  },
];

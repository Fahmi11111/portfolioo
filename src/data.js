import HeroImage from "/assets/fahmi.png";
import LogoImage from "/assets/unindra.png";

const Image = {
  HeroImage,
  LogoImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nodejs.png";
import Tools8 from "/assets/tools/php.png";
import Tools9 from "/assets/tools/github.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },

  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Node JS",
    ket: "Javascript Runtime",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "PHP My Admin",
    ket: "PHP",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "Github",
    ket: "Repository",
    dad: "900",
  },
];

import Proyek1 from "/assets/proyek/screenshot11.png";
import Proyek2 from "/assets/proyek/Screenshot (451).png";
import Proyek3 from "/assets/proyek/Screenshot 33.png";
import Proyek4 from "/assets/proyek/screenshot44.png";
import Proyek5 from "/assets/proyek/Screenshot 188.png";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Website Semi Warkop",
    desk: `Website pemesanan untuk kedai kopi modern dengan fitur keranjang,
           sistem checkout terintegrasi, serta antarmuka yang responsif.`,
    tools: ["HTML", "CSS", "Javascript"],
    dad: "100",
    URL: "/assets/Latte Luxe/index.html",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Website Undagan",
    desk: `Website undangan digital yang elegan dan personal, menampilkan
           informasi acara, peta lokasi, RSVP, dan galeri foto. Cocok untuk
           pernikahan, ulang tahun, atau acara khusus lainnya.`,
    tools: ["HTML", "CSS", "Javascript", "Audio"],
    dad: "200",
    URL: "/assets/Fahmi Wedding/index.html",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Website Animasi Karakter",
    desk: `Website animasi interaktif dengan karakter Dota 2, menampilkan
           interaksi dan desain responsif untuk pengalaman pengguna yang
           menarik.`,
    tools: ["HTML", "CSS", "Javascript"],
    dad: "300",
    URL: "/assets/Animasi/index.html",
  },
  {
    id: 4,
    gambar: Proyek4,
    nama: "Website Nusantara Indonesia",
    desk: `Website yang menampilkan tentang wisata indonesia dan indahnya.`,
    tools: ["HTML", "CSS", "Javascript", "Video"],
    dad: "400",
    URL: "/assets/Nusantara/index.html",
  },
  {
    id: 5,
    gambar: Proyek5,
    nama: "Website Buku Pengunjung Perpustakaan",
    desk: `Website yang menampilkan tentang isi data diri pengunjung yang ingin ke perpustkaan.`,
    tools: ["HTML", "CSS", "Javascript", "PHP"],
    dad: "500",
    URL: "https://visitorhub.kesug.com/",
  },
];

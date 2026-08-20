import HeroImage from "/assets/hero.webp";
import Pembicara1 from "/assets/pembicara-1.webp";
import Pembicara2 from "/assets/pembicara-2.webp";
import mc1 from "/assets/mc-1.webp";
import mc2 from "/assets/mc-2.webp";
import Penyanyi from "/assets/penyanyi.webp";

import Sponsor1 from "/assets/kominfo.webp";
import Sponsor2 from "/assets/google.webp";
import Sponsor3 from "/assets/facebook.webp";
import Sponsor4 from "/assets/discord.webp";

export const Image = {
  HeroImage,
  Pembicara1,
  Pembicara2,
  Sponsor1,
  Sponsor2,
  Sponsor3,
  Sponsor4,
};

export const SekilasAcara = [
  {
    id: 1,
    icon: "ri-lightbulb-flash-fill",
    judul: "Inovator",
    text: "individu yang membawa ide-ide baru yang revolusioner, para pemimpin pemikiran yang berani menawarkan solusi kreatif untuk masalah yang kompleks.",
    delay: "",
  },
  {
    id: 2,
    icon: "ri-heart-fill",
    judul: "Penampilan",
    text: "Tidak hanya presentasi yang dibawakan oleh Inovator atau Pengembang, pada event kali ini juga kita akan menampilkan sebuah pertunjukan.",
    delay: "300",
  },
  {
    id: 3,
    icon: "ri-star-fill",
    judul: "Hadiah",
    text: "Pada event kali ini bagi peserta yang beruntung akan mendapatkan hadiah dari Inovator danjuga Sponsor yang mensponsori event kali ini.",
    delay: "500",
  },
];

export const DataPembicara = [
  {
    id: 1,
    img: Pembicara1,
    nama: "Ms. Jessica",
    job: "CEO Perusahaan Jaya",
  },
  {
    id: 2,
    img: Pembicara2,
    nama: "Mr. Jajang",
    job: "CEO Perusahaan Techno",
  },
  {
    id: 3,
    img: mc1,
    nama: "Mr. Wellington",
    job: "Pembawa Acara",
  },
  {
    id: 4,
    img: mc2,
    nama: "Ms. Daisey",
    job: "Pembawa Acara",
  },
  {
    id: 5,
    img: Penyanyi,
    nama: "Mr. Davey",
    job: "Penyanyi",
  },
];

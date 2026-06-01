// ===========================
// ARTICLES DATA
// Semua artikel blog disimpan di sini.
// Tambahkan artikel baru dengan menambahkan objek ke array ini.
// ===========================

const ARTICLES = [
  {
    id: 1,
    title: "Review Game Celeste: Sebuah Perjalanan Emosional Melalui Puncak Gunung",
    slug: "celeste-game-review",
    summary: "Tak hanya game yang sulit, namun juga penuh dengan emosi dan cerita yang mendalam.",
    category: "game",
    tags: ["review", "indie-game", "celeste", "game"],
    date: "2026-05-20",
    readTime: "15 min",
    url: "/pages/celeste-game-review/"
  },
  {
    id: 2,
    title: "Absolute Arch Linux Experience: Distro yang tak sesulit itu",
    slug: "absolute-arch-linux-experience",
    summary: "Orang menganggap distro arch linux itu sulit, tapi apa yang sulit? Omong kosong belaka?",
    category: "technology",
    tags: ["review", "linux", "distro", "arch"],
    date: "2026-05-30",
    readTime: "20 min",
    url: "/pages/absolute-arch-linux-experience/"
  }
];

// ===========================
// CATEGORIES
// ===========================
const CATEGORIES = [
  { value: "all", label: "semua kategori" },
  { value: "technology", label: "technology" },
  { value: "game", label: "game" },
  { value: "art", label: "art" },
  { value: "life", label: "life" }
];

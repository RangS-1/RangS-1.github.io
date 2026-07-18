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
  },
  {
    id: 3,
    title: "Programming yang sebenarnya: Seperti apa cara pikir Programmer?",
    slug: "programming-yang-sebenarnya",
    summary: "Bagaimana cara seorang programmer yang baik itu berfikir?",
    category: "technology",
    tags: ["review", "linux", "distro", "arch"],
    date: "2026-06-7",
    readTime: "20 min",
    url: "/pages/programming-yang-sebenarnya/"
  },
  {
  id: 4,
    title: "Terminal: Kawan Sejati Programmer",
    slug: "terminal-sang-kawan-programmer",
    summary: "Terminal tidak unggul karena UI yang cantik, tapi unggul karena efisiensinya.",
    category: "technology",
    tags: ["terminal", "shell", "linux", "programming"],
    date: "2026-06-16",
    readTime: "20 min",
    url: "/pages/terminal-sang-kawan-programmer/"
  },
  {
  id: 5,
    title: "Android Studio: Pengalaman Pahit Manisnya Android Developer",
    slug: "android-studio-experience",
    summary: "Bagaimana cara kerja dari Android Studio? Seperti apa rasanya?",
    category: "technology",
    tags: ["android", "developer", "kotlin", "programming"],
    date: "2026-06-30",
    readTime: "15 min",
    url: "/pages/android-studio-experience/"
  },
  {
  id: 6,
    title: "The Bird Song: Menyelami Makna Lagu dan Teori Musik di Baliknya",
    slug: "the-bird-song",
    summary: "Apa yang membuat lagu ini begitu menyentuh hati? Begitu berbeda dengan lagu cinta lainnya?",
    category: "music",
    tags: ["music", "song", "theory", "love"],
    date: "2026-07-11",
    readTime: "15 min",
    url: "/pages/the-bird-song/"
  },
  {
  id: 7,
    title: "Arch User Repository: Pengalaman ekosistem AUR di Arch Linux",
    slug: "arch-user-repository",
    summary: "Pengalaman menggunakan AUR, cara kerja dibaliknya dan membuat package sendiri sebagai pengguna Arch Linux",
    category: "technology",
    tags: ["linux", "arch", "aur", "package", "repository", "yay"],
    date: "2026-07-18",
    readTime: "10 min",
    url: "/pages/arch-user-repository/"
  }
];

// ===========================
// CATEGORIES
// ===========================
const CATEGORIES = [
  { value: "all", label: "semua kategori" },
  { value: "technology", label: "technology" },
  { value: "game", label: "game" },
  { value: "music", label: "music" },
  { value: "art", label: "art" }
];

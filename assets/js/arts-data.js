/**
 * Arts Data - RangS Blog
 * 
 * Fields:
 * - id: Unique numerical identifier (highest id will appear first)
 * - artName: Name / title of the art
 * - date: Creation date (YYYY-MM-DD or YYYY-MM)
 * - time: Creation time (e.g. "21:45", "14:30")
 * - image: Relative path to the image
 * - type: Type of art ('abstract', 'character', 'OC', 'Pixel')
 * - description: Detailed description of the artwork
 * - reference: URL string or "none" (if "none", button displays "No reference used")
 */

const ARTS = [
  {
    id: 5,
    artName: "Madeline Reflection",
    date: "2026-09-24",
    time: "21:45",
    image: "images/madeline-reflection.png",
    type: "Pixel",
    description: "Ilustrasi pixel art emosional dari game Celeste yang menggambarkan penerimaan terhadap sisi lain dalam diri saat mendaki gunung.",
    reference: "https://www.celestegame.com"
  },
  {
    id: 4,
    artName: "The Mysterious Bird",
    date: "2026-09-15",
    time: "17:30",
    image: "images/the-bird.png",
    type: "OC",
    description: "Desain karakter original berupa burung misterius yang tenang, diadaptasi dari eksplorasi tema musik The Bird Song.",
    reference: "none"
  },
  {
    id: 3,
    artName: "KDE Plasma Waves",
    date: "2026-09-02",
    time: "14:15",
    image: "images/kde-abstract-desktop.png",
    type: "abstract",
    description: "Eksplorasi visual abstrak berbasis geometri minimalis dan kontras warna modern bertema lingkungan desktop.",
    reference: "https://kde.org"
  },
  {
    id: 2,
    artName: "Celeste Prologue Journey",
    date: "2026-08-20",
    time: "19:00",
    image: "images/celeste-prolog.png",
    type: "Pixel",
    description: "Adegan pembuka pendakian gunung yang berselimut salju dalam nuansa pixel art klasik yang dingin dan menantang.",
    reference: "none"
  },
  {
    id: 1,
    artName: "Rullr Arch Mascot",
    date: "2026-08-08",
    time: "10:20",
    image: "images/arch-rullr.png",
    type: "character",
    description: "Studi karakter maskot bernuansa teknologi monokromatik dengan sentuhan ekspresi tegas dan unik.",
    reference: "https://archlinux.org"
  }
];

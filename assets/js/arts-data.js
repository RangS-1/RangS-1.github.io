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
    id: 1,
    artName: "Azriel - The Last Candle (OC)",
    date: "2026-10-09",
    time: "01 Jam : 43 Menit",
    image: "images/oktober-2026/Azriel-The_Last_Candle.png",
    type: "OC",
    description: "Ini adalah karakter original (OC) pertama yang coba kubuat. Namanya Azriel. Entah kenapa nama itu tiba-tiba muncul dipikiranku. Tidak hanya itu, gambar ini juga digunakan untuk belajar teknik hitam legam (Memang ada? Ya gak tau kok tanya saya!). Jujur saja masih kesulitan belajar anatomi dan desain karakter.",
    reference: "none"
  },
  {
    id: 2,
    artName: "TryShading",
    date: "2026-10-18",
    time: "45 Menit",
    image: "images/oktober-2026/TryShading.jpeg",
    type: "Abstract",
    description: "Ini hanya latihan gambar shading dan bentuk tiga dimensi. Agak kesulitan untuk membayangkan arah cahaya.",
    reference: "none"
  },
  {
    id: 3,
    artName: "PixelApple",
    date: "2026-10-19",
    time: "9 Menit",
    image: "images/oktober-2026/PixelApple.jpeg",
    type: "Pixel",
    description: "Mencoba membuat gambar dengan gaya pixel. Entah kenapa sulit untuk ekspor gambar pixel dari IbisPaintX tanpa membuatnya buram, ini pun aku screenshot layar IbisPaintX-nya agar bisa terlihat HD.",
    reference: "none"
  },
  {
    id: 4,
    artName: "PixelCherry",
    date: "2026-10-19",
    time: "9 Menit",
    image: "images/oktober-2026/PixelCherry.jpeg",
    type: "Pixel",
    description: "Kenapa orang-orang menyebut gambar ini mirip lato-lato? Tapi memang benar sih.",
    reference: "none"
  },
  {
    id: 5,
    artName: "Sunset_with_a_gate",
    date: "2026-10-19",
    time: "50 Menit",
    image: "images/oktober-2026/Sunset_with_a_gate.png",
    type: "Pixel",
    description: "Gambar ini dibuat sebagai remastered dari gambar yang kubuat saat masih SD, tentunya bukan pixel. Gate warna merah tersebut terinspirasi dari game Celeste, lebih tepatnya mod Strawberry Jam Collab. Tetapi aku mencari referensi lain di internet, nama gerbang tersebut adalah gerbang torii (鳥居).",
    reference: "https://pin.it/1CKvvtYrJ"
  },
  {
    id: 6,
    artName: "OMORI",
    date: "2026-10-20",
    time: "2 Jam 41 Menit",
    image: "images/oktober-2026/OMORI.jpeg",
    type: "Character",
    description: "Karakter ini berasal dari game OMORI dengan nama yang sama. Aku mencoba teknik pointilis meskipun aku tak tahu apakah ini disebut pointilis atau tidak. Yang penting tugas sekolah beres.",
    reference: "none"
  },
  {
    id: 7,
    artName: "ONESHOT NIKO",
    date: "2026-10-22",
    time: "3 Jam 12 Menit",
    image: "images/oktober-2026/ONESHOT-NIKO.jpeg",
    type: "Character",
    description: "Karakter ini berasal dari game Oneshot dengan nama NIKO, seorang bocah laki-laki (bukan kucing) yang dapat melakukan breaking the 4th wall di dalam game sekaligus lorenya. Meski bukan tugas sekolah, entah kenapa teknik pointilis ini terasa menenangkan dan meningkatkan fokus, daripada terus-menerus doom scrolling.",
    reference: "https://pin.it/8ODPfoflo"
  },
  {
    id: 8,
    artName: "Entahlah ini gambar apaan",
    date: "2026-10-27",
    time: "35 Menit",
    image: "images/oktober-2026/IDunnoWhatThisIs.jpeg",
    type: "Abstract",
    description: "Gambar ini dibuat sebagai tugas pada pelajaran Seni Rupa. Semacam game yang dimana setiap 2 menit, gambar di acak dan diberikan kepada orang lain untuk digambar sesuai kreasi mereka. Aku sebenarnya ingin membuat pantai tetapi malah menjadi seperti gedung ketika gambar kembali padaku. Jadi, gambar ini dibuat oleh 4 otak (teman-temanku) yaitu Fazri, Riyad, Azka Al Fawwaz, dan diriku sendiri.",
    reference: "none"
  }
];

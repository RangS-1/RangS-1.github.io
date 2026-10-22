# Audit metadata halaman

Perbandingan dilakukan terhadap metadata pada `index.html` di root repositori. Elemen acuan: `charset`, `viewport`, `description`, `canonical`, Open Graph (`og:site_name`, `og:title`, `og:description`, `og:image`), `robots`, Twitter Card (`twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`), dan JSON-LD.

## Status

- Semua 22 berkas `index.html` kini memiliki elemen metadata acuan di atas.
- `index.html` (beranda) sudah lengkap sebelum perubahan.
- Metadata yang ditambahkan ke halaman lain disesuaikan dengan judul, deskripsi, URL, dan isi halaman.

## Halaman yang dilengkapi

### Ditambahkan `og:site_name`

Halaman-halaman berikut memiliki elemen acuan lainnya, tetapi belum memiliki Open Graph `og:site_name`:

- `pages/android-studio-experience/index.html`
- `pages/arch-user-repository/index.html`
- `pages/bash-scripting/index.html`
- `pages/debugging-dalam-programming/index.html`
- `pages/freebsd-sang-nenek-moyang-macos/index.html`
- `pages/git-sang-pengontrol/index.html`
- `pages/kde-plasma-experience/index.html`
- `pages/linux-adalah-kernel/index.html`
- `pages/memahami-pull-request/index.html`
- `pages/mode-root-linux/index.html`
- `pages/terminal-sang-kawan-programmer/index.html`
- `pages/the-bird-song/index.html`
- `pages/winget-package-manager/index.html`

### Ditambahkan sebagian metadata

- `pages/programming-yang-sebenarnya/index.html`: ditambahkan `og:site_name`, `robots`, `og:image`, seluruh elemen Twitter Card (`twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`), dan JSON-LD. Metadata lain yang sudah ada tetap dipertahankan.

### Ditambahkan metadata berbagi dan indeksasi

Halaman-halaman berikut dilengkapi dengan `canonical`, `og:site_name`, `og:title`, `og:description`, `robots`, `og:image`, seluruh elemen Twitter Card, dan JSON-LD:

- `about/index.html`
- `arts/index.html`
- `cert/index.html`
- `dashboard/index.html`
- `pages/absolute-arch-linux-experience/index.html`
- `pages/celeste-game-review/index.html`
- `projects/index.html`

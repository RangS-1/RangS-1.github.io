# ARTIKEL EXTRACT - RangS Blog

---

# 1. Absolute Arch Linux Experience: Distro yang tak sesulit itu

## Apa itu Arch Linux?

Bagi kalangan antusias akan teknologi, mungkin sudah tidak asing lagi dengan nama Arch Linux. Hanya dengan namanya saja, banyak orang yang sudah membayangkan bahwa distro ini adalah sesuatu yang sulit, rumit, dan hanya untuk pengguna tingkat lanjut. Namun, apakah benar demikian? Apakah Arch Linux benar-benar sekompleks itu, ataukah ada pengalaman yang lebih menyenangkan di baliknya?

> "In Arch, 'simple' is different than what other distros are considering. The learning is more important than getting something easily done."
> — Judd Vinet, kreator Arch Linux

Pada segmen kali ini, kita akan bahas tentang pengalaman menggunakan Arch Linux, mulai dari awal instalasi hingga penggunaan sehari-hari. Disclaimer bahwa artikel ini bukan untuk menjelaskan cara instalasi atau konfigurasi Arch Linux secara detail, jadi jika ada yang salah silakan masuk ke dokumentasi Arch Linux.

## Instalasi Arch Linux

Siapa di sini yang mendengar instalasi arch linux itu sulit? Ya, memang sulit "Ucap Orang-Orang". Sebenarnya tidak sesulit itu. Yang perlu kita lakukan adalah membuat installer USB yang berisi ISO Arch Linux. Kau bisa masuk ke tautan ini: Arch Linux Download.

Setelah menginstall ISO nya, buat bootable USB dengan software seperti Rufus atau Ventoy. Terserah pilih software apa, tapi aku lebih sering menggunakan Rufus karena lebih ringan dan "cepat".

Setelah selesai, restart komputer dan masuk ke menu boot. Oh iya, jangan lupa untuk sediakan partisi kosong untuk Arch Linux. Cara membuat partisi bisa dilihat pada artikel dari asus berikut: Link ke artikel.

Kembali ke instalasi, untuk masuk ke menu boot ada beberapa cara, namun yang paling mudah menurutku adalah dengan menekan tombol F2 berulang kali (Jika tidak bisa menggunakan F2, maka coba dengan esc atau F12). Setelah masuk ke menu boot, pilih USB yang sudah dibuat atau ubah posisi boot prioritynya ke paling atas (Jika tidak salah untuk ubah boot priority menggunakan tombol F5 atau F6), Save Changes dan restart.

Baik, Nanti akan muncul tampilan seperti pada gambar di bawah ini. INI SANGATLAH PENTING. PERBEDAAN TAMPILAN MENU BOOT MENANDAKAN KAU MEMASUKI MODE APA. KARENA ADA 2 MODE YAITU EFI DAN LEGACY, CATAT ITU BAIK-BAIK!.

Tampilan di atas menandakan kalian berada di mode legacy. Jika tidak seperti itu, artinya kalian berada di mode EFI. Untuk pengguna baru, aku sarankan untuk menggunakan mode EFI karena lebih modern dan memiliki fitur yang lebih baik dibandingkan dengan legacy. Namun, pastikan juga bahwa komputer kalian mendukung mode EFI sebelum memilihnya. (Aku juga menggunakan mode EFI untuk instalasi Arch Linux pertama kali)

Setelah menekan enter, akan banyak tulisan yang aku pun kurang tahu apa maksudnya namun sepertinya sedang mengaktifkan beberapa service tertentu. Setelah selesai selamat, kalian sudah masuk ke bagian instalasi Arch Linux. Layar akan terlihat seperti pada gambar di awal artikel ini.

Baca Juga Artikel: programming yang sebenarnya

## Real Installation

Pemula pasti akan sangat-sangat bingung dengan apa yang harus dilakukan. Tapi tenang, tidak sesulit itu kok. Pertama-tama kita harus menyambungkan ke internet. Berbeda dengan Windows dan MacOS yang menyambungkan ke internet dengan GUI, di Arch Linux kita menggunakan terminal yang disebut Console dan software bernama iwctl.

Masukkan iwctl pada console, lalu ketik station list untuk melihat daftar jaringan wifi yang tersedia. Setelah itu, ketik station "nama-station" connect "nama-wifi" untuk menyambungkan ke wifi. Jika berhasil, akan muncul pesan "Connected to 'nama-wifi'". Jika tidak ada pesan Connected, kemungkinan besar memang sudah terconnect. Keluar dari iwctl dengan CTRL+D. Masukkan kode ping ping.archlinux.org untuk memastikan bahwa koneksi internet sudah berhasil. Jika muncul balasan seperti "64 bytes from archlinux.org: icmp_seq=1 ttl=56 time=10.2 ms", berarti koneksi internet sudah berhasil. Jika tidak, coba ulangi langkah-langkah di sebelumnya atau periksa kembali nama wifi dan password yang dimasukkan.

Untuk dokumentasi lengkap tentang iwctl bisa melalui link berikut: Link ke dokumentasi.

Setelah berhasil tersambung ke internet, ada dua cara untuk melanjutkan instalasi yaitu dengan Archinstall dan Manual. Aku sarankan untuk menggunakan Archinstall untuk yang "absolute bayi" sama takut akan kebebasan. Namun, jika kalian ingin merasakan pengalaman instalasi yang lebih mendalam dan belajar lebih banyak tentang sistem operasi, maka manual adalah pilihan yang tepat. (Aku sendiri menggunakan manual untuk instalasi Arch Linux pertama kali karena... kenapa enggak?).

Saatnya membuat partisi (Inilah yang paling menegangkan dari instalasi Arch Linux karena jika salah langkah sedikit saja, maka komputermu bisa saja tidak bisa booting atau bahkan kehilangan data penting. Jadi pastikan untuk mengikuti langkah-langkahnya dengan benar dan hati-hati).

Aku tak sarankan menggunakan fdisk untuk partisi karena akan lama jika tidak benar-benar paham dengan apa yang terjadi. Kusarankan menggunakan cfdisk. Masukkan perintah cfdisk, lalu pilih gpt (yang paling umum). Nanti akan muncul tampilan seperti pada gambar di bawah ini.

Pastikan pilih disk yang ingin dijadikan Arch Linux (Partisi yang dibuat sebelumnya sebelum restart).
Buat 2 partisi yaitu swap dengan ukuran RAM x 2 dan root sebagai sisanya. CATATAN PENTING, INGAT DENGAN TAMPILAN BOOT SEBELUMNYA? YA, JIKA TAMPILAN LEGACY YA SUDAH HANYA BUAT 2 PARTISI, SEMENTARA JIKA TAMPILAN EFI MAKA BUAT SATU PARTISI UNTUK EFI. Disarankan 1 GB untuk partisi EFI.

Setelah selesai, pilih Write (Hati-hati karena cfdisk ini agak menyebalkan, jika tidak hati-hati kita bisa saja menekan tombol quit daripada menekan tombol write. Aku melakukannya kalau tidak salah 3 kali menekan tombol quit -_-). Ketik yes untuk konfirmasi
Akan muncul tulisan "the partition has been altered". Lalu tekan quit.

Oke, itu yang paling penting, sekarang kita perlu memastikan partisi sudah dibuat, ketik lsblk untuk lihat partisi yang sudah dibuat sebelumnya. Jika sudah ada 2 partisi (untuk legacy) atau 3 partisi (untuk EFI), maka kita lanjut ke langkah selanjutnya yaitu Format Partisi. Masukkan kode dibawah untuk tiap partisi yang dibuat:

```
mkfs.ext4 /dev/sdX1 (Ganti sdX1 dengan partisi root yang sudah dibuat sebelumnya)
mkswap /dev/sdX2 (Ganti sdX2 dengan partisi swap yang sudah dibuat sebelumnya)
swapon /dev/sdX2 (Aktifkan partisi swap)

(Jika menggunakan EFI, maka format partisi EFI dengan kode berikut)
mkfs.fat -F 32 /dev/sdX3 (Ganti sdX 3 dengan partisi EFI yang sudah dibuat sebelumnya)
```

Setelah selesai, saatnya mount partisi yang sudah diformat. Mount itu semacam menyambungkan partisi yang sudah dibuat ke sistem operasi agar bisa digunakan. Masukkan kode berikut untuk mount partisi:

```
mount /dev/sdX1 /mnt (Ingat ya, Root Partisi)
mount --mkdir /dev/sdX3 /mnt/boot (untuk EFI)
swapon /dev/sdX2
```

Oke, sekarang verifikasi dengan lsblk, nanti akan terlihat tampilan seperti berikut:

```
NAME   MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT
sda      8:0    0 232.9G  0 disk 
├─sda1   8:1    0   100M  0 part /mnt/boot
├─sda2   8:2    0     8G  0 part [SWAP]
└─sda3   8:3    0 224.9G  0 part /mnt
```

Jika sudah seperti itu, berarti partisi sudah berhasil dibuat, diformat, dan dimount. Selanjutnya kita perlu menginstall base system Arch Linux ke partisi yang sudah dibuat. Masukkan kode berikut untuk menginstall base system:

```
pacstrap /mnt base linux linux-firmware sof-firmware grub efibootmgr networkmanager nano
```

Sebagai catatan, perintah di atas akan menginstall base system Arch Linux beserta beberapa paket penting seperti kernel linux, firmware, bootloader grub, dan networkmanager.

Setelahnya, kita perlu generate Fstab dengan perintah berikut:

```
genfstab -U /mnt >> /mnt/etc/fstab
```

Fstab itu semacam file konfigurasi yang berisi informasi tentang partisi dan mount point

Dengan melakukan semua itu, kita akhirnya akan masuk ke sistem yang kita buat. Kita akan gunakan arch-chroot untuk masuk ke sistem.
Ya, dari tadi kita belum berada dalam sistem dan hanya berada di installer.

```
arch-chroot /mnt
```

## Konfigurasi Sistem

Tampilan console akan berubah warna menjadi keabu-abuan. Itu artinya selamat, kita masuk ke sistem yang sudah kita buat. Sekarang kita buat hostname. Hostname itu semacam nama asli komputer kita, bukan nama user ya harus dicatat. Masukkan perintah berikut untuk membuat hostname dan mengatur passwordnya:

```
echo "boy" > /etc/hostname
(untuk nama hostname terserah sih)
passwd

New password: (Masukkan password terserah, tapi harus mudah diingat, kusarankan jangan pakai huruf kapital
Confirm password: (Masukkan password yang sama dengan sebelumnya)
passwd: password updated successfully
```

Tunggu sebentar, setelah kita selesai mengatur hostname dan passwordnya, Coba cek internet dengan ping ping.archlinux.org. 99% yang menggunakan wifi akan terputus, karena itu kita harus mengaktifkannya lagi. Ingat networkmanager yang sudah kita install sebelumnya? Kita akan gunakan itu untuk mengaktifkan wifi. Masukkan perintah berikut untuk mengaktifkan wifi:

```
systemctl enable NetworkManager
nmtui
```

nmtui itu semacam tool berbasis teks untuk menyambungkan ke wifi. Cukup mirip dengan GUI jadi tanpa dijelaskanpun pasti sudah bisa menggunakannya. Saatnya install GRUB.

GRUB itu semacam bootloader, ingat dengan tampilan diawal untuk memastikan kita berada di mode legacy atau UEFI?
Ya, cukup mirip dengan menu seperti itu. Masukkan kode berikut:

```
grub-install --target=i386-pc /dev/sdX (Untuk Legacy, ganti sdX dengan disk yang digunakan untuk instalasi)
grub-install --target=x86_64-efi --efi-directory=/boot --bootloader-id=GRUB
```

Setelah selesai, kita perlu generate konfigurasi GRUB dengan perintah berikut:

```
grub-mkconfig -o /boot/grub/grub.cfg
```

Tak ada masalah? bagus! waktu exit dari sistem dan masuk kembali ke Console. ketik umount -a untuk melepaskan partisi yang dibuat. Kita pun masukk ke moment of truth dengan mengetik "reboot now" untuk restart.

## Moment of Truth

Setelah restart, kita akan masuk ke menu GRUB. Pilih Arch Linux dan tekan enter. Jika berhasil, kita akan masuk ke tampilan login console Arch Linux. Masukkan username dan password yang sudah dibuat sebelumnya untuk login.

Selamat, kalian sudah berhasil menginstall Arch Linux! Sekarang kita sudah berada di sistem operasi yang kita buat sendiri. Namun, ini baru permulaan. Jangan seperti pemula yang menggunakan mode root untuk semuanya. Kita akan membuat user baru.
Masukkan perintah berikut:

```
useradd -m -G wheel -s /bin/bash boy
passwd boy
New password: (Masukkan password untuk user boy)
Confirm password: (Masukkan password yang sama dengan sebelumnya)
passwd: password updated successfully
```

Aku lupa bilang sebelumnya untuk menginstall 1 package penting lain yaitu sudo, masukkan perintah pacman -S sudo untuk install sudo. Seperti sebelumnya, 99% pengguna pasti tak mendapatkan internet, jadi gunakan nmtui untuk mengaktifkan wifinya... lagi.

Setelah itu, kita perlu memberikan izin sudo kepada user yang sudah dibuat. Masukkan perintah berikut untuk memberikan izin sudo:

```
EDITOR=nano visudo
```

Setelah itu, cari baris # %wheel ALL=(ALL:ALL) ALL dan hapus tanda # di depannya. Simpan dengan CTRL+O lalu keluar dengan CTRL+X.

Sekarang kita sudah memiliki user dengan izin sudo. Coba logout dengan perintah exit, lalu login kembali dengan user yang sudah dibuat. Masukkan perintah berikut untuk memastikan bahwa user sudah memiliki izin sudo:

```
su boy
sudo pacman -Syu
```

Jika muncul pesan "Password for boy: " dan setelah memasukkan password muncul pesan "error: failed to synchronize all databases (could not connect to server)", berarti user sudah memiliki izin sudo, tapi koneksi internetnya masih belum aktif. Gunakan nmtui untuk mengaktifkan wifi... lagi.

## Desktop Environment alias make up Arch Linux

Oke, sekarang kita sudah memiliki sistem operasi yang berjalan, tapi masih dalam bentuk console yang sangat tidak user-friendly. Kita perlu menginstall desktop environment untuk membuatnya lebih mudah digunakan. Ada banyak desktop environment yang bisa dipilih, seperti GNOME, KDE, XFCE, dan lain-lain.

Ketik exit untuk masuk ke root user. Lalu masukkan kode dibawah ini:

```
pacman -S lxqt sddm konsole thunar firefox neofetch kitty
```

Klik tombol Enter saja terus sampai proses instalasi dimulai. Sebagai catatan, berikut maksud dari kode di atas.

- lxqt = Desktop Environment yang kupilih
- sddm = Login Manager agar tampilan login tidak hanya terminal
- konsole = Konsole
- thunar = File manager paling umum
- firefox = Web Browser
- neofetch = Untuk melakukan ritual linux
- kitty = Terminal (PENTING YA, HARUS DIINSTALL)

Habis Gelap Terbitlah Terang, Saatnya menerangi layar dengan desktop environment yang sudah diinstall. Masukkan perintah berikut untuk mengaktifkan sddm:

```
systemctl enable sddm
systemctl start sddm
```

Boom! Kita sudah masuk ke tampilan login sddm. Masukkan username dan password untuk login ke desktop environment.

## Ritual Pengguna Linux

Ingat bahwa kita sudah install neofetch sebelumnya? Saatnya melakukan ritual linux dengan mengetik neofetch di terminal.
Buka terminal kitty yang sudah diinstall sebelumnya. Lalu ketik neofetch dan enter. Selamat! Kalian sudah menjadi pengguna Arch Linux yang sesungguhnya!

## Pengalaman Sehari-hari dengan Arch Linux

Senang rasanya bisa menggunakan sistem operasi yang kita buat sendiri. Namun, bagaimana dengan pengalaman sehari-hari menggunakan Arch Linux? Apakah benar-benar nyaman atau justru merepotkan? Aku akan jelaskan berdasarkan pengalamanku.

### Pacman?

Saat aku pertama kali menggunakan Arch Linux, aku terkejut dengan kecepatan dan kemudahan penggunaan pacman, package manager default Arch Linux. Dengan hanya beberapa perintah sederhana, aku bisa menginstall, mengupdate, dan menghapus paket dengan sangat cepat.
Sangat berbeda jauh dengan package manager seperti apt dan dnf yang entah kenapa terasa lebih lambat. Saat aku menginstall package dengan pacman, sebenarnya internetku saat itu sedang sangat-sangat tidak stabil. Namun, pacman tetap bisa menginstall package yang diinginkan dengan lancar.

Selain itu, Arch Linux juga memiliki AUR (Arch User Repository) yang mirip dengan pacman hanya saja dengan nama yang agak ngawur yaitu "yay". Like what the hell? kalau tak salah yay itu singkatan dari "Yet Another Yogurt", seolah kita dihidangkan yogurt lain untuk install package.
Jujur saja yay ini sangat membantu karena tidak semua package ada di pacman, terutama package yang berhubungan dengan driver seperti nvidia.

Tapi . . ., yay inikan dari komunitas, tidak semua package di dalamnya aman. Jadi pastikan kalau yang diinstall dengan yay itu benar-benar package yang dibutuhkan.

### Stabilitas

Aku menginstall Arch Linux untuk laptop tuaku yang hanya memiliki RAM 2 GB dan intel celeron. Aku tak berharap banyak dari komputer tersebut, tetapi Arch Linux mengubah pandanganku tentang apa yang bisa dilakukan dengan hardware yang terbatas.

Aku dari dulu ingin punya komputer untuk belajar Linux, konfigurasi sana-sini tanpa takut merusak sistem. Aku pun memberanikan diri untuk melakukan virtualisasi dengan laptop tuaku itu.
Aku menggunakan software QEMU untuk virtualisasi tampilan menu boot Grub dan damn ... Benar-benar selancar itu (virtualisasi menu boot grub menggunakan grub2-theme-preview).
Aku tak menyangka kalau laptopku bisa menjalankan virtualisasi yang lancar.

Dimana ada kesenangan, di situ ada masalah. Laptopku mengalami beberapa freeze yang cukup sering, saat itu aku mengecek penggunaan RAM dengan perintah htop,
Dan penggunaannya hanya sedikit, sekitar 500 MB. Bahkan 500 MB tersebut saat aku membuka firefox dengan 5 tab sekaligus. Lalu Boom! freeze. Entah kenapa bisa terjadi, tapi aku menghiraukannya sampai saat ini.

Aku tak tahu cara restart Laptopku saat freeze terjadi. Biasanya saat menggunakan Ubuntu aku bisa restart dengan mudah. Yaitu dengan menahan tombol Alt + SysRq, REISUB. Di Arch tidak bisa dan aku tak tahu mengapa. Jadi setiap freeze aku hanya menekan tombol power dan menunggu hingga laptop menyala kembali.

### Desktop Environment

Aku menggunakan desktop environment LXQT yang terkenal ringan. Tak ada yang bisa dibanggakan dengan DE LXQT yang memang diperuntukkan untuk laptop tua.
Namun lancar kok karena seperti yang dibilang sebelumnya, hanya menggunakan 500 MB RAM itupun saat membuka firefox dengan 5 tab sekaligus. Aku tak menyangka kalau desktop environment yang ringan bisa memberikan pengalaman yang cukup baik untuk laptop tuaku itu.

### Konfigurasi dan Kustomisasi

Seperti yang dikatakan sebelumnya, aku menggunakan DE LXQT yang dimana bukan diperuntukkan untuk kustomisasi. Jadi menurutku, alasan orang-orang menganggap Arch Linux itu bagus karena bisa menjalankan DE yang kustomisasi full seperti KDE Plasma dan tentu saja Goatnya Arch Linux, "Hyprland".
Berbeda halnya dengan ubuntu yang menggunakan GNOME yang memang terkenal sulit untuk dikustomisasi. Aku sendiri tidak terlalu suka dengan GNOME karena menurutku terlalu berat dan kurang fleksibel untuk dikustomisasi. Namun, aku tetap menghargai pilihan orang lain yang lebih suka menggunakan GNOME.

Tak ada yang spesial dari Arch Linux. Menurutku yang spesial adalah Package Managernya yaitu Pacman yang benar-benar cepat dalam install aplikasi/package.

## Kesimpulan

Apakah sebagus itu? enggak. Apakah sesulit itu? enggak. Kenapa aku berani mengatakan hal itu? karena memang begitu. Arch Linux tidaklah sulit untuk diinstall. Yang hanya perlu diperhatikan adalah mode boot, partisi dan yang paling penting "Internet". Terkadang kebanyakan yang sulit itu adalah ketika menyambung ke internet.
Mengapa? ya karena kebanyakan video tutorial YouTube menggunakan LAN untuk tersambung ke internet. Jadi good luck untuk tersambung ke internet.

Apakah masih takut untuk install Arch Linux? itu wajar. Memang cukup sulit untuk menghirup kebebasan, tapi bukan berarti tidak mungkin. Cobalah untuk belajar sedikit demi sedikit.

---

# 2. Android Studio: Pengalaman Pahit Manisnya Android Developer

## Apa itu Android?

Tentunya kita perlu tahu dulu android itu apa. Android adalah sistem operasi dengan pengguna terbanyak di dunia, terutama karena handphone yang menjadi faktor besar dalam peningkatan ekosistem android. Tak hanya melalui handphone, android juga terdapat dalam TV.

> "I am very happy about Android obviously. I use Android, and it's actually made cellphones very usable."
> — Linus Torvalds, pencipta Linux

Dalam artikel ini, kita tidak akan membahas tentang android melainkan pengalaman yang kudapat setelah belajar development di ekosistem Android.

## Kotlin

Jujur saja dari dulu aku tidak tertarik untuk belajar android development. Namun karena ingin menambah wawasan,
Aku pun belajar bahasa pemrogramannya yaitu Kotlin. Kotlin adalah bahasa pemrograman yang dikembangkan oleh JetBrains dan terkenal dalam kemampuannya dalam menggantikan Java. Java juga bahasa pemrograman ya!

Pada hari pertama aku belajar Kotlin di website bernama Programiz. Aku belajar basicnya mulai dari
Data Types, If Statements, Loop, dan lain-lain. Semakin jauh aku semakin paham bahwa Kotlin ini
merupakan bahasa pemrograman berbasis Object Oriented Programming. Bukan bahasa pemrograman biasa
yang bisa menggunakan Functional Programming.

Setelah aku belajar Kotlin, aku juga belajar sedikit tentang bahasa pemrograman Java. Aku hanya
mempelajari Java sampai pada tahap mengubah tipe data. Setelah itu, saatnya aku install Android Studio.

Baca juga: Programmer yang sebenarnya

## Instalasi Android Studio

Android Studio adalah Environment untuk membuat aplikasi Android.
Layaknya Visual Studio 2022 yang sering digunakan oleh developer game untuk Unity.
Aku agak terkejut saat melihat ukuran file installernya yang mencapai sekitaran 1.2+ GB.
Karena biasanya installer sengaja diperkecil agar instalasi lebih cepat. Tapi okelah, mungkin
memang harus sebesar itu.

Setelah ku install Installer, aku jalankan file Installer dan next-next saja sampai selesai.
Setelah selesai, aku buka Android Studio dan pada tampilan awalnya aku langsung klik New Project.
Nanti akan ada pilihan untuk membuat aplikasi pada Device apa, ada Phone and Tablet, Wear OS (Aku tak tahu ini Device apaan),
Television, Car, XR. Tentunya aku pilih Phone and Tablet dan klik yang Empty Activity. Setelahnya tinggal next.

Aku pun tulis Nama Aplikasinya. Untuk Package Name, aku tak mengerti untuk apa jadi asal isi saja.
Lalu yang Minimum SDK, Aku pilih API 24 ("Nougat", Android 7.0) karena rekomendasi dari AI.
Aku agak bingung kenapa nama Android harus pakai nama makanan?. Lalu pada Build Configuration Language
aku pilih Kotlin DSL (build.gradle.kts) karena terdapat tulisan [Recommended]. Lagi pula saat aku klik bagian paling bawah itu,
hanya muncul pilihan Groovy DSL (build.gradle) yang mana aku tak tahu sama sekali itu apa.

## SDK Manager

IDE android studio ini agak berbeda dari IDE biasanya. Jika di VSCode menggunakan
Ctrl+Shift+Up akan memblok baris, di android studio justru memindahkan baris tersebut ke atas,
Bukan membloknya. Lalu setelah sedikit pemanasan dengan IDE baru, waktunya untuk install SDK.

SDK atau Software Development Kit adalah seperangkat alat lengkap yang disediakan untuk membantu developer,
HARUSNYA! Aku tanya AI untuk versi mana yang harus ku install terutama bagi pemula sepertiku.
AI merekomendasikan untuk install versi:

- Android 17.0 ("CinnamonBun") 37.0
- Android 16.0 ("Baklava") 36.1
- Android 7.1.1 ("Nougat") 24

Untuk install, cukup klik gerigi di kanan atas (samping foto profil), klik SDK Manager dan klik Android SDK, pilih SDK Platforms
dan centang mana saja versi SDK yang perlu diinstall. Klik tombol oke dan tunggu hingga selesai.

## Virtualisasi

Hanya dengan mendengar kata Virtualisasi, aku sudah mencium bau-bau Error.
Jadi Android Studio ini memerlukan virtualisasi atau device android virtual
untuk menjalankan aplikasi android. Di bagian kanan, terdapat Device Manager.
Aku klik itu dan klik tombol +. Lalu aku install device mana yang kuinginkan.

Aku pilih Medium Phone karena ya... Medium, Pertengahan gitu. Aku Next-Next saja
dan serius dah, ukuran filenya bisa sebesar itu. sekitaran 3 GB kalau tidak salah.
Sejauh ini terdengar lancar-lancar saja ya? Waktunya kita masuk ke bagian paling menyebalkan dari Android Development.

## Error Pertama

Saat aku klik tombol Run App (Shift+F10), masalah bertubi-tubi mulai muncul. Pertama adalah error berikut:

```
1. Dependency 'androidx.core:core:1.19.0' requires libraries and applications that
depend on it to compile against version 37 or later of the Android APIs.
:app is currently compiled against android-36.1.
Recommended action: Update this project to use a newer compileSdk of 37.
Note that updating a library or application's compileSdk (which allows newer APIs to be used) can be done separately from updating
targetSdk (which opts the app in to new runtime behavior) and minSdk (which determines which devices the app can be installed on).

2. Dependency 'androidx.core:core-ktx:1.19.0' requires libraries and applications that depend on it to compile against version 37 or later of the Android APIs.
:app is currently compiled against android-36.1.
Recommended action: Update this project to use a newer compileSdk of 37.
Note that updating a library or application's compileSdk
(which allows newer APIs to be used) can be done separately from updating targetSdk (which opts the app in to new runtime behavior) and minSdk (which determines which devices the app can be installed on).
```

Inti dari pesan tersebut adalah kesalahan dependency. Mungkin terdengar sepele,
Tapi tahu berapa lama aku harus memperbaiki hal ini? Sekitar 5-7 Jam hanya untuk membereskan hal ini!
Ingat ya, aku tidak tahu apa-apa soal android studio apalagi tentang Konfigurasi sistem sana-sini.
Yang aku tahu hanyalah Kotlin sebagai bahasa pemrogramannya dan android studio sebagai alat untuk membuat aplikasi android, Hanya itu.

Untungnya sudah kuselesaikan dengan INSTALL ULANG DARI AWAL dan mengubah konfigurasi pada file
build.gradle.kts menjadi seperti berikut:

```
app/src/build.gradle.kts
plugins {
    alias(libs.plugins.android.application)
    alias(libs.plugins.kotlin.compose)
}

android {
    namespace = "com.azrielstech.androidtodo"
    compileSdk {
        version = release(36) {
            minorApiLevel = 1
        }
    }

    defaultConfig {
        applicationId = "com.azrielstech.androidtodo"
        minSdk = 24
        targetSdk = 36
        versionCode = 1
        versionName = "1.0"

        testInstrumentationRunner = "androidx.test.runner.AndroidJUnitRunner"
    }

    buildTypes {
        release {
            optimization {
                enable = false
            }
        }
    }
    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_11
        targetCompatibility = JavaVersion.VERSION_11
    }
    buildFeatures {
        compose = true
    }
}

dependencies {
    implementation(platform(libs.androidx.compose.bom))
    implementation(libs.androidx.activity.compose)
    implementation(libs.androidx.compose.material3)
    implementation(libs.androidx.compose.ui)
    implementation(libs.androidx.compose.ui.graphics)
    implementation(libs.androidx.compose.ui.tooling.preview)
    implementation(libs.androidx.core.ktx)
    implementation(libs.androidx.lifecycle.runtime.ktx)
    testImplementation(libs.junit)
    androidTestImplementation(platform(libs.androidx.compose.bom))
    androidTestImplementation(libs.androidx.compose.ui.test.junit4)
    androidTestImplementation(libs.androidx.espresso.core)
    androidTestImplementation(libs.androidx.junit)
    debugImplementation(libs.androidx.compose.ui.test.manifest)
    debugImplementation(libs.androidx.compose.ui.tooling)
}
```

## Error Kedua

Error kedua adalah Virtualisasi. Yes, seperti yang kukatakan sebelumnya bahwa aku
sudah mencium bau-bau error. Setelah aku klik tombol Run App (Shift+F10), Device Manager
terus menerus loading tak tahu kenapa. Aku restart beberapa kali Device Managernya.
Dalam beberapa momen, aku tak bisa restart karena device sedang berjalan. Namun ditunjukkan PIDnya.
Jika tak tahu PID, PID itu semacam kode proses yang sedang berjalan di windows.

Aku buka task manager dan hendak mematikannya, aku masukkan PIDnya pada pencarian dan aku menemukan masalahnya.
Ternyata Android Studio ini menggunaan QEMU untuk menjalankan Virtual Android Device.
Kenapa aku tahu ini masalahnya? karena QEMU itu adalah emulator yang berjalan lancar jika menggunakan KVM, dan KVM hanya ada di Linux.

Aku menggunakan Windows yang kalau tidak salah menggunakan Intel-Vtx. Yang dimana QEMU akan kewalahan untuk virtualisasi.
Jadi ya, masalah ku atasi setelah AI menyarankanku untuk menggunakan HP android asli yang disambungkan ke laptop dengan USB.
Lebih tepatnya melakukan USB Debugging, untungnya HP ku yang merek Realme sudah support Developer Mode, jadi aku bisa lanjut belajar.

## Project Pertama: Nilai Siswa

Untuk project pertama, AI menyarankanku untuk membuat aplikasi penghitung nilai siswa sederhana.
Yang dimana siswa memasukkan nilai harian, UTS dan UAS lalu diproses menghasilkan output grade/nilai tertentu.

Untuk membuat inputan, di android studio bisa menggunakan TextField. Lalu data dari TextField diproses
menggunakan if statements. Namun aku belajar hal baru tentang TextField, seperti namanya "TextField" atau kolom teks yang artinya
akan menghasilkan nilai/data berupa String, bukan integer. Jadi untuk ubah menjadi integer, harus menggunakan fungsi khusus yaitu
toIntOrNull(). Tidak hanya itu, aku juga belajar tentang mutableStateOf() yang berfungsi untuk mengubah UI oleh JetPack Compose.

```
var nilaiAkhir by remember { mutableStateOf("")}
val nUTSInt = nilaiUTS.toIntOrNull() ?: 0
val nUASInt = nilaiUAS.toIntOrNull() ?: 0
val nilaiRataRata = (nHarianInt + nUTSInt + nUASInt) / 3
nilaiAkhir = if (nilaiRataRata in 90..100){
    "A"
} else if (nilaiRataRata in 80..89) {
    "B (Baik)"
} else if (nilaiRataRata in 70..79) {
    "C (Cukup)"
} else if (nilaiRataRata in 60..69) {
    "D (Kurang)"
} else {
    "E (Tidak Lulus)"
}
```

Oh iya, aku hampir lupa tentang JetPack Compose. JetPack Compose itu semacam toolkit UI modern dari google untuk membuat antarmuka aplikasi secara native. Dan juga kode utama dari aplikasi android ini berada di

```
/app/src/main/java/com/azrielstech/nilaisiswa/MainActivity.kt
```

Jika ingin cek project ini, bisa lihat di Githubku: Link ke Repo/Source Code

## Project Kedua: Android Calculator

Pada project kedua, aku membuat aplikasi Calculator sederhana untuk android.
Sebenarnya project ini paling gampang dari sebelumnya, hanya saja aku punya masalah
ketika hendak ubah tipe data. Mengingat dalam kalkulator, jika user memasukkan nilai yang tak bisa dibagi, Kalau
tidak salah menghasilkan nilai 0. Misalnya 2 / 5 = 0. Anehkan? jadi dari pada menggunakan Integer, aku menggunakan Float.

Pada project ini juga aku belajar untuk membuat tombol reset yang dimana
akan menghapus isi dari TextField atau inputan user menjadi kosong.

Jika ingin cek project ini, bisa lihat di Githubku: Link ke Repo/Source Code

## Project Ketiga: Android To-Do List

Pada Project ketiga ini, aku membuat aplikasi To-Do List sederhana.
Project ketiga ini mengajarkan cara membuat Array, mengisi data dan menghapus data pada Array.
Berbeda dengan project sebelumnya, untuk menyimpan Array di sini menggunakan mutableStateListOf().

Tidak hanya itu, project ini juga mengajarkanku untuk mengubah data Array menjadi String

```
val tasklist = remember { mutableStateListOf()}
```

Jika ingin cek project ini, bisa lihat di Githubku: Link ke Repo/Source Code

## Kesimpulan

Bisa dibilang membuat aplikasi Android ini memang menyenangkan, hanya saja
masalah seperti dependency benar-benar membingungkan terutama jika menggunakan IDE yang baru.
Dan juga virtualisasi yang sering tidak berjalan mulus menjadi pembelajaran sendiri.
Terakhir kali aku menggunakan QEMU (Saat artikel ini dibuat) adalah saat virtualisasi grub.
You know lah, Tipikal pengguna Arch Linux, apa saja pengen di kustomisasi, bahkan Bootloader sekalipun.

Jika ingin mempelajari tentang Android Development, cobalah gunakan AI. Namun, bukan meminta AI untuk membuat kode yang benar secara langsung melainkan beritahu konsep dasar apa saja hal yang perlu dimengerti, cukup tanyakan pada AI apa yang harus dibuat. Syntax apa yang harus digunakan atau apapun itu.
Selama membuat ketiga project tersebut, aku menggunakan AI tapi tidak minta untuk memberi kode yang benar melainkan untuk mengarahkan sampai project selesai.
Mintalah saran dan tunjukkan kode yang telah kau buat dan biarkan AI memberi saran.

---

# 3. Review Game Celeste: Sebuah Perjalanan Emosional Melalui Puncak Gunung

## Apa itu game Celeste?

Celeste adalah game platformer indie yang dirilis pada tahun 2018. Dikembangkan oleh Matt Makes Games, Celeste dikenal karena tingkat kesulitannya yang tinggi, desain level yang cerdas, dan cerita yang menyentuh tentang perjuangan melawan kecemasan dan depresi.

> "I need to rediscover myself, my relationship to play and to the world, and thus my relationship to my work... I need to allow my identity to disintegrate. I need to have faith that the essential core that constitutes 'me' is indestructible"
> — Matt Thorson, kreator Celeste

Dalam game ini, pemain mengendalikan karakter bernama Madeline yang memutuskan untuk mendaki gunung Celeste. Sepanjang perjalanan, pemain akan menghadapi berbagai rintangan platforming yang menantang, sambil mengungkap lapisan cerita yang dalam tentang perjuangan internal Madeline.

## Plot Game

Madeline, seorang wanita muda, memutuskan untuk mendaki gunung Celeste sebagai cara untuk mengatasi kecemasan dan depresi yang dia alami. Sepanjang perjalanan, dia bertemu dengan berbagai karakter, termasuk versi dirinya yang lebih gelap yang disebut "Part of Me". Melalui interaksi dengan karakter-karakter ini, pemain mendapatkan wawasan tentang perjuangan mental Madeline dan bagaimana dia belajar menerima dirinya sendiri.

Selama perjalanannya, Madeline bertemu dengan Granny, seorang wanita tua yang tinggal di puncak gunung, serta Theo, seorang pendaki muda yang juga mencoba menaklukkan Celeste. Setiap karakter memiliki cerita dan motivasi mereka sendiri, yang semuanya berkontribusi pada tema utama game tentang penerimaan diri dan ketahanan.

Madeline menyadari selama perjalanannya bahwa "Part of Me" bukanlah musuh, melainkan bagian dari dirinya yang harus dia terima dan pelajari untuk bekerja sama. Ini adalah metafora yang kuat untuk bagaimana kita semua memiliki sisi gelap atau bagian dari diri kita yang sulit, tetapi dengan penerimaan dan kerja keras, kita bisa tumbuh dan menjadi lebih utuh.

Dengan menerima bagian dari dirinya, Madeline akhirnya berhasil mencapai puncak gunung Celeste. Namun, perjalanan itu bukan hanya tentang mencapai tujuan fisik, tetapi juga tentang perjalanan emosional dan mental yang dia lalui untuk sampai ke sana.

## Gameplay

Gameplay Celeste berfokus pada platforming yang sangat-sangat presisi, absolute pixelated precision. Pemain harus mengendalikan Madeline untuk melompat, memanjat, dan menggunakan kemampuan khususnya untuk mengatasi rintangan yang semakin sulit. Setiap level dirancang dengan cermat untuk menantang keterampilan pemain, tetapi juga memberikan rasa pencapaian yang besar ketika berhasil melewati bagian yang sulit.

Jujur saja, meski Celeste memiliki mekanik yang sederhana, tetap saja mekanik tersebut bisa di upgrade menjadi sangat kompleks. Berikut adalah semua teknik dalam game ini (Entah mungkin nanti ada teknik baru yang ditemukan oleh komunitas, tapi ini adalah teknik-teknik yang sudah diketahui saat ini):

- Walk
- Jump
- Dash
- Grab
- Climb
- Climb Jump
- Block Boost
- Dream Grab
- Dream Jump
- Wallbounce
- Hyperdash
- Superdash
- Wavedash
- Extended Hyper
- Extended Super
- Reverse Wavedash
- Reverse Super
- Reverse Hyper
- Neutral Jump
- Bunnyhop
- Ultra dash
- Chained Ultra
- Demo dash
- Archie
- Dream Hyper
- Dream Super
- Reverse Dream Hyper
- Reverse Dream Super
- Backboost
- 5-Jump
- Corner Boost
- Jelly Ultra
- Hyper Bunnyhop
- Demo Hyper
- Moon Boost
- Grounded Ultra
- Fastfall
- Slowfall
- Jellyvator
- Cassette Boost
- Cornerkick
- Superwave
- Wallboost
- Overclocking
- Crouch Jump
- Crouch Climb
- Spike Jump
- Double BlockBoost
- Jelly Smuggle
- Dream Double Jump
- Retention Tech
- Ceiling Pop
- Bubsdrop
- FastBubble
- Bubble Hyper
- Bubble Super
- Wallbounce Cancel
- Spinner Stun
- Input Buffering
- Feather Super
- Delayed Ultra
- Bino Clip
- Water Boost
- Core Hyper
- Core Super
- Launch Boost
- 6-Jump
- 7-Jump
- Cawoosted Fuper
- Lava Climb
- Reform Tech
- Reverse Corner Boost
- CornerBoost Wallboost
- Jelly Climb
- Half-Stamina Climb
- Feather Boost
- Momentum Carry
- Kermit Dash
- Koral Clip
- Spike Clip
- Grounded Ultra Cancel
- Heart Ultra

Bagaimana? Banyak sekali bukan? Tapi jangan khawatir, kamu tidak perlu menguasai semua teknik ini untuk menikmati game ini. Bahkan dengan hanya beberapa teknik dasar, kamu sudah bisa merasakan keseruan dan tantangan yang ditawarkan oleh Celeste.

Sebenarnya dari banyaknya teknik ini, hanya ada beberapa teknik yang memang diajarkan langsung oleh developer dari game misalnya seperti Wallbounce, Hyperdash dan Wavedash. Hanya dengan 3 tiga itu pemain bisa menikmati keseluruhan gamenya.
Sisanya adalah teknik-teknik yang ditemukan oleh komunitas pemain yang sangat kreatif dan berdedikasi untuk mengeksplorasi semua kemungkinan dalam mekanik game ini.
Seperti yang disebutkan sebelumnya, Celeste adalah platformer yang "absolute pixelated precision."

Saya mendapatkan referensi ini dari komunitas dan video youtube. Silakan cek video ini untuk melihat bagaimana teknik-teknik ini dilakukan dalam gameplay:

## Kesimpulan

Celeste mengajarkan kita untuk dapat menerima diri kita apa adanya, termasuk bagian-bagian yang sulit dan gelap sekalipun.
Setiap rintangan yang kita hadapi dalam hidup bisa diibaratkan seperti level-level dalam game ini — sulit, menantang, tapi bukan tidak mungkin untuk dilewati. Dengan ketekunan, dukungan dari orang-orang di sekitar kita, dan penerimaan diri, kita bisa mengatasi tantangan tersebut dan mencapai "puncak gunung" kita sendiri.

> An Apparation
> Not of this world
> But because of it
> Lurking out of frame
>
> Awake, my heart is a fortress
> In dreams I am vulnerable

---

# 4. Programming yang sebenarnya: Seperti apa cara pikir Programmer?

## Apa itu Programming?

Sebelum membahas lebih jauh, kita harus tahu dulu apa itu programming. Programming adalah proses menulis instruksi-instruksi yang dapat dimengerti oleh komputer untuk melakukan tugas tertentu.

> "Talk is cheap. Show me the code."
> — Linus Torvalds, pencipta Linux

Apa yang sebenarnya membuat programmer itu baik? Kode etik apa yang dipegang dan bagaimana cara berfikir sebagai programmer sejati? kita akan membahasnya dalam artikel ini.

## File Management

Salah satu aspek penting dalam programming adalah manajemen file. Seorang programmer yang baik harus tahu bagaimana mengatur file dan folder dengan rapi.

Biar ku tebak, selama Anda membuat kode, anda pasti menyimpannya dalam satu folder, bukan dengan folder-folder lain seperti assets, components, utils kan? Tampilan VS Code Anda pasti seperti ini:

```
MyProject/
├── index.html
├── style.css
├── script.js
├── image.png
```

Nah, sebenarnya cara seperti itu tidaklah salah, tapi bisa menjadi masalah ketika proyek Anda mulai berkembang dan memiliki banyak file. Bayangkan jika Anda memiliki 100 file dalam satu folder, aku yakin Anda akan kesulitan untuk menemukan mana file yang hendak dijadikan referensi, file yang dijadikan style, file yang dijadikan script, dan lain-lain. Ini bisa membuat proyek Anda menjadi berantakan dan sulit untuk dikelola.

Cobalah untuk mengatur file Anda dengan lebih baik, aku yakin hal tersebut akan sangat berguna! Bahkan Framework modern seperti Vite, Angular dan Laravel pun sudah memiliki struktur foldernya sendiri.

```
MyProject/
├── index.html
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── script.js
│   └── images/
│       └── image.png
├── components/
│   └── Header.js
├── utils/
│   └── helper.js
```

Di atas adalah contoh struktur folder yang terorganisir daripada tidak sama sekali. Sekarang muncul pertanyaan, Bagaimana cara saya menyambungkan satu file dengan file lainnya? Apa yang harus saya tulis pada:

```
<link rel="stylesheet" href="?">
```

Sudah pasti Anda akan mendapat masalah karena tidak tahu cara menyambungkan file dengan benar. Maka dari itu kita masuk ke segment penting berikutnya!

## Terminal

"Apaan sih pake terminal segala, terminal tuh gak penting!". Itulah yang saya dengar dari banyak orang entah itu dari grup coding atau bahkan teman kelas sendiri.
Apa yang salah dari Terminal? Terminal adalah alat yang sangat penting untuk seorang programmer. Fungsinya cukup mirip dengan GUI, yang membedakan hanyalah menggunakan tulisan.

Terdapat banyak sekali perintah yang bisa kamu gunakan di terminal. Berikut adalah penjelasannya:

```
ls - untuk melihat daftar file dan folder dalam direktori saat ini
cd - untuk berpindah direktori
mkdir - untuk membuat folder baru
touch - untuk membuat file baru
rm - untuk menghapus file atau folder
cp - untuk menyalin file atau folder
mv - untuk memindahkan atau mengganti nama file atau folder
cat - untuk menampilkan isi file
```

Sebagai catatan, perintah-perintah di atas adalah perintah yang hanya ada di terminal berbasis Unix seperti Linux dan MacOS. Jika kamu menggunakan Windows, kamu bisa menggunakan Command Prompt atau PowerShell yang memiliki perintah yang sedikit berbeda.

Oke, setelah tahu tentang Terminal, Apa yang harus kita lakukan untuk menyelesaikan masalah yang tadi? Berikut adalah contoh implementasinya:

```
Bayangkan kamu memiliki proyek seperti berikut:
MyProject/
├── index.html
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── script.js
│   └── images/
│       └── image.png

Bukalah index.html, lalu untuk menyambungkan style.css, kamu bisa menulis:
<link rel="stylesheet" href="assets/css/style.css">

Cukup sederhana bukan? Kode di atas mengartikan bahwa
file index.html ingin mengambil file dari folder assets ke folder css dan ke file style.css
```

Sekarang muncul pertanyaan baru lagi, bagaimana jika file style.css berada di atas file index.html? Misalnya seperti ini:

```
MyProject/
├── pages/
│   └── index.html
├── style.css

Bagaimana cara kita menyambungkan file style.css ke index.html?
Inilah pentingnya belajar terminal!
Jika sudah tahu perintah cd, Pasti tidak asing dengan "cd .."

Untuk menyambungkan file style.css ke index.html, kamu bisa menulis:
<link rel="stylesheet" href="../style.css">
Kode di atas mengartikan bahwa
file index.html ingin mengambil file dari folder di atasnya (../)
lalu ke file style.css

Analoginya seperti ini:
Kamu adalah seorang index.html,
Kamu ingin bertemu style.css,
Tapi style.css berada di lantai atasmu,
Tidak mungkin kau terbang kan?
Maka dari itu kamu harus menaiki tangga dulu (../)
Setelah naik tangga dengan (../)
Barulah kamu bisa bertemu dengan style.css
```

Bagaimana? masih pusing? Berlatihlah dengan membuat folder, lalu buat file di dalamnya dengan hanya menggunakan Terminal.

Dengan menguasai Terminal, kamu akan menjadi lebih efisien dalam mengelola proyekmu. Kamu tidak perlu lagi membuka file explorer untuk mencari file yang ingin kamu edit, cukup dengan beberapa perintah di terminal, kamu bisa langsung menuju file tersebut dan membukanya dengan editor favoritmu.

Bahkan, ketika aku ingin membuka proyek yang sudah aku buat sebelumnya dengan VS Code. Aku tinggal masuk ke folder proyek tersebut dan ketik "code ."
Nanti VS Code akan langsung terbuka dengan proyek yang sudah aku buat sebelumnya. Cukup praktis bukan? Apakah hanya terminal? Tentu saja tidak, kita masuk ke segment yang tak kalah pentingnya yaitu

## Git atau Version Control System (VCS)

Pada bagian atas artikel ini, aku mengambil quote dari Linus Torvalds. Mengapa harus Linus Torvalds? Karena dia adalah pencipta Linux, salah satu Kernel sistem operasi paling populer di dunia, dan juga yang paling penting ia menciptakan Git

Seolah tak asing dengan kata tersebut tapi tidak tahu apa itu Git, Version Control System (VCS) atau Git yang kita bahas pada artikel ini adalah sistem yang digunakan untuk mengelola perubahan pada kode sumber proyek. Dengan menggunakan VCS, kamu bisa melacak perubahan yang terjadi pada kode sumber, melihat siapa yang melakukan perubahan, dan bahkan kembali ke versi sebelumnya jika terjadi kesalahan.

Terdengar aneh dan buang-buang waktu? simpelnya seperti ini!

```
Bayangkan kamu bekerja sebagai bidang IT di sebuah perusahaan.
Bos mu ingin kamu mengubah tampilan website perusahaan.
Kamu pun mulai mengubah kode sumber website tersebut,
Tapi setelah mengubahnya, bos mu tidak suka.
Ia pun memintamu untuk mengembalikan tampilan website seperti semula.

Kau berfikir "Waduh, gimana cara balikinnya?"
Di saat inilah Git bersinar!
```

Untuk mengatasi masalah tersebut, kamu harus menggunakan Git dari awal untuk melacak perubahan kode yang kau buat.

Git tidak terinstall otomatis di komputer, kamu harus menginstallnya terlebih dahulu. Berikut adalah link untuk menginstall Git: https://git-scm.com/install

Setelah menginstall Git, waktunya kita menggunakannya. Buka VS Code atau editor apa pun terserah (Pastikan yang sudah ada Integrated Terminal, bukan Text Editor yang tak memiliki Integrated Terminal seperti Notepad, Vim dan Nano (Bentar, di sini ada yang pake Vim?)), lalu buka terminal dan ketik perintah berikut untuk menginisialisasi Git di proyekmu:

```
git init
```

Setelah itu, kamu bisa mulai menambahkan file yang ingin kamu lacak dengan perintah berikut:

```
git add .
git commit -m "Pesan atau catatanmu tentang perubahan yang kamu buat"
```

Apa maksud dari kode diatas?

- git add . = Menambahkan semua file yang telah diubah ke staging area
- git commit -m "Pesan" = Menyimpan perubahan yang telah ditambahkan ke repository

Jika sudah pelajari terminal, kamu pasti tahu kalau tanda . itu artinya semua. Jadi git akan menambahkan semua file ke staging area.
Masih bingung apa Staging Area? Staging Area adalah tempat sementara di mana kamu bisa menambahkan perubahan yang ingin kamu commit. Jadi, kamu bisa memilih perubahan mana yang ingin kamu simpan dan mana yang tidak.

Lakukanlah perintah di atas setiap kali membuat perubahan pada kode sumbermu. Sulit untuk membiasakan diri menggunakan Git dalam terminal?
Jangan Khawatir, VSCode sudah menyediakan ekstensi Git yang memudahkan kamu untuk menggunakan Git tanpa harus mengetik perintah di terminal. Kamu bisa menginstall ekstensi Git di VS Code dan mulai menggunakan fitur-fitur Git seperti commit, push, pull, dan lain-lain dengan mudah melalui antarmuka grafis.
Untuk cara installnya cari saja di Extensions dengan kata kunci "Git" atau "Git Extension".

Pada gambar tersebut, terlihat jelas bahwa aku menggunakan ekstensi Git di VS Code. Pada bagian kiri bawah adalah daftar yang telah ku buat (yang git add dan git commit itu).
Di bagian kiri atas adalah file yang telah di ubah. Di bagian kanan (Lebih tepatnya Text Box) berisi perbandingan kode sebelum dan sesudah diubah.

Namun, tidak sembarangan juga menggunakan Git, kamu harus tahu kapan waktu yang tepat untuk melakukan commit (Semacam Save File). Yang paling penting dari Git adalah pesan commit.
Jangan pernah menulis pesan commit yang tidak jelas atau bahkan ngawur seperti "Update file", "Masukkin Commit" atau yang paling sering adalah "Selesai". Come On Bro! Pesan commit haruslah jelas dan deskriptif, sehingga orang lain (atau bahkan dirimu sendiri di masa depan) bisa memahami perubahan apa yang telah kamu buat hanya dengan membaca pesan commit tersebut.

Coba lihat gambar sebelumnya, Aku selalu menulis pesan commit yang jelas dan deskriptif Sehingga aku tahu apa yang telah aku ubah.

Baca Juga Artikel: absolute arch linux experience

## Absolute Basics

Jangan menganggap bahwa kode yang ditulis dengan bahasa pemrograman yang berbeda itu sulit! Semua kode itu pada dasarnya sama saja. Kok saya berani mengatakan hal tersebut? Berikut penjelasannya

### Variable, Declaration

Setiap bahasa pemrograman pasti memiliki konsep variable dan declaration.
Berikut adalah contoh variable dan declaration dalam beberapa bahasa pemrograman:

```
// JavaScript
let name = "RangS di JS";

// Python
name = "RangS di Python"

// PHP
$name = "RangS di PHP";

// C++
std::string name = "RangS di C++";
```

Seperti yang kamu lihat, semua bahasa pemrograman memiliki konsep variable dan declaration. Hanya saja sintaksnya yang berbeda-beda. Jadi, jika kamu sudah menguasai satu bahasa pemrograman, kamu akan lebih mudah untuk belajar bahasa pemrograman lainnya karena konsep dasarnya sama saja.

Ada dua jenis variable, yaitu variable yang bisa diubah (mutable) dan variable yang tidak bisa diubah (immutable). Contohnya seperti ini:

```
// JavaScript
let mutableVariable = "Saya bisa diubah";
const immutableVariable = "Saya tidak bisa diubah";

// C++
std::string mutableVariable = "Saya bisa diubah";
const std::string immutableVariable = "Saya tidak bisa diubah";
```

Seperti yang kamu lihat, variable yang mutable bisa diubah nilainya, sedangkan variable yang immutable tidak bisa diubah nilainya setelah dideklarasikan. Jadi, jika kamu ingin membuat variable yang nilainya tidak boleh berubah, gunakanlah variable yang immutable.
Dari contoh di atas, kita hanya menambahkan const di depan variable. Di setiap bahasa pemrograman, cara untuk membuat variable immutable itu berbeda-beda. Tapi intinya sama saja, kita hanya perlu menambahkan keyword tertentu di depan variable untuk membuatnya immutable.

### Data Types, Loop

Konsep Data Types adalah konsep paling sederhana, hanya untuk membuat variable tersebut memiliki tipe data tertentu.
Data Types sendiri terdapat banyak sekali jenisnya, mulai dari String, Number, Boolean, Array, Object, dan lain-lain. Berikut adalah contoh Data Types dalam beberapa bahasa pemrograman:

```
// JavaScript
let stringVariable = "Saya adalah string";
let numberVariable = 42;
let booleanVariable = true;

// Python
stringVariable = "Saya adalah string"
numberVariable = 42
booleanVariable = True

// PHP
$stringVariable = "Saya adalah string";
$numberVariable = 42;
$booleanVariable = true;

// C++
std::string stringVariable = "Saya adalah string";
int numberVariable = 42;
bool booleanVariable = true;
```

Seperti yang kamu lihat, semua bahasa pemrograman memiliki konsep Data Types. Hanya saja sintaksnya yang berbeda-beda. Jadi, jika kamu sudah menguasai satu bahasa pemrograman, kamu akan lebih mudah untuk belajar bahasa pemrograman lainnya karena konsep dasarnya sama saja.

Kita masuk ke loops, Loop adalah konsep untuk mengulang kode sampai kondisi tertentu terjadi. Berikut implementasinya:

```
// PHP
for (i = 0; i < 5; i++){}

// Python
for i in range(5):

Inti dari kode di atas adalah
Selama data berada kurang dari 5,
Maka melakukan sesuatu
```

Maksud dari kode diatas untuk mengulang data sebanyak yang diketahui. Lebih sering menggunakan For untuk melakukan loop. Lalu ada konsep kedua loop yaitu While. Berikut

```
// PHP
while (kondisi){}

// Python
while True:

Kode di atas akan melakukan perulangan atau Loop
Terus-menerus sampai kondisi tertentu tercapai.
```

Dari tadi kita bahas kondisi tertentu tapi tak tahu apa itu kondisi,
Karena itu kita lanjut ke pembahasan selanjutnya

### If Statements / Jika

Seperti namanya, If Statement! Jika kode berada dalam kondisi tertentu, maka ia akan melakukan hal yang ada dalam kondisi tertentu.
Berikut contohnya:

```
// Python
if a < 5:
  print("Kurang dari lima")
elif a == 0:
  print("Nilai sama dengan Nol")
else:
  print("Lebih dari lima")

// C++
if (a < 5){
  std::cout << "Kurang dari lima";
} else if (a == 0){
  std::cout << "Nilai sama dengan Nol";
} else{
  std::cout << "Lebih dari lima";
}

Maksud dari kode di atas adalah Jika
Nilai a kurang dari 5 maka print "Kurang dari lima".
Begitu seterusnya sesuai dengan nilai a pada di luar fungsi If.
```

Intinya If Statements digunakan untuk mengecek jika nilai sama dengan tertentu maka akan melakukan tertentu.

### Array

Ini adalah konsep tersulit dalam pembahasan kali ini, Array adalah Variabel yang menyimpan banyak data sekaligus.
Array sangat berguna untuk menyimpan data yang dapat diakses dengan index. Contohnya seperti berikut:

```
// Python
mobil = ["Toyota", "BMW", "Ford GT"]
print(mobil[0])

Apa maksud dari mobil[0]
Artinya adalah mengambil nilai pada mobil yang paling awal.
Dari kebanyakan bahasa pemrograman,
Data Array biasanya dimulai dari 0

mobil = ["Toyota", "BMW", "Ford GT"]
            ^        ^        ^
            |        |        |
            0        1        2

Tapi hati-hati juga, terkadang ada bahasa pemrograman
Yang memulai dengan angka 1. Contohnya saja Lua.
```

## Fungsi Bahasa Pemrograman

Semua bahasa pemrograman memiliki fungsinya masing-masing. Misalnya Python untuk Machine Learning, AI dan Cybersecurity. Lalu C untuk System Design. Lalu PHP untuk Web Apps.
Dari semua yang dibahas, cobalah pelajari Javascript. Javascript bukanlah bahasa pemrograman biasa, melainkan juga bahasa pemrograman paling rakus diantara semuanya.
Javascript bisa menjadi Web Apps, Manipulasi HTML, Desktop Application dan bahkan Mobile Apps, Meski begitu aku tak tahu bagaimana performanya.

## Kesimpulan

Bahasa pemrograman tidaklah sesulit yang kita kira selama ini. Jika sudah paham konsep mendasar seperti yang dijelaskan di atas
sudah pasti akan sangat-sangat mudah untuk mempelajari bahasa pemrograman lain.

Jika tertarik untuk mempelajari lebih lanjut, kusarankan belajar dari Channel Bro Code dan FreeCodeCamp.org.

---

# 5. Terminal: Kawan sejati programmer

## Apa itu Terminal?

Sebelumnya, kita harus paham terlebih dahulu apa itu terminal. Terminal adalah antarmuka berbasis teks atau sering disebut Command Line Interface yang terhubung langsung dengan shell.

> "Bash taught me how to relinquish code ownership to garner additional supporters."
> — Brian Fox, pencipta Bash

Apa yang membuat Terminal menjadi teman sejati seorang programmer profesional? kita akan membahasnya dalam artikel ini.

## Sejarah Terminal

Terminal adalah hasil evolusi panjang dari teknologi komunikasi manusia dengan mesin. Pada era 1960-an, komputer mainframe sangat besar dan mahal, sehingga hanya digunakan oleh institusi besar. Pengguna tidak bisa berinteraksi langsung dengan mesin, melainkan melalui perantara. Data diinput menggunakan "punched cards" (kartu berlubang) yang kemudian diproses oleh komputer.

Seiring berkembangnya teknologi, muncul "teletype" yang memungkinkan komunikasi dua arah antara manusia dan komputer. Teletype inilah yang menjadi cikal bakal Terminal modern. Dengan teletype, pengguna bisa mengetik perintah dan langsung melihat respons dari komputer melalui printer atau layar.

Pada tahun 1970-an, Terminal elektronik mulai populer dan menggantikan teletype. Teknologi ini memungkinkan interaksi yang lebih cepat dan efisien. Bahkan ketika personal computer (PC) mulai berkembang di tahun 1980-an, Terminal tetap relevan dan menjadi standard untuk advanced users dan developers.

Hingga saat ini, Terminal masih menjadi tools yang sangat powerful bagi programmer profesional. Mengapa? Karena efisiensinya yang luar biasa jika kamu tahu cara menggunakannya. Tak ada mouse, tak ada distraksi visual yang berlebihan, hanya keyboard dan teks yang tampil di layar komputer. Kecepatan pekerjaan meningkat drastis ketika kamu menguasai command-command Terminal.

Kau pasti bertanya, jika sama saja dengan GUI modern saat ini, lalu apa gunanya Terminal?
Di sinilah kita akan membahas seefisien apa Terminal sebenarnya!

Baca juga: Programmer yang sebenarnya

## Perbedaan Terminal dengan Shell

Sebelum membahas cara menggunakan Terminal, kita harus membedakan dua istilah yang sering kacau: "Terminal" dan "Shell". Meskipun sering digunakan secara bergantian, keduanya adalah hal yang berbeda.

**Terminal** adalah **antarmuka (interface)** untuk berinteraksi dengan komputer. Terminal adalah program yang membaca input dari keyboard kamu dan menampilkan output sebagai teks di layar. Sederhananya, Terminal adalah "jendela" atau "aplikasi" yang kamu gunakan untuk mengetik perintah.

**Shell** adalah **interpreter atau penerjemah** perintah. Shell menerima perintah yang kamu ketik di Terminal, menginterpretasi perintah tersebut, dan menjalankannya. Shell adalah "otak" yang memproses perintah dan berkomunikasi dengan sistem operasi.

Analogi sederhananya seperti ini:
- **Terminal** = Telepon (perangkat untuk berkomunikasi)
- **Shell** = Operator (orang yang memproses dan memahami apa yang kamu minta)

Ada berbagai jenis Shell yang populer:
- **Bash (Bourne Again Shell)** - Shell paling populer di Linux dan macOS. Bash diciptakan oleh Brian Fox sebagai peningkatan dari shell asli Bourne.
- **Zsh (Z Shell)** - Shell modern dengan fitur autocomplete yang lebih baik. Menjadi default shell di macOS sejak versi Catalina.
- **Fish (Friendly Interactive Shell)** - Shell yang user-friendly dengan syntax yang lebih intuitif.
- **PowerShell** - Shell modern dari Microsoft untuk Windows, berbeda dengan Command Prompt tradisional.
- **sh (Bourne Shell)** - Shell original yang masih digunakan di banyak sistem Unix.

Contoh Terminal yang populer:
- **GNOME Terminal** - Terminal default di banyak distro Linux berbasis GNOME
- **Kitty** - Terminal populer pengguna Linux (Yang pakai Arch Linux pasti tahu)
- **iTerm2** - Terminal populer di macOS dengan banyak fitur custom
- **Windows Terminal** - Terminal modern dari Microsoft untuk Windows
- **VSCode Integrated Terminal** - Terminal yang terintegrasi dalam editor VSCode

## Cara menggunakan Terminal

**Command dasar Terminal** adalah perintah-perintah fundamental yang memungkinkan kamu menavigasi dan mengelola file sistem. Berikut adalah command-command paling penting yang harus kamu kuasai:

```
NAVIGASI DAN INFORMASI:
pwd          - Menampilkan direktori saat ini (print working directory)
ls           - Melihat daftar file dan folder dalam direktori saat ini
ls -la       - Melihat daftar file dengan detail (termasuk hidden files)
cd [folder]  - Berpindah ke direktori tertentu
cd ..        - Berpindah ke direktori parent (atas)
cd ~         - Berpindah ke home directory
cd /         - Berpindah ke root directory

MEMBUAT DAN MENGHAPUS:
mkdir [nama]        - Membuat folder baru
touch [nama file]   - Membuat file baru yang kosong
rm [file]           - Menghapus file
rm -r [folder]      - Menghapus folder beserta isinya (recursive)
rmdir [folder]      - Menghapus folder kosong

MENYALIN DAN MEMINDAHKAN:
cp [sumber] [tujuan]    - Menyalin file
cp -r [sumber] [tujuan] - Menyalin folder beserta isinya
mv [sumber] [tujuan]    - Memindahkan atau mengganti nama file/folder

MELIHAT ISI FILE:
cat [file]       - Menampilkan seluruh isi file
less [file]      - Menampilkan file dengan paging (tekan 'q' untuk keluar)
head [file]      - Menampilkan 10 baris pertama file
tail [file]      - Menampilkan 10 baris terakhir file
grep [text] [file] - Mencari text dalam file

INFORMASI SISTEM:
whoami         - Menampilkan username saat ini
date           - Menampilkan tanggal dan waktu
echo [text]    - Menampilkan text
whoami         - Menampilkan user yang sedang login
df -h          - Menampilkan penggunaan disk space
du -sh [folder] - Menampilkan ukuran folder

PERMISSON DAN OWNERSHIP:
chmod [permission] [file] - Mengubah permission file
chown [user] [file]       - Mengubah owner file

TIPS BERGUNA:
[command] --help    - Menampilkan bantuan command
man [command]       - Menampilkan manual page command
history             - Melihat history command sebelumnya
clear atau ctrl+l   - Membersihkan layar terminal

TIPS BODOH:
sudo rm -rf --no-preserve-root /
Jangan masukkan command diatas! Silakan tanya AI apa maksud dari command tersebut!
```

Sebagai catatan, perintah-perintah di atas adalah perintah yang hanya ada di terminal berbasis Unix seperti Linux dan MacOS. Jika kamu menggunakan Windows, kamu bisa menggunakan Command Prompt atau PowerShell yang memiliki perintah yang sedikit berbeda.

Baca juga: Absolute Arch Linux Experience!

## Ferminal

Apakah menurutmu menggunakan Terminal itu ribet? tenang! Saya sudah membuat solusi yang tepat.
Anda bisa menginstall aplikasi buatan saya yang disebut sebagai **Ferminal**.

Ferminal adalah sebuah Custom Wrapper CLI yang dibuat khusus untuk efisiensi pengguna.
Kenapa namanya Ferminal? ya, Ferminal adalah singkatan dari F*ck Terminal. Jangan tanyakan lagi kenapa harus nama itu -_-.
Lalu apa saja keunggulannya? Saat artikel ini dibuat, Ferminal ini hanya menguntungkan untuk menggunakan Git aliases. Untuk penjelasan lebih lengkap,
silakan kunjungi website berikut untuk dokumentasinya: Ferminal Documentation

## Kesimpulan

Dunia teknologi saat ini berlomba-lomba untuk menciptakan UI yang cantik, mengorbankan performa dan menghilangkan sejarah bahwa apa yang dibuat sekarang adalah hasil dari kerja keras yang dibangun selama puluhan tahun.
Terminal ini merupakan peninggalan masa lalu yang menolak mati, dan kini menjadi teman sejati bagi seorang programmer. Terminal dianggap jelek karena hanya tulisan, tapi programmer seolah tutup mata dengan apa yang mereka tulis juga merupakan sebuah tulisan dan baris kode sederhana.

Masih bingung dengan cara menggunakan Terminal? Itu wajar dan bukan mengartikan bahwa kau bukanlah seorang programmer, semua orang perlu proses untuk belajar.

---

# 6. The Bird Song: Menyelami Makna Lagu dan Teori Musik di Baliknya

## Apa itu The Bird Song?

"The Bird Song" adalah lagu dengan tema cinta yang unik,
menggambarkan dua pasangan dengan metafora Burung dan Panah.

Mengapa harus menggunakan metafora Burung dan Panah? apa hubungan dari hewan dan benda mati tersebut?
Kita akan bahas pada artikel ini!

## Lirik The Bird Song

Berikut adalah lirik dari lagu tersebut:

### Verse 1

> She was a bird, I was an arrow
> Both of us sure we were sword and a sparrow
> Still, when we flew, we never knew (ooh-ooh)

### Verse 2

> There in the air, I felt her feathers
> First all at once, then all together
> When I went through, that's when I knew (ooh-ooh)

### Chorus

> I'm a killer, and a killer is a bad, bad thing to be
> She's a giver, and a giver's even worse to folks like me
> 'Cause I never really wanna be the one (never)
> To hurt somebody (wanna hurt someone)
> But it just keeps happening (why?)
> Yeah, it just keeps happening (why?)

### Verse 3

> I was a bird, he was an arrow
> I was allured by the straight and the narrow
> What could I do? His aim was true

### Verse 4

> Straight to the heart, I let it happen
> I couldn't hardly have ever imagined
> That when he went through me,
> He'd hate what he's doin'
> And make me feel stupid for choosin' him, too

### Chorus

> 'Cause I'm a giver, and a giver is a bad, bad thing to be
> He's a killer, and a killer's even worse for folks like me
> 'Cause I never really wanna feel (never)
> The hurt from anybody (wanna feel the hurt)
> But it just keeps happening (why?)
> Yeah, it just keeps happening (why?)
> Yeah, it just keeps happening

### Bridge

> Falling, never to fly again
> Darling, together when everything's fading
> The shade of the trees and the dark
> I'm in love with the idea
> Of dying with you in my arms
> But not like... this

### Outro

> We can't really help who we are
> We can't really help who we are
> We can't really help who we are
> Damned to the end from the start
> We can't really help who we are
> We can't really help who we are
> We can't really help who we are
> Damned to the end from the start
> We can't really help who we are
> We can't really help who we are (She was a bird)
> We can't really help who we are (I was an arrow)
> (Both of us sure) Damned to the end from the start (We were sword and a sparrow, I was a bird)
> We can't really help who we are (He was an arrow)
> We can't really help who we are

Mungkin terasa aneh pada awal-awal karena menggunakan metafora Burung dan Panah.
Tetapi setelah membaca artikel ini kita akan paham maksud dari metafora pada lagu itu.

## Latar Belakang

Pada lagu tersebut, terdapat 2 karakter yaitu Burung dan Panah.
Kalimat "She was a Bird, I was an Arrow" menggambarkan hubungan mereka yang sudah bertolak belakang dari awal.

"Both of us sure we were sword and a sparrow" mengartikan bahwa mereka sadar bahwa
diri mereka memang berbeda kontras. Mereka tahu hubungan itu berbahaya.
Namun mereka yakin bahwa cinta mereka akan berhasil dan berbeda dari orang-orang.
Bisa dibilang ini adalah bentuk optimisme yang memang sering muncul pada awal hubungan.

"Cinta kita pasti berbeda". Namun perlu diingat bahwa sifat mereka bertolak belakang.

"Still, when we flew, we never knew..." bermaksud bahwa ketika mereka bersama,
mereka tak pernah tahu apa yang salah dari diri mereka. awalnya.

"There in the air, I felt her feathers", kalimat tersebut mengartikan bahwa
ketika mereka bersama, sang Arrow merasakan kesakitan sang Burung. "When I went through, that's when I knew",
Kalimat menyakitkan tersebut menjelaskan bahwa sang Arrow baru sadar telah menembus sang Burung.

Singkatnya, sang Panah terlambat menyadari bahwa ia menyakiti sang Burung.

## Sudut Pandang Arrow

"I'm a killer". Kalimat tersebut bukan mengartikan pembunuh secara literal,
melainkan sang Arrow memiliki sifat yang buruk terhadap pasangannya. misalnya ia selalu
menyakiti, egois dan lainnya.

Pada kalimat "and a killer is a bad, bad thing to be". Ia pun tahu kalau orang seperti itu adalah orang yang buruk.
Seolah kalimat tersebut menggambarkan bahwa ia menjilat ludah sendiri.

"She's a giver" Menggambarkan bahwa ia tahu kalau pasangannya adalah seorang yang sangat baik.
Pasangannya (sang Burung) selalu memaafkan, mengalah, memahami dirinya

Ironinya adalah, ia tahu bahwa "Giver is even worse to folks like me".
sang Panah tahu kalau orang baik adalah orang buruk baginya, Mengakibatkan siklus hubungan menjadi semakin buruk.

Ini bagian pentingnya, sang Panah mengatakan "Cause I never really wanna be the one to hurt somebody".
Ini mengartikan bahwa ia sebenarnya tidak berniat jahat. Dia bukan orang yang ingin menyakiti.
Ironinya lagi "It just keeps happening", mengartikan bahwa kesalahan sama terus terulang lagi.
Ia merasa terjebak dalam pola perilaku yang tidak bisa dihentikan.

## Sudut Pandang Bird

Pada bagian ini, perspektif berubah! Kini korban (sang Burung) yang berbicara.
"I was allured by the straight and the narrow" menggambarkan bahwa sang panah meluncur dengan lurus.
Sehingga sang Burung tertarik padanya. Ia melihat bahwa sang Panah memiliki arah hidup yang jelas,
yakin dan kuat.

"Straight to the heart". Mengartikan bahwa sang Burung rela memberikan seluruh hatinya, demi cinta.
Ironinya adalah pada kalimat "I let it happen", ia sadar hubungan mereka berbahaya. Tetapi memilih bertahan.

"He'd hate what he's doing" menggambarkan bahwa sang Burung tahu sang Panah juga menderita dengan sikapnya sendiri.
Ia tahu lelaki itu benci dengan yang ia lakukan dan tidak menikmati penderitaan.

"Make me feel stupid for choosing him too" menggambarkan bahwa sang Burung mengalami Self-Blame atau
menyalahkan diri sendiri atas hubungan mereka yang tidak sehat. Bukan hanya sakit karena disakiti.
Tetapi juga malu karena memilih orang itu.

Pada bagian Chorus The Bird. Kurang lebih sama dengan sudut pandang The Arrow.
Hanya saja ia juga tak suka dengan kesakitan yang ia alami sendiri.

## Luka dalam Cinta

Kita mulai masuk pada bagian yang lebih kelam. Kalimat "Falling, never to fly again" menggambarkan
bahwa sang Burung tak bisa terbang lagi, lebih tepatnya hubungan mereka telah hancur.

"I'm in love with the idea of dying with you in my arms" memiliki arti bahwa sang Burung berharap mereka
bersama selamanya, namun kalimat ironi kembali muncul, "But not like this" menggambarkan bahwa
sang Burung tidak menginginkan hubungan yang seperti itu, hancur dan sulit diperbaiki.

## Outro

Masuk pada kalimat paling penting. "We can't really help who we are" mengartikan bahwa sikap mereka tak bisa diubah.
- sang Panah -> selalu menyakiti
- sang Burung -> selalu memaafkan

Mereka memang saling mencintai, namun sifat dasar mereka yang sulit diubah membuat hubungan menjadi tidak sehat.
Kalimat ini diulang berkali-kali, yang artinya mereka benar-benar yakin dengan sikap mereka
dan tidak dapat menolong siapa mereka sebenarnya.

Lalu masuk pada nasib, "Damned to the end from the start", mereka mengganggap bahwa mereka memang ditakdirkan
untuk tidak bersama.

## Teori Bow

Ada yang menarik dari lagu ini, sang pencipta lagu memilih Panah dan Burung sebagai metafora.
Kenapa hal tersebut menarik? karena Panah tidak bisa menembak dirinya sendiri sampai mengenai target.
Karena itu ada teori bahwa dalam hubungan mereka ada Bow (Busur).

Busur memang tidak pernah disebutkan dalam lagu, tetapi sang Arrow sempat mengatakan "I never really wanna be the one to hurt somebody".
Mengartikan bahwa ia tak menginginkan sikap pada dirinya itu ada.

Ini sudah masuk ranah opini ya, menurutku Bow adalah trauma yang membentuk Arrow. Maksudnya gini,
Ketika Memanah, Bow harus dibengkokkan, talinya harus ditarik sangat kuat, Saat dilepas, Bow bergetar hebat.
Jadi, sikap sang Panah kembali muncul karena Bow membuatnya harus hidup dalam tekanan agar tidak melesat menyakiti sang Burung.
Ketika ia tidak bisa menahan diri, Bow pun beraksi dan melepaskan panah yang mengenai burung.

## Kesimpulan

Banyak lagu bertema cinta berakhir dengan pembagian peran yang jelas: ada korban dan ada pelaku. The Bird Song justru menghindari itu. Panah tidak bangga telah melukai; ia dipenuhi penyesalan. Burung tidak membenci panah; ia memahami bahwa pasangannya juga tersiksa. Yang menjadi "musuh" bukanlah salah satu dari mereka, melainkan pola hubungan yang membuat mereka tak mampu hidup berdampingan tanpa saling melukai.

Itulah yang membuat lagu ini terasa begitu tragis: dua orang saling mencintai, sama-sama beritikad baik, tetapi tetap tidak mampu menyelamatkan hubungan karena sifat dan dinamika mereka sendiri.

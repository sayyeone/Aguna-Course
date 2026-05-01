# SportsOn — Sportswear Landing Page

SportsOn adalah proyek landing page untuk toko pakaian olahraga fiktif yang dibangun sebagai bagian dari pembelajaran frontend modern. Halaman ini menampilkan hero section, kategori produk, daftar produk, CTA (Call to Action), header, dan footer — semuanya dirancang responsif agar tampil baik di berbagai ukuran layar.

---

## Tech Stack

Proyek ini dibangun menggunakan **Next.js 16** dengan App Router, yang merupakan versi terbaru dari framework React buatan Vercel. Semua komponen ditulis dalam **TypeScript** dan disusun menggunakan **Tailwind CSS v4** untuk styling. Untuk ikon-ikon yang dipakai di dalam komponen (seperti tombol dan navigasi), proyek ini menggunakan library **React Icons**.

Berikut ringkasan dependensinya:

| Teknologi | Versi | Kegunaan |
|---|---|---|
| Next.js | 16.2.4 | Framework utama (App Router) |
| React | 19.2.4 | Library UI |
| TypeScript | ^5 | Type safety |
| Tailwind CSS | ^4 | Styling / utility classes |
| React Icons | ^5.6.0 | Ikon (FiArrowRight, FiPlus, dll) |

---

## Struktur Folder

```
app/
├── globals.css              # Global styles & Tailwind config (CSS variables)
├── layout.tsx               # Root layout (font, metadata)
├── page.tsx                 # Halaman utama — menyusun semua section
└── landing/
    └── components/
        ├── home/
        │   ├── hero.tsx         # Section hero dengan gambar dan headline
        │   ├── categories.tsx   # Grid kategori olahraga
        │   ├── products.tsx     # Grid produk
        │   └── cta.tsx          # Section Call to Action
        └── layouts/
            ├── header.tsx       # Navbar responsif dengan hamburger menu
            └── footer.tsx       # Footer dengan navigasi dan sosial media

public/
└── images/                  # Semua aset gambar (hero, kategori, produk, logo)
```

---

## Cara Menjalankan Proyek

Pastikan sudah menginstall **Node.js** versi 18 ke atas sebelum memulai. Setelah itu, ikuti langkah berikut:

**1. Clone repositori dan masuk ke foldernya**

```bash
git clone <url-repo-kamu>
cd s1
```

**2. Install semua dependensi**

Jalankan perintah ini untuk mengunduh semua package yang dibutuhkan ke folder `node_modules`:

```bash
npm install
```

**3. Jalankan development server**

Setelah instalasi selesai, jalankan server lokal dengan:

```bash
npm run dev
```

Buka browser dan akses **http://localhost:3000** — halaman landing page SportsOn akan muncul secara otomatis. Setiap perubahan yang kamu simpan di kode akan langsung ter-refresh di browser (hot reload).

**4. Build untuk production (opsional)**

Jika ingin membuat versi production yang sudah dioptimasi:

```bash
npm run build
npm run start
```

---

## Fitur Halaman

- **Header** — Navbar dengan logo, menu navigasi, dan tombol Login/Sign Up. Di layar kecil (mobile), menu berubah menjadi hamburger icon yang bisa dibuka/tutup.
- **Hero Section** — Tampilan utama dengan headline besar, deskripsi singkat, dua tombol aksi, dan gambar produk di sisi kanan.
- **Categories** — Menampilkan 6 kategori olahraga (Running, Tennis, Basketball, Football, Badminton, Swimming) dalam format grid yang responsif.
- **Products** — Grid produk dengan harga dalam format Rupiah, gambar produk, dan tombol tambah cepat.
- **CTA Section** — Banner promosi dengan desain dark background dan tombol ajakan untuk berbelanja.
- **Footer** — Navigasi halaman dan link sosial media, beserta copyright.

---

## Catatan

Proyek ini dibuat untuk keperluan pembelajaran dan tidak terhubung ke backend maupun database nyata. Semua data produk dan kategori saat ini bersifat statis (hardcoded di dalam komponen).

# 🍳 International Recipes Home

Aplikasi mobile berbasis **React Native** dan **Expo** yang menyajikan info resep makanan internasional secara dinamis dengan mengonsumsi data dari API [DummyJSON Recipes](https://dummyjson.com/recipes).

Aplikasi ini mendukung *file-based routing* menggunakan **Expo Router** dan telah dioptimalkan agar responsif baik di perangkat mobile maupun ketika di-deploy sebagai Web App di Vercel.

---

## ✨ Fitur Utama

* **🏠 Beranda Interaktif (Home Screen)**
  * **Today's Recipe**: Menampilkan satu resep unggulan acak setiap kali aplikasi dimuat untuk menarik minat pengguna.
  * **Other Recipes Slider**: Daftar resep pilihan lainnya yang disajikan secara horizontal dengan kartu visual yang menarik.
* **🔍 Eksplorasi Kategori & Filter (Recipes Screen)**
  * **Reset Filter ("All")**: Tombol khusus untuk menampilkan semua resep kembali tanpa batasan kategori.
  * **Horizontal Tag Selector**: Memungkinkan pengguna menyaring resep berdasarkan tag/kategori masakan (seperti *Italian*, *Mexican*, *Asian*, dsb.).
  * **Adaptive Grid Layout**: Tampilan kartu resep berbentuk grid 2 kolom yang rapi. Apabila hasil pencarian hanya menyisakan 1 item, tata letak otomatis menempel ke kiri secara proporsional.
* **📖 Halaman Detail Resep (Detail Recipe Screen)**
  * Informasi komprehensif seperti waktu memasak (*cooking time*), waktu persiapan (*preparation time*), jumlah porsi (*servings*), tingkat kesulitan, hingga asal negara resep (*cuisine*).
  * Daftar bahan-bahan (*ingredients*) terstruktur dengan penomoran yang rapi.
  * Langkah demi langkah cara memasak (*instructions*) yang jelas dan mudah dipahami.
* **🎨 Tampilan Premium & Responsif**
  * Gradasi latar belakang halus menggunakan `expo-linear-gradient`.
  * Komponen kustom seperti Header dengan tombol navigasi kembali otomatis.

---

## 🛠️ Tech Stack & Dependencies

Proyek ini dibuat menggunakan teknologi modern:

* **Framework Utama:** React Native & Expo (v54)
* **Navigasi:** Expo Router (File-based Routing)
* **Networking (API Fetching):** Axios
* **UI & Styling:** 
  * Expo Linear Gradient
  * Ionicons (Vector Icons dari `@expo/vector-icons`)
  * React Native Web (Dukungan platform web)

---

## 📂 Struktur Proyek

Berikut adalah struktur folder utama dalam proyek ini:

```text
├── app/
│   ├── (tabs)/
│   │   ├── _layout.tsx         # Struktur navigasi bawah (bottom tabs)
│   │   ├── index.tsx           # Halaman Beranda (Home)
│   │   ├── recipes.tsx         # Halaman Pencarian & Filter Resep
│   │   └── list_recipes.tsx    # Halaman list tambahan (dinonaktifkan/hidden)
│   ├── recipes/
│   │   └── [id_recipe].tsx     # Halaman Detail Resep (Dynamic Route)
│   └── _layout.tsx             # Root layout aplikasi
├── assets/
│   └── images/
│       └── recipe-favicon.png  # Logo utama dan splash screen aplikasi
├── components/
│   ├── Header.tsx              # Komponen Header kustom dengan tombol kembali
│   ├── RecipeItem.tsx          # Komponen kartu resep
│   └── TagItem.tsx             # Komponen chip filter tag
├── constants/
│   └── color.ts                # Variabel palet warna tema aplikasi
├── package.json
└── vercel.json                 # Konfigurasi deployment untuk Vercel
```

---

## 🚀 Cara Menjalankan Secara Lokal

Ikuti langkah berikut untuk memasang dan menjalankan aplikasi di komputer Anda:

1. **Clone Repositori ini:**
   ```bash
   git clone https://github.com/gustiaryapriandana31/recipes-home.git
   cd recipes-home
   ```

2. **Pasang dependensi proyek:**
   ```bash
   npm install
   ```

3. **Jalankan server pengembangan (Metro Bundler):**
   ```bash
   npx expo start
   ```

4. **Buka Aplikasi:**
   * Tekan `a` untuk membuka di Emulator Android.
   * Tekan `i` untuk membuka di Simulator iOS.
   * Tekan `w` untuk membuka di Web Browser.

---

## 🌐 Publikasi & Deployment

Proyek ini telah di-deploy ke web menggunakan **Vercel** dan dapat diakses secara publik. Konfigurasi direktori output diatur pada berkas `vercel.json` mengarah ke folder ekspor statis `/dist`.

---
title: Membuat halaman statis dengan SSG
date: 2024-01-25
---

# Membuat halaman statis dengan SSG

*Published Date: {{ date | postDate }}* { .byline }

Setelah kita udah berkenalan sedikit-sedikit tentang [Static Site Generator](https://indrdmr.online/arsip/perkenalan-static-site-generator/), sesuai janjiku pada tulisanku sebelumnya, kita akan coba praktek bikin halaman statis sederhana pakai SSG, yang mana tujuanku adalah untuk memperkuat pemahaman teman-teman tentang SSG, okay let's gooo!

Untuk SSG yang akan kita pakai adalah [11ty](https://www.11ty.dev/) (baca: *Eleventy*). tapi sebelum itu, pastikan dulu kamu sudah menginstal [Node.js](https://nodejs.org/en) dan tidak lupa untuk siapkan text editor (bisa pakai VSCode, Sublime, atau lainnya). oh ya, Browser-nya jangan lupa (bisa pakai Chrome atau Firefox).

Sudah siap? mari kita mulai!

Pertama-tama, kita siapkan dulu tempat buat project kita, kalau aku naruhnya di `home` aja biar gampang dicari (ini terserah mau taruhnya dimana). Di dalam folder `home`, bikin folder lagi dengan nama "blogalakadarnya" (untuk namanya sebenarnya terserah temen temen aja). atau kamu bisa menjalankan perintah ini di terminal kamu:

```
mkdir blogalakadarnya
```

Setelah itu kita bisa masuk ke folder yang sudah kita buat tadi dengan perintah sebagai berikut:

```
cd blogalakadarnya
```

Nah, langkah selanjutnya adalah membuat file baru di folder project kita dengan nama `index.md`. bisa dengan perintah sebagai berikut:

```
touch index.md
```

File `index.md` ini adalah file Markdown yang akan kita gunakan sebagai kontennya. Nah, langkah selanjutnya adalah kita buka file `index.md` menggunakan text editor.

![Alt text](/assets/images/x3-01-text-editor.png)

Lalu kita tulis di file `index.md` seperti dibawah ini:

```
# Hallo Gaaaeeees!

Uhuuuuyyyy!
```

Maka jadinya akan seperti ini:

![Alt text](/assets/images/x3-02-text-editor.png)

Akhirnya sampailah kita pada bagian yang kita tunggu-tunggu, disinilah SSG akan beraksi. jalankan perintah dibawah ini via terminal (pastikan terminalnya sudah mengarah ke project kita).

```
npx @11ty/eleventy --serve
```

lalu akan muncul output sebagai berikut:

![Alt text](/assets/images/x3-03-terminal.png)

kita ketik "y" lalu enter.

Kita tunggu beberapa saat, setelah itu akan muncul output seperti ini:

![Alt text](/assets/images/x3-04-terminal.png)

Naah kalau sudah muncul seperti ini, itu tandanya halaman statis kita sudah berjalan, langsung saja kita buka Browser-nya, lalu kita ketik `http://localhost:8080/` sebagai alamat url kita.

dan taraaaa!

![Alt text](/assets/images/x3-05-browser.png)

Gimana? menyenangkan, bukan? tapi tunggu dulu, aku akan bahas sedikit tentang apa yang terjadi saat kita menjalankan perintah `npx @11ty/eleventy --serve`.

Jadi, saat kita menjalankan perintah `npx @11ty/eleventy --serve`, dibalik layar si Eleventy (atau 11ty) mengubah file `index.md` menjadi file `index.html`. lalu dari file `index.html` tadi dipindahkan ke folder `_site` dalam folder project kita. kira kira setelah menjalankan perintah tadi, bentuk direktori project kita akan menjadi seperti ini:

![Alt text](/assets/images/x3-06-terminal.png)

Keren, kan?

Dan terakhir sebagai penutup, Aku kasih fakta menarik, bahwa blog tutorial yang sedang kamu baca ini 100% aku bikin pakai SSG dari 11ty! menarik, kan?
---
title: Kenapa kita butuh Bahasa Pemrograman?
date: 2024-01-17
---

# Kenapa kita butuh Bahasa Pemrograman?

*Published Date: {{ date | postDate }}* { .byline }

Sebagian dari kita mungkin bertanya-tanya, kenapa kita butuh bahasa pemrograman? apa yang terjadi kalo gak ada bahasa pemrograman? apa urgensinya, kok harus ada bahasa pemrograman? oleh karena itu mari kita basah, eh bahas, cekibrot!

Mari kita *flashback* ke jaman dahulu dimana komputer belum sekeren kayak sekarang, jauh sebelum ada yang kepikiran konsep yang namanya "bahasa pemrograman". mungkin beberapa tahun setelah Mas [Alan](https://en.wikipedia.org/wiki/Alan_Turing) memperkenalkan konsep [Turing Machine](https://en.wikipedia.org/wiki/Turing_machine) yang digadang-gadang menjadi cikal bakal Komputer Modern seperti saat ini.

Nah, pas di jaman itu kalau kita ingin membuat sebuah program kita perlu memasukkan kode 0 atau 1 secara berurutan, misalnya seperti gambar dibawah ini: 

![inigambar](/assets/images/binary_image.png)

Menurut Mas [Marijn](https://marijnhaverbeke.nl/), ini adalah program buat menambah angka dari 1 sampai 10 secara bersamaan habis itu ditampilin hasilnya. ga mudeng? begini contohnya:

```
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55
```

Kamu pasti bisa bayangin betapa panjang dan monotonnya kode dari program itu. bikin program yang simpel kayak gitu aja panjangnya segitu, apalagi kalo mau bikin program yang lebih kompleks, belum lagi kalau ada bug, pasti *debugging*(nyari error)-nya susah, walawweee.

Kita lanjut lagi ke penjelasannya Mas Marijn; Kode tadi kan jumlahnya ada 9 baris, dan setiap baris kode tadi mengandung sebuah perintah atau instruksi, yang mana kalau kita terjemahkan ke bahasa indonesia jadinya kayak gini:

```
1. Simpan angka 0 di memori nomor 0.
2. Simpan angka 1 di memori nomor 1.
3. Salin nilai dari memori nomor 1 ke memori nomor 2.
4. Kurangi angka 11 dengan nilai yang ada di memori nomor 2.
5. Jika nilai dari memori nomor 2 adalah angka 0, lompat ke instruksi nomor 9.
6. Tambah nilai dari memori nomor 1 dengan memori nomor 0.
7. Tambah angka 1 dengan nilai yang ada di memori nomor 1.
8. Lompat ke instruksi nomor 3.
9. Tampilkan nilai dari memori nomor 0.
```

Naaah, ini sudah agak mendingan daripada baca angka 0 dan 1 yang tak beraturan kayak tadi. jadi, dari sini bisa kita simpulkan bahwa instruksi pakai tulisan jauh lebih *readable* --mudah kebaca-- ketimbang harus baca angka satu-persatu.

Tapi kalo kita perhatikan lagi, instruksi tersebut masih terlalu panjang. mari coba kita persingkat dengan menggunakan pendekatan pseudo-code! tapi kali ini aku pake bahasa enggres aja ya, biar lebih gampang.

```
 Set "total" to 0;
 Set "count" to 1;
[loop]
 Set "compare" to "count";
 Substract 11 from "compare";
 If "compare" is zero, continue at [end]
 Add "count" to "total"
 Add 1 to "count"
 Continue at [loop]
[end]
 Output "total"
```

Naaah siipp, ini jauh lebih baik ketimbang kita harus baca instruksi yang panjang kayak tadi. gimana? udah ada gambaran kenapa kita butuh bahasa pemrograman? kalau masih belum ada gambaran, aku bantu *recap* ya...

1. Bahasa Pemrograman memudahkan kita (sebagai programmer) saat membaca dan mengetik kode.
2. Kalau ada bug atau error bisa cepet ketahuan dimana letak kesalahannya.

Setelah kita tahu bahwa adanya Bahasa Pemrograman itu untuk memudahkan programmer untuk menulis program, ada satu hal yang harus teman teman ketahui bahwa ternyata sebenarnya komputer itu cuma tau angka biner (angka 0 dan 1).

> *"Lah terus kode yang udah dibuat dengan pendekatan pseudo-code tadi buat apaan bang?"*

Oke pertanyaan bagus, jadi kode tadi nantinya akan melewati proses yang dinamakan *compile*+[Jadi intinya semua code yang sudah kita tulis ujung-ujungnya bakal balik lagi jadi kode biner (angka 0 dan 1).], yang mana proses tersebut akan menjadikan kode yang sudah kita tulis berubah menjadi bahasa mesin (kumpulan angka-angka biner) yang nantinya akan dijalankan langsung oleh komputer.
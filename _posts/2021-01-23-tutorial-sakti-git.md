---
layout: post
title: "Tips sakti belajar Git"
excerpt_separator: "<!--more-->"
---

![Git logo](/assets/resources/git-sakti/git-logo.png#center "Git logo")

**Git** adalah _version control software_ dimana user dapat mengantisipasikan adanya perubahan-perubahan dari user sendiri maupun orang lain dengan kehadiran _file versioning_ dimana perubahan pada file dapat kita ketahui/track tanpa harus membuat folder cadangan berulang kali.

<!--more-->

![Final direvisi](/assets/resources/git-sakti/final-direvisi.png#center "Final direvisi")

![Final direvisi dengan sumpah serapah](/assets/resources/git-sakti/skripsi-demi-allah.jpg#center "Final direvisi dengan sumpah serapah")

Git sendiri mempunyai 2 aspek penting yaitu:
1. Sarana pelacakan terhadap setiap perubahan yang terjadi dalam file project
2. Sarana kolaborasi antar programmer melalui _collaborative editing_

Pastinya dengan Git, anda tidak perlu menulis nama file dengan "-revisi" berkali-kali apalagi menyebabkan anda kepusingan terhadap kerjaan anda sendiri, juga orang lain.

## Daftar isi

- [Cara kerja Git](#cara-kerja-git)
- [Memulai dengan Git](#memulai-dengan-git)
- [Tips setup Git](#tips-setup-git)
- [Initialize atau ambil dari remote server](#initialize-atau-ambil-dari-remote-server)
- [Stage / unstage files ke Repository](#stage--unstage-files-ke-repository)
- [Cek status commit](#cek-status-commit)
- [Commit staged changes](#commit-staged-changes)
  - [Sign-off](#sign-off)
  - [Revisi commit (Amending commit)](#revisi-commit-amending-commit)
- [Push, Fetch, dan Pull](#push-fetch-dan-pull)
  - [Push](#push)
  - [Fetch & Pull](#fetch--pull)
- [Branching dan Checkout](#branching-dan-checkout)
- [Stash](#stash)
- [Revert, Reset, dan Checkout](#revert-reset-dan-checkout)
  - [Revert](#revert)
  - [Reset](#reset)
  - [Checkout *(File-type reset)*](#checkout-file-type-reset)
- [Cek history/log](#cek-historylog)
- [Membandingkan antar commit (show & diff)](#membandingkan-antar-commit-show--diff)
- [Situasi di saat anda sial?](#situasi-di-saat-anda-sial)
- [Mengapa anda sebaiknya menggunakan `git gui` dan `gitk`?](#mengapa-anda-sebaiknya-menggunakan-git-gui-dan-gitk)
- [Referensi](#referensi)
  - [Referensi Bacaan](#referensi-bacaan)
- [Disclaimer](#disclaimer)

## Cara kerja Git

![Levels of Git filesystem](/assets/resources/git-sakti/git-diagram.svg#center "Levels of Git filesystem")

Git mempunyai tiga tingkatan state, yaitu:
1. **Local/working directory**, biasanya berupa file dalam disk yang diubah oleh user namun belum didatakan ke database lokal.
2. **Staging area**, berupa file-file yang diubah user sudah dipastikan akan didatakan & siap ditampung ke database lokal.
3. **Repository**, berupa data-data file yang sudah tercatat perubahannya dalam database lokal & siap disinkronkan ke server/remote maupun dipakai oleh orang lain.

Sebelum anda bisa menambahkan file-file tersebut langsung ke remote server (baik GitHub, GitLab, BitBucket, dll), setiap file-file tersebut **harus didatakan** terlebih dahulu ke database sebelum dapat dicatatkan sebagai sebuah *commit* atau perubahan dari user untuk kemudian disinkronkan ke server.

Karena Git pada umumnya bersifat distributed version control, maka file-file dalam repository dapat disinkronkan ke server dengan metode **`push`** dan diambil dari server dengan metode **`fetch/pull`** (untuk update database dari server) ke client.


## Memulai dengan Git

Sebelum memulai pengerjaan tugas/project dengan bantuan GitHub, GitLab, BitBucket, dan lain-lain, pastikan anda **telah menginstall Git** di komputer/laptop anda!

Anda bisa download Git melalui [git-scm.com](https://git-scm.com/) dimana Git tersedia dalam berbagai platform (Windows, macOS, Linux, BSD, dan lain-lain).

Untuk instalasi Git dapat dicek melalui [git-scm.com/downloads](https://git-scm.com/downloads) untuk masing-masing platform.

Selain melalui `git-scm`, anda juga bisa menggunakan [GitHub Desktop](https://desktop.github.com/) apabila anda ingin menggunakan Git berbarengan dengan GitHub dengan integrasi yang lebih mudah (termasuk fork, pull request, issue, dan continous integration).


## Tips setup Git

Sebelum melakukan commit, pastikan anda telah melakukan **set nama dan email anda** untuk memastikan bahwa yang melakukan commit adalah benar dari anda sendiri (bukan orang lain dalam komputer anda, bahkan remote server dalam GitHub tidak bisa mencegah commit yang dilakukan oleh orang lain di komputer anda untuk masuk ke remote repository anda sendiri)

Cara setup user & email:

```bash
# config user untuk satuan repository
git config user.name <nama_anda>
git config user.email <email_anda>

# config user secara global (berlaku untuk setiap repository)
git config --global user.name <nama_anda>
git config --global user.email <email_anda>
```

## Initialize atau ambil dari remote server

Untuk memulai sebuah repository dalam sebuah directory/folder biasa, gunakan:

```bash
git init # jangan lakukan jika sudah ada repository
```

> Sejak Oktober 2020, GitHub memutuskan untuk menggunakan branch `main` sebagai branch utama di repository-repository barunya dibanding branch `master` yang sudah lama digunakan dalam git. Sebagai gantinya anda bisa menggunakan command berikut:
>
> ```bash
> git init --initial-branch=main
> git init -b main # singkatan dari --initial-branch
> ```
>
> Atau bila anda ingin mengganti branch di repository yang sudah anda buat sebelumnya:
>
> ```bash
> git branch -M main # ganti nama branch master ke main
> ```
>
> Untuk proses tambahan mengenai pergantian branch, dapat kalian baca artikelnya di [git-tower](https://www.git-tower.com/learn/git/faq/git-rename-master-to-main/) atau mengenai pengumuman resminya di [github/renaming](https://github.com/github/renaming).

Atau jika anda ingin mengambil sebuah project repository dari remote server (baik GitHub, GitLab, BitBucket, dll), gunakan:

```bash
git clone <repository_link> # bisa melalui ssh maupun https
```

> **CATATAN KECIL:**
> Bila anda ingin menghilangkan repository/database dari folder yang didownload/tidak sengaja dibuat, hapus folder `.git` dari folder project anda (atau gunakan `rm -rf .git` dalam terminal/cmd).


## Stage / unstage files ke Repository

Untuk menambahkan atau menandakan file-file yang telah dibuat atau dimodifikasi untuk siap didatakan ke repository, gunakan **git stage** alias:

```bash
# untuk tambahin file tertentu ke staging index
git add <file>

# untuk tambahin setiap file yang mau diubah ke staging index
git add .
```

Untuk mengurungkan 1 atau lebih file yang siap didatakan ke repository _(ready to commit)_, gunakan **git restore** alias:

```bash
# cukup hapus file tertentu yang diubah dari repository bukan dari disk
# alias unstage sebagian file dari respository
git restore --staged <file>

# cukup hapus semua file yang diubah dari repository bukan dari disk
# alias unstage sebagian file dari respository
# CATATAN: Semua file akan di-*unstage* dari repository
git restore --staged -r .
```

Tenang, perintah `git rm --cached` tidak akan menghilangkan file fisik kamu dari foldermu kok :smile:


## Cek status commit

Untuk cek status file yang akan dicommit atau ditambahkan ke commit, gunakan:

```bash
git status # cek file yang belum/akan dicommit, untracked, sekaligus status branch
```

Jika anda ingin cek stashnya juga:

```bash
git status --show-stash # cek status file, branch, sekaligus entry yang masuk stash
```


## Commit staged changes

Untuk mencatatkan perubahan tersebut sebagai sebuah *commit*, gunakan **git commit** atau dalam terminal/cmd:

```bash
# lakukan commit staged change dengan bantuan text editor (seperti nano, vim, dll)
git commit

# lakukan commit dengan pesan langsung (pakai parameter -m)
git commit -m <pesan_commit>
```

Contoh commit dengan pesan dari user:
```
git commit -m "Revisi bab 3"
```

Ketika anda berada dalam text editor, maka baris pertama dari pesan commit adalah pesan commit yang akan muncul di repository maupun di commit history/log.

![Commit message in vim](/assets/resources/git-sakti/commit-message.png "Commit message in vim")

Kamu juga bisa lampirkan penjelasan dari commit saat anda melakukan edit message di text editor anda dengan melampirkan penjelasan di baris ketiga dan seterusnya.

```
Revisi bab 3

Aku revisi beberapa bagian, terutama mengenai UML Diagram implementasi
di laporan & penambahan diagram UML di vpp.
```

> **CATATAN**: Ada baiknya pesan commit yang anda lampirkan melalui `git commit -m <pesan_commit>` maupun baris pertama commit anda di text editor anda tulis sesingkat mungkin, padat, informatif, dan jelas (maksimal 50 karakter)

### Sign-off

Jika anda menginginkan orang lain sebagai pihak yang melakukan commit:

```bash
# lakukan commit lalu tambahkan siapa yang melakukan commit tersebut di bawah pesan commit
git commit --signoff
```

Jika anda ingin ganti orang yang melakukan commit:

```bash
# ganti nama author yang terlibat dalam commit
git commit --author=<nama_dan_email>

# kembalikan nama author commit seperti semula
git commit --reset-author

## CONTOH:
git commit --author="Budi Setiawan <budi.setiawan@example.com>"
```

Ketika anda melakukan commit dengan sign-off, maka pesan commit yang muncul adalah sebagai berikut:

```
Revisi bab 3

Signed-off-by: Budi Setiawan <budi.setiawan@example.com>
```

### Revisi commit (Amending commit)

Jika anda ingin revisi commit (terutama ingin ralat/revisi/tambahin file yang anda lupakan dalam commit tersebut/revisi pesan commit), gunakan parameter `--amend` dalam **git commit** lalu ubah pesan commit kamu dalam text editor tersebut (opsional)

```bash
# revisi commit
git commit --amend

# revisi commit dengan pesan commit baru
git commit --amend -m <pesan_commit_baru>

# revisi commit tanpa ubah pesan commit
git commit --amend --no-edit
```

> **CATATAN:**
> Jangan pernah revisi commit kamu jika anda terlanjur push (terutama dalam collaborative/public repository), karena revisi commit kamu dapat menyebabkan `push` gagal.
>
> Sebagai gantinya, anda harus melakukan *force-push* ke server (sebagai konsekuensi, log history tersebut ikutan berubah karena adanya *force-push* dari seorang user)
>
> Selain itu, jika anda ingin merevisi commit lama kamu, anda juga harus revert/reset commit tersebut jika commit tersebut memang bukan untuk dipublikasikan.


## Push, Fetch, dan Pull

### Push

Jika anda ingin melakukan `push` untuk pertama kalinya, lakukan:

```bash
# tambahkan remote repository dengan URL repository (SSH/HTTPS)
git remote add <remote_name> <repository_url>

# lakukan push ke remote repository untuk pertama kalinya (dengan parameter -u untuk menambahkan upstream references setelah push pertama berhasil)
git push -u <remote_name> <remote_branch>

## CONTOH:
git remote add origin <url_github_project>
git push -u origin master
```

Jika anda ingin melakukan `push` commit yang telah anda lakukan sebelumnya, gunakan:

```bash
# push ke sebuah branch dalam remote server
git push <remote_name> <remote_branch>

## CONTOH:
git push origin master
git push origin testing
```

> **CATATAN**:
> Secara konvensi, penamaan remote secara *default* biasanya menggunakan **`origin`** sebagai nama remote tujuan ke server (upstream).
> Penamaan `origin` otomatis diberikan saat anda melakukan `clone` sebuah repository dari remote server.
> *Sumber: [git-scm (working with remotes)](https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes)*

Jika anda ingin menghapus sebuah remote branch dari remote track, gunakan:

```bash
# hapus sebuah remote branch (pakai ':')
git push <remote_name> :<remote_branch>

## CONTOH:
git push origin :testing
```

Pada beberapa kasus tertentu, terutama jika anda melakukan `git rebase`, `git commit --amend`, `git reset`, maupun melakukan push tanpa melakukan **`pull`**, maka aktivitas `push` dengan cara biasa gagal karena tidak sinkron dengan history di server.

Sebaliknya, jika anda memang sangat meyakini bahwa log tersebut sudah terupdate (dengan `git fetch` atau `git pull`) & sangat ingin berniat untuk mengubah commit tersebut, maka anda harus melakukan push ke remote server dengan paksa alias `--force` agar remote dapat menerima update seadanya dari user (bahkan mengikuti history dari user) dengan menggunakan:

```bash
# push update & history dari user langsung ke server tanpa mempedulikan update dari remote
git push --force <remote_name> <remote_branch>

## CONTOH:
git push --force origin testing
```

> **CATATAN**:
> Trik ini **SANGAT BERBAHAYA** untuk dilakukan di public/collaborative repository karena server akan menerima & overwrite history informasi sepenuhnya dari user yang melakukan `git push --force`!!
>
> Anda akan mengetahui konsekuensi tersebut ketika anda melakukan `git pull` maupun `git fetch`, meski tindakan-tindakan berbahaya di atas masih bisa dikembalikan dengan `git reflog` (meski dengan peluang selamat yang agak kecil sih.. :worried:)
>
> Sebagai gantinya, gunakan `git revert` untuk membatalkan commit yang tidak sengaja terjadi (commit dibatalkan tapi tetap dicatat aktivitasnya) atau *relakan aja* apa yang sudah terlanjur salah/typo :sob:

### Fetch & Pull

Perlu diketahui bahwa melakukan `git pull` sama dengan menjalankan `git fetch` terlebih dahulu sebelum kemudian:

- Digabungkan dengan commit-commit terbaru dari anda dengan `git merge` (default),
- Atau ditempatkan di atas commit terbaru dari server terlebih dahulu, lalu ditempatkan commit-commit terbaru dari anda denagn `git rebase`.

Untuk melakukan `fetch` dari server tanpa melakukan `merge` maupun `rebase`, gunakan:

```bash
# fetch semua remote branch dari remote 'origin'
git fetch

# fetch salah saru remote branch dari salah satu remote server
git fetch <remote_name> <remote_branch>

# fetch dari remote server dan cleanup branch yang tidak terpakai
git fetch --prune
```

Anda juga bisa melakukan pull branch lain tanpa harus melakukan checkout ke branch yang dituju dengan:

```bash
# pull dari remote tanpa checkout
git fetch <remote_name> <remote_branch>:<target_branch>
```

Apabila tidak ada commit yang anda buat pada branch tersebut, maka pointer branch akan maju dengan sendirinya ke commit terbaru dari remote *(fast-forward)*. Namun sebaliknya, apabila ada commit yang baru anda buat, maka commit-commit dari anda akan:

1. Digabungkan dengan commit-commit terbaru dari anda dengan `git merge` (default, tanpa stash),
2. Ditempatkan setelah commit terbaru dari server dengan `git rebase` (wajib stash, cocok apabila pengen melakukan eksperimen).


## Branching dan Checkout

Untuk melakukan ~~*pembelahan diri*~~ buka cabang/branch baru, gunakan:

```bash
# buka branch baru aja (sekedar jaga-jaga)
git branch <new_branch>

# buka branch baru & checkout ke branch baru
git checkout -b <new_branch>
```

Untuk melakukan checkout ke branch baru, gunakan:

```bash
# berpindah ke branch lain
git checkout <branch>

# berpindah ke branch lain (dan buang kerjaan dari branch lama anda)
git checkout -f <new_branch>

# buka branch baru (mulai dari nol/alias tanpa koneksi dengan branch lain)
git checkout --orphan <new_branch>
```

Untuk lihat daftar branch, gunakan:

```bash
# cek branch lokal
git branch

# cek remote branch
git branch -r

# cek semua branch (termasuk remote)
git branch -a
```

Untuk menghapus branch yang sudah dimerge/belum dimerge, gunakan:

```bash
# hapus branch yang telah dimerge
git branch -d <branch_to_delete>

# hapus branch yang belum dimerge (kerjaan anda di branch tersebut bisa lenyap!)
git branch -D <branch_to_delete>
```

Untuk ganti nama branch, gunakan:

```bash
# ganti nama branch
git branch -m <branch> <new_branch_name>
```

Untuk kasus `merge` dan `rebase` akan dibahas di topik terpisah :wink:


## Stash

Adalah **kewajiban bagi anda ketika anda ingin berpindah branch** (apabila branch tersebut memiliki file yang sudah diubah dan berbeda dengan file pada branch yang sedang dikerjakan). Tidak hanya itu, anda juga dapat mengarsipkan kerjaan-kerjaan di branch tersebut bila ingin dikerjakan lain waktu.

Untuk simpan kerjaan anda, gunakan:

```bash
# simpan semua file-file yang diubah (work dir & staging)
git stash

# simpan semua file-file yang diubah (work dir & staging) pakai pesan tersendiri
git stash -m <pesan_stash>

# cek stash-stash dalam repository
git stash list

# keluarkan file-file yang sudah distash, diambil dari yang terbaru
git stash pop
git stash pop <stash_id>

# apply file-file yang sudah distash, diambil dari yang terbaru dan tetap disimpan
git stash apply
git stash apply <stash_id>
```


## Revert, Reset, dan Checkout

![Revert, Reset, Checkout, and Squash](/assets/resources/git-sakti/reset-checkout-revert-squash.png "Revert, Reset, Checkout, and Squash")

| Command        | Scope        | Tujuan                                                                           |
| -------------- | ------------ | -------------------------------------------------------------------------------- |
| `git revert`   | Commit-level | Buat commit baru dengan mengembalikan isi file menjadi kondisi semula            |
| `git revert`   | File-level   | -                                                                                |
| `git reset`    | Commit-level | Buang commit dari branch, undo commit, timpa semua file (bila pakai `--hard`)    |
| `git reset`    | File-level   | Unstage file (jarang, diganti dengan `git restore`)                              |
| `git checkout` | Commit-level | Pindah branch, cek commit lama, cek reflog                                       |
| `git checkout` | File-level   | Kembalikan kondisi file ke commit terbaru/tertentu di working directory |

**Revert, Reset, dan Checkout** digunakan apabila anda ingin melakukan *undo changes* atau terdapat masalah yang menyebabkan anda harus merevisi file yang dicommit maupun buang commit yang sudah terlanjur ter-commit.

### Revert

Jika anda sudah terlanjur **commit kerjaan yang salah & push ke remote branch** (misal GitHub, BitBucket, dll) dan berada pada *public/collaborative repository*, maka satu-satunya jalan untuk menghapus commit dengan **cara yang benar** adalah dengan `git revert` dimana file yang diubah pada commit tersebut dikembalikan ke kondisi sebelum commit terjadi.

Dengan `git revert`, **hanya file yang dikembalikan kondisinya ke kondisi sebelum dicommit** namun akan ada commit baru yang ditambahkan ke history. Penggunaan `git revert` tidak sama dengan `git reset` dimana `git reset` **menghapus commit dari branch anda** dengan reset branch pointer commit ke commit sebelumnya.

Untuk mengembalikan kondisi file karena sudah terlanjur commit & push di *collaborative branch/repository*, gunakan:

```bash
# buat commit baru dengan mengembalikan kondisi file sebelum commit
git revert <commit_sha>
```

### Reset

> **CATATAN**:
> Trik ini **CUKUP BERBAHAYA** jika ada kerjaan yang belum anda stage atau terdapat commit yang belum anda push namun tidak sengaja terhapus oleh `git reset` maupun `git checkout`!!
>
> Selain itu, `git reset` bersifat **_history-manipulative_** karena dapat mengubah branch history/log dengan mengubah posisi pointer branch ke commit-commit sesuai keinginan anda (tidak harus mundur, namun bisa majuin commit juga!).
>
> Gunakan `git reset` di saat anda sudah mengerti basic-basic cara mengatur history log repository atau gunakan `gitk` sebagai visualisasi interaktif untuk cek commit-commit yang sudah anda buat (anda juga bisa reset, checkout, dan revert di `gitk`).
>
> Selain itu, anda juga harus mengetahui riwayat commit-commit yang dibuat sebelumnya dengan menggunakan `git log` atau `gitk` sebelum melakukan reset pada branch yang sedang anda gunakan saat ini.

Untuk reset branch ke commit tertentu, gunakan `git reset` (alias defaultnya dari mixed reset, `git reset --mixed`) dimana ketika branch/pointer tersebut di-reset, maka file yang direset **tidak masuk ke staging index** namun keberadaan file tetap dipertahankan:

```bash
# Reset branch by set branch pointer (HEAD) to commit
# It also reset the staging index, but preserves it's working directory
git reset <commit_sha>
git reset --mixed <commit_sha> # Equivalent & default action for reset
```

Atau jika anda hanya undo commit atau ingin digabungkan ke commit lain, gunakan `git reset --soft` dimana ketika branch/pointer tersebut di-reset, maka file yang direset **dimasukkan ke staging index** dan file tetap dipertahankan:

```bash
# Reset branch by set branch pointer (HEAD) to commit
# It keeps working directory & staging index
git reset --soft <commit_sha>
```

Atau bila ingin full-reset branch ke commit tertentu, gunakan `git reset --hard` dimana ketika branch/pointer tersebut di-reset, maka **file-file dalam staging index & working directory** akan diganti dengan file dari commit yang direset:

```bash
# VERY DANGEROUS!
# Reset branch by set branch pointer (HEAD) to commit
# It immediately reset the staging index & overwrites file with files in that commit.
git reset --hard <commit_sha>
```

Ada baiknya untuk **berhati-hati** dengan `git reset` karena perintah ini tentunya akan **mengubah branch history/log** dan mengakibatkan *push* ke remote branch **ditolak karena ketidaksamaan branch history/log!**

> **CATATAN**:
> Karena trik ini **SANGAT BERBAHAYA** untuk dilakukan di public/collaborative repository, maka `git reset` hanya boleh dilakukan sebelum commit tersebut dipush & sangat tidak disarankan untuk *overwrite* commit-commit yang sudah dipublish sebelumnya.
>
> Cara mudahnya adalah dengan menggunakan `git log` atau `gitk` dengan memastikan bahwa commit yang anda reset seharusnya tidak melebihi commit pada remote branch.
>
> Selain itu, trik ini juga akan ditolak ketika anda ingin melakukan push ke remote repository karena dianggap *diverged* dan mengharuskan anda untuk `git push --force` dengan konsekuensi bahwa history yang berada pada remote branch akan digantikan oleh history milik anda sendiri.

### Checkout *(File-type reset)*

Checkout dapat dilakukan pada file, dengan cara **mengembalikan kondisi file dalam working directory ke kondisi semula** (commit terbaru) ataupun ke kondisi pada commit tertentu.

Checkout sangat berguna jika anda ingin mengembalikan kondisi file yang diedit secara biner (termasuk tertimpa oleh file dengan nama yang sama) ke kondisi semula.

Jika anda ingin cek kondisi di branch yang sedang anda gunakan (termasuk cek status file), gunakan:

```bash
# cek status file di branch ini
git checkout
```

Jika anda ingin reset file ke kondisi semula (commit terbaru/tertentu), gunakan:

```bash
# timpa file yang dimodifikasi secara lokal dengan file di commit terbaru
git checkout <file>
git checkout -- <file>

# timpa file dengan file di commit tertentu
git checkout <commit_sha> <file>

# BAHAYA, timpa semua file yang dimodifikasi secara lokal dengan file di commit terbaru
git checkout .
git checkout -- .
```


## Cek history/log

Untuk cek history pada branch yang sedang anda kerjakan, gunakan:

```bash
# Cek commit history (beserta nama, tanggal, dan deskripsi)
git log

# Cek commit history (hanya id, branch, dan pesan commit)
git log --oneline

# Cek commit history (termasuk branch dan tag)
git log --oneline --decorate

# Cek & gambarin graph commit history (termasuk branch dan tag)
git log --oneline --decorate --graph
```

Untuk cek history pada branch tertentu, gunakan:

```bash
# Cek commit history di branch tertentu
git log <branch>

# Cek commit history di semua branch
git log --all
```

Untuk cek siapa saja yang lakukan commit pada branch/keseluruhan, gunakan:

```bash
# Cek history singkat pada branch ini (beserta orang-orang yang mengerjakannya)
git shortlog

# Cek history singkat pada semua branch
git shortlog --all

# Cek orang yang mengerjakan branch ini
git shortlog --summary
git shortlog -s

# Cek orang yang mengerjakan branch ini & emailnya
git shortlog --summary --email
git shortlog -s -e

# Cek orang yang mengerjakan branch ini (diurutkan dari jumlah kontribusi, bukan nama author)
git shortlog --numbered
git shortlog -n
```


## Membandingkan antar commit (show & diff)

![Git diff](/assets/resources/git-sakti/git-diff.png "Git diff")

Jika anda ingin membandingkan working directory/staging index (cache) dengan sebuah commit, gunakan:

```bash
# bandingkan working directory (termasuk staging) dengan commit terbaru
git diff

# bandingkan staging index (alias cached) dengan commit terbaru
git diff --staged
git diff --cached

# bandingkan working directory (termasuk staging) dengan commit tertentu
git diff <commit_sha>

# bandingkan sebuah commit dengan commit tertentu
git diff <commit_sha_old> <commit_sha_new>
```

Jika anda ingin cek keterangan sebuah commit (termasuk perbedaan file dari sebuah commit), gunakan:

```bash
# cek keterangan commit terbaru (termauk hash, author, waktu, dan judul)
git show

# cek keterangan commit terbaru (hanya hash dan judul)
git show --oneline

# cek keterangan commit tertentu
git show <commit_sha>
```


## Situasi di saat anda sial?

Sial adalah hal yang tidak banget anda inginkan bahkan sampai terjadi dalam mengurus project dalam Git. Bahkan dalam situasi paling sial sekalipun, Git menawarkan berbagai pilihan dalam menangani kesialan anda, salah satunya jika...:

- Salah push (terlanjur force-push ke remote, seharusnya tidak diinginkan)
- Salah commit (masuk ke branch dangling/branch yang tidak diinginkan)
- Tidak sengaja delete file yang di-unstage (inginnya unstage malah terhapus filenya)
- Typo pesan commit
- Lupa ganti nama author commit (misal pakai nama Bapak kamu dalam laptop kamu)
- Gak ingin amend malah ikutan di-amend (bahkan di branch yang salah)
- Download repository dalam bentuk (.zip) lalu revisi & push ke repository (agak maksa karena gaptek)
- Salah reset ke commit-commit lama (bahkan hard-reset jika sialnya lagi :sad:)

Silakan dicek sesuai kondisinya. `git reflog` cukup membantu namun sayangnya saya tidak bisa menolong banyak mengenai kasus-kasus yang sial banget :anguished::sob:

Barangkali bagi anda yang merasakan sial banget, silakan disimak artikel **"On undoing, fixing, or removing commits in git"** di [https://sethrobertson.github.io/GitFixUm/fixup.html](https://sethrobertson.github.io/GitFixUm/fixup.html)


## Mengapa anda sebaiknya menggunakan `git gui` dan `gitk`?

Malas menghafal command git dan pusing melihat branch adalah 2 hal yang cukup menyebalkan dalam mengurus berbagai macam project bahkan dengan skala besar sekalipun.

**Mengapa harus `git gui`?**

![Git GUI](/assets/resources/git-sakti/git-gui.png "Git GUI")

Jawabannya adalah untuk memudahkan anda untuk mengatur file-file yang akan anda commit. `git gui` juga memudahkan anda untuk mengatur line-line pada file mana yang akan dicommit maupun direset (dikembalikan kondisi line pada file).

Selain itu `git gui` juga dapat mencegah anda salah pencet/eksekusi command dari git, terutama dalam mengurus staging/unstage dan commit karena 2 hal tersebut cukup berbahaya jika typo (terutama pada unstage, dimana `git rm` bisa menghapus file kamu dari disk tanpa menggunakan `--cached`).

**Mengapa `gitk`?**

![Gitk, Git Commit Viewer](/assets/resources/git-sakti/gitk.png "Gitk, Git Commit Viewer")

Karena `gitk` memudahkan anda secara visual untuk mengetahui riwayat commit-commit yang sudah dibuat dan status pergerakan branch-branch dalam repository sehingga tidak salah pencet saat anda ingin melakukan checkout/branching.

`gitk` juga bisa cek file-file yang sudah dicommit sebelumnya dan dapat dicompare dengan file pada commit terbaru.

Selain itu, `gitk` juga sangat berguna jika anda ingin `reset` maupun berpindah branch tanpa merusak file-file lain.


## Referensi

Silakan baca artikel-artikel ini di waktu yang senggang agar anda bisa merasakan nikmatnya menggunakan `git` pada link-link di bawah:

- Git SCM Documentation: [https://git-scm.com/docs](https://git-scm.com/docs)
- Git - the simple guide: [https://rogerdudler.github.io/git-guide/index.html](https://rogerdudler.github.io/git-guide/index.html) - ([Bahasa Indonesia](https://rogerdudler.github.io/git-guide/index.id.html))
- Cheat Sheet:
    - GitHub: [https://education.github.com/git-cheat-sheet-education.pdf](https://education.github.com/git-cheat-sheet-education.pdf)
    - GitLab: [https://about.gitlab.com/images/press/git-cheat-sheet.pdf](https://about.gitlab.com/images/press/git-cheat-sheet.pdf)
    - GitTower: [https://www.git-tower.com/blog/git-cheat-sheet/](https://www.git-tower.com/blog/git-cheat-sheet/)
    - Atlassian BitBucket: [https://www.atlassian.com/git/tutorials/atlassian-git-cheatsheet](https://www.atlassian.com/git/tutorials/atlassian-git-cheatsheet)
    - Visual Git Cheatsheet: [https://ndpsoftware.com/git-cheatsheet.html](https://ndpsoftware.com/git-cheatsheet.html)
- Git Tutorial:
    - Git SCM: [https://git-scm.com/docs/gittutorial](https://git-scm.com/docs/gittutorial)
    - Atlassian BitBucket: [https://www.atlassian.com/git/tutorials/](https://www.atlassian.com/git/tutorials/)
    - Hostinger: [https://www.hostinger.co.id/tutorial/tutorial-git-dasar-cara-menggunakan-git/](https://www.hostinger.co.id/tutorial/tutorial-git-dasar-cara-menggunakan-git/)
    - Petani Kode: [https://www.petanikode.com/tutorial/git/](https://www.petanikode.com/tutorial/git/)
- Git Reset vs Checkout vs Revert:
    - Greengeeks: [https://www.greengeeks.com/tutorials/article/the-difference-between-git-reset-git-checkout-and-git-revert/](https://www.greengeeks.com/tutorials/article/the-difference-between-git-reset-git-checkout-and-git-revert/)
    - Medium (by MindOrks): [https://medium.com/mindorks/use-of-git-reset-git-revert-git-checkout-squash-commit-2b721ca2d2d3](https://medium.com/mindorks/use-of-git-reset-git-revert-git-checkout-squash-commit-2b721ca2d2d3)
    - DEV.to (Nesha Zoric): [https://dev.to/neshaz/when-to-use-git-reset-git-revert--git-checkout-18je](https://dev.to/neshaz/when-to-use-git-reset-git-revert--git-checkout-18je)
    - Atlassian BitBucker: [https://www.atlassian.com/git/tutorials/resetting-checking-out-and-reverting](https://www.atlassian.com/git/tutorials/resetting-checking-out-and-reverting)
- Git Tricks - devhints.io: [https://devhints.io/git-tricks](https://devhints.io/git-tricks)
- Git Log - devhints.io: [https://devhints.io/git-log](https://devhints.io/git-log)

**CATATAN**: Link-link tersebut dapat berubah sewaktu-waktu!

### Referensi Bacaan

Anda juga bisa baca buku referensi git yang dapat memperkaya ilmu anda mengenai git melalui buku-buku berikut:

- Scott Chacon and Ben Straub. Pro Git, 2nd Edition. Apress, 2014. Licensed under the Creative Commons Attribution Non Commercial Share Alike 3.0 license.
  - Link: [https://git-scm.com/book/en/v2](https://git-scm.com/book/en/v2) (Tersedia dalam [Bahasa Indonesia](https://git-scm.com/book/id/v2))
- Alex Xandra Albert Sim. Kontrol Versi dengan Git. 2013. Leanpub.


## Disclaimer

Post & tutorial sakti ini merupakan **representasi singkat dari tutorial git** yang dibuat untuk membuat anda dapat memahami `git` dengan mudah dan cepat dibanding membaca sebagian kecil/besar dokumentasi dari aplikasi git maupun dari GitHub, BitBucket, dan lain-lain.

Mohon dicatat bahwa **tidak semua syntax dilampirkan** dalam tutorial sakti ini, sehingga anda harus baca sendiri penjelasan lanjutan dari masing-masing fitur di dokumentasi-dokumentasi yang ada dalam aplikasi git maupun melalui googling.

Terakhir, post ini **dapat direvisi & diubah isi/penjelasan** jika ada kesalahan, koreksi, maupun hal-hal yang tidak disebutkan dalam tutorial ini.

Terima kasih telah membaca tutorial ini, have a nice day :wink:
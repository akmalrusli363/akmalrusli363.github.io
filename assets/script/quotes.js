var dom_quote = document.getElementById('error-quotes');

var dom_bg = document.getElementsByClassName('full');

function backgroundGacha() {
  var gacha = Math.floor(Math.random() * 7) + 1;
  let url = '/assets/bg-green-' + gacha + ".jpg"

  for (var i = 0; i < dom_bg.length; i++) {
    dom_bg[i].style.backgroundImage = 'url(' + url + ')';
  }
}

function addPageImpostor(array) {
  let length = array.length;
  array[length] = window.location.href.split('/').pop() + " was not An Impostor!"
  array[length + 1] = window.location.href.split('/').pop() + " was The Impostor!"
  array[length + 2] = window.location.href.split('/').pop() + " was ejected!"
  return array
}

function getQuote(quote) {
  dom_quote.innerHTML = quote[Math.floor(Math.random() * quote.length)];
}

var arr = [
  "Sini Sasuke hantam kau!",
  "Sini Sasuke hantam kau bersama kawanan Uchiha!",
  "Naruto, ini kan kampus SUNIB bukan sekolah Hokage!",
  "Leh.. lagi cari situs judi? Tanyakan aja sama bang Judi..",
  "Ini bukan sabung ayam!",
  "Computer Science is a program study to make yours <strong>better to code</strong>, not married with code!",
  "Bukan anak Software Enjineering",
  "TURUN SALJU - TURUN ip karena SALah JUrusan",
  "Nyari downloadan materi? Kami gak ada file :((",
  "Nyari kode nuklir? Situs ini gak punya nomor berapapun :D",
  "CARI KE BINUSMAYA SONO!!!",
  "Hey anak telyu, sono cari waifu nak!",
  "Welcome to the WORLD CLASS UNIVERSITY",
  "Iya bu?",
  "Aku bukan dosen, mas Naufal :D",
  "Mohon bersabar, ini ujian",
  "Gak ada konten gaming! Cari aja di YouTube..!",
  "Eh.. mampus..! :((",
  "Press <strong>F</strong> to pay respect..",
  ":(",
  "All you had to do was follow the pricky train, CJ!",
  "All you had to do was follow the dank train, CJ!",
  "Nyari siapa?",
  "Mau kemana?",
  "small pp",
  "\"sini saya bungkus\" -- gilang.exe",
  "lalu?",
  "Sini aku peluk",
  "<img src=\"/assets/resources/404/coffin-dance.gif\" alt=\"coffin dance\" width=\"auto\" height=\"100\" />",
  "UUS berkata: ...?",
  "Ikan hiu makan tomat, coba tekan back button biar gak tersesat",
  "Dear tempe, andai kau tahu..?",
  "OTW dulu ya.. tapi boong!",
  "Ya Tuhan.. Ada apaan ya?",
  "kocheng was not An Impostor!",
  "kocheng was The Impostor!",
  "kocheng was ejected!",
  "ayam was not An Impostor!",
  "ayam was The Impostor!",
  "ayam was ejected!",
  "This page was not An Impostor!",
  "This page was The Impostor!",
  "This site was ejected!",
  "There are <strong>lot of Impostors</strong> among us",
  "There are <strong>lot of 404s</strong> among this site",
  "There are <strong>only few of</strong> correct pages among this site",
  "There is <strong>1 true button</strong> to return to home site...",
  "Siapa yang cita-citanya mau disesatin seumur hidup?",
  "Siapa di sini yang cita-citanya pengen dirasukin alam akhirat?",
  "Siapa di sini yang cita-citanya pengen cumlaude tapi semester awal udah SP?",
  "Siapa yang cita-citanya menjadi bocil?",
  "Tetap berada di jalan yang benar",
  "pERGI m3nJ@di 4LliAn$1 aN4k-An4k IT slur...",
  "Siapa yang cita-citanya pengen menjadi anak IT, jadi anak magang tapi gagal dan cuti kuliah sampai di-DO dari kampus?",
  "Ayamku bukanlah ayam-mu!",
  "Jika kamu <strong>tidak kenal</strong> ***, maka hidup anda terselamatkan",
  "Disesatin BOCIL KEMATIAN!",
  "Mantap kuliah onlinenya pak!!<br><img src=\"/assets/resources/404/cat-thumbs-up.jpg\" alt=\"mantap\" width=\"auto\" height=\"100\" />",
  "Mantap kuliah onlinenya pak!!",
  "Bukan situs haram",
  "No Easter Eggs!",
  "missingno",
  "MissingNo.",
  "???",
  "Aku anak ITB kok 🙂",
  "Aku bukan pak tani, gak ada downloadan sama sekali 😭",
  "Tenang, situs ini tidak mengandung konten bajakan 😀",
  "100% mendidik!",
  "Situs ini bukan untuk cari konten tidak berakhlak 😒",
  "Bukan IndoXX1 apalagi LayarKaca21 [insert clickbait here...]",
  "Dasar anak gagal cumlaude :((",
  "Welcome to the JURANG SP (semester pendek)!",
  "Yaah.. gak ada kunci jawaban wkwk",
  "Dalam hitungan ke-3, anda akan di-DO!",
  "You're banned from visiting this page 🙃",
  "IRIt bilangnya bos 😂",
  "Hidup adalah gacha",
  "YAHAHA KALAH RATE OFF :((",
  "Lah ngapain ke sini??",
  "Family Friendly",
  "Dasar HP Kentang :((",
  "Nani??",
  "Ya, lemot bung :(",
  "Tenang, internet kamu aman kok 🙃",
  "Makanya kerjain projectnya biar gak corrupt!!",
  "offline",
  "[insert chrome://dino game here...]",
  "aowkokwokokwokwkwk",
  "Sobat, sebagai langkah awal silahkan restart modem nya terlebih dahulu selama 10 menit lalu dicoba koneksikan kembali.",
  "Maaf anda kurang beruntung",
  "Maaf anda belum beruntung",
  "Nampaknya anda kurang beruntung",
  "COBA LAGI",
  "Coba lagi",
  "ZONK!",
  "time out",
  "lemot",
  "Please try again",
  "miskin",
  "misqueen",
  "eh, lk21 kena block ya?",
  "mana onlifan?",
  "kenapa?",
  "Yo, mabar!",
  "-__-",
  "x__x",
  "Hogwarts is coming!",
  "<img src=\"/assets/resources/404/bonk.jpg\" alt=\"BONK!\" width=\"auto\" height=\"100\" />",
  "Strong shiba: haha, mau kemana kau?<br>Cheems imnu: 404",
  "BONK! Go to horny jail!<br><img src=\"/assets/resources/404/bonk.jpg\" alt=\"BONK! Go to horny jail!\" width=\"auto\" height=\"100\" />",
  "Welcome to..",
  "Well boys, we did it. " + window.location.href.split('/').pop() + " is no more!",
  "Kemarilah, juragan!",
  "YNTKTS",
  "KKTBSYS",
  "Keju joget intensifies...<br><img src=\"/assets/resources/404/dancing-triangle.gif\" alt=\"Dancing triangle\" width=\"auto\" height=\"100\" />",
  "Google: Am I a joke to you?",
  "Download lagu DJ tiktok viral <a href='https://youtu.be/ub82Xb1C8os'>di sini</a>",
  "<img src=\"/assets/resources/404/rickroll-icegif-1.gif\" alt=\"gimme a roll!\" width=\"auto\" height=\"100\" />",
  "Never gonna...",
  "never gonna give you up",
  "janji gak nangis?",
  "janji gak php?",
  "nyimak",
  "🥶🥶🥶",
  "🗿",
  "🗿🗿🗿",
  "Stay HALAL",
  "Jangan lupa F5",
  "Jangan lupa reload",
  "UNO REVERSE!",
  "Back to previous page or draw 25",
  "DUARRR!!!!",
  "DUARRR!!!!<br/><img src=\"/assets/resources/404/duarrrrr.jpg\" alt=\"Duarr barbieku sayang!\" width=\"auto\" height=\"100\" />",
  "Yang mulia...",
  "Saya aslinya 3 orang, yang 2 kabur",
  "BONUS MAXWIN 3 MILIAR",
  "GACOR KANG!",
  "Kurang gacor :((",
  "Bangkrut gaes",
  "Rungkad",
  "Dino ajur",
  "Eh buset..",
  "Ini situasi bjir apa anjrit?",
  "Korban judi online",
  "Download aplikasi pinjol dan dapatkan limit pinjaman hingga 100 juta (lembar daun)",
  "Pinjol terus!!",
  "Lah situs judi toh?",
  "Papa, situs ini ada slot maxwin kah?",
  "Yahahaha kagak ketemu hayuk!",
  "Yahahaha, kena blokir Kominfo!",
  "Hubungi admin jika kalian menemukan link/web judi online, kami gak bertanggungjawab atas keberadaan situs judi online di blog orang",
  "PROMO SLOT BONUS MAXWIN UP TO 10 JUTA!<br><i>Catatan: kami gak tanggungjawab atas tindakan judi online kalian ya</i>",
  "BONUS DEPOSIT 200% DIJAMIN GACOR",
  "Shikanoko Nokonoko Koshitantan<br><img src=\"https://i.kym-cdn.com/photos/images/newsfeed/002/828/461/7db.gif\" alt=\"Shikanoko Nokonoko Koshitantan\" width=\"auto\" height=\"100\" />",
  "Makanya langganan Netflix!",
  "MENYALAA ABANGKUHH 🔥🔥🔥",
  "MENYALA ABANGKU!!! 🔥🔥🔥",
  "MENYALA ABANGKU!!!",
  "MENYALA! 🔥🔥🔥",
  "🔥🔥🔥",
  "<img src=\"/assets/resources/404/menyala-abangkuh.jpg\" alt=\"MENYALAA ABANGKUHH!\" width=\"auto\" height=\"100\" /><br>🔥🔥🔥",
  "YAHAHAHA 🤣",
  "AWOKWOKWOK",
  "WKWKWK",
  "Absen 😅☝",
  "bodo amat",
  "mama aku takut :((",
  "mamah aku takut 😭",
  "mom come pick me up<br>I'm scared",
  "Bilangin sama yang nulis blog ini, makasih udah sediain easter egg buat kita :v",
  "Back to previous page or draw 25<br><img src=\"/assets/resources/404/draw-25-easter-egg.jpg\" alt=\"Back to previous page or draw 25\" width=\"auto\" height=\"100\" />",
];

backgroundGacha();
getQuote(addPageImpostor(arr));
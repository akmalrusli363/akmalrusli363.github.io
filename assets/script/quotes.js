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
  "Nyari kajew?",
  "small pp",
  "\"sini saya bungkus\" -- gilang.exe",
  "lalu?",
  "Sini aku peluk",
  "<img src=\"/assets/resources/coffin-dance.gif\" alt=\"coffin dance\" width=\"auto\" height=\"100\" />",
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
  "Disesatin DOSEN Maut!",
  "D IS ESA TI N  AN AK  Ma ut SoCS!",
  "DISE S AT IN  A NAK  il mu kom uni  kasi!",
  "Mantap kuliah onlinenya pak!!<br><img src=\"/assets/resources/cat-thumbs-up.jpg\" alt=\"mantap\" width=\"auto\" height=\"100\" />",
  "Bukan situs haram",
  "No Easter Eggs!",
  "missingno",
  "MissingNo.",
  "???",
];

backgroundGacha();
getQuote(addPageImpostor(arr));
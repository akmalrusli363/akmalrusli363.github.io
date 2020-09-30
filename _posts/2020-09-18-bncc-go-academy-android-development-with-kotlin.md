---
layout: post
title: "BNCC x Go-Academy 2020: Introduce & Dive into Kotlin in Android Development"
excerpt_separator: "<!--more-->"
---

![Android ♥ Kotlin (Sumber istimewa)](/assets/resources/go-academy/android-kotlin.png#center "Android ♥ Kotlin (Sumber istimewa)")
*Android ♥ Kotlin (Sumber istimewa)*

Hai wahai para pembaca blog! Hari ini aku kembali menuliskan blog ini untuk kegiatan saya selama liburan semester pendekku. Sebelumnya saat ini saya sedang menempuh semester 5 (pada post ini diterbitkan) yang sayangnya harus menjalankan perkuliahan secara daring dari rumah karena (sudah pasti) pandemi COVID-19.

![BNCC x Go-Academy](/assets/resources/go-academy/go-academy.png#center "BNCC x Go-Academy")

> Sedikit bocoran buat anda yang penasaran & ingin mencerna sebaik mungkin dengan bacaan favorit kalian lainnya di Medium, ayo simak story yang telah saya buat bersamaan pada pertemuan ke-6 BNCC x Go-Academy di [sini](https://medium.com/@akmalrusli363/bncc-x-go-academy-2020-introduce-dive-into-kotlin-in-android-development-69d73391d13e "Hati-hati: story ini mengandung spoiler bersponsor!")!

Pada tahun 2020, BNCC kembali mengadakan BNCC Academy Bootcamp bersama Go-Academy dimana pada tahun ini, BNCC Academy mengangkat tema "Android Development with Kotlin" dimana pada pengembangan aplikasi Android pada saat ini mayoritas sudah beralih ke bahasa pemrograman Kotlin. Pada tahun ini, seluruh kegiatannya diadakan secara daring karena adanya pandemi COVID-19 dan PSBB DKI yang tentunya menghambat upaya pembelajaran on-site _(di tempat)_.

<!--more-->

## Mengenal Kotlin

![Kotlin Programming Language](/assets/resources/go-academy/kotlin-programming-language.png#center "Kotlin Programming Language")
*Kotlin Programming Language*

Buat yang belum familiar dengan Kotlin, Kotlin sendiri adalah bahasa pemrograman yang berbasiskan bahasa pemrograman Java & dikembangkan oleh JetBrains dimana dapat dijalankan pada sistem JVM (Java Virtual Machine) dan dapat inter-operable dengan code Java sehingga mudah untuk diaplikasikan meski dengan campur aduk dengan code Java Anda.

Kotlin sendiri juga bisa anda aplikasikan dalam project anda tidak hanya melalui Android Studio, namun juga pada setiap IDE yang berbasiskan IntelliJ IDEA yang support Kotlin dan juga pada IDE kesayangan anda melalui plugin Kotlin sesuai dengan marketplacenya masing-masing.

### Apa bedanya dengan Java?

Jawabannya hampir mirip namun ada beberapa hal yang tentunya bisa mempermudah kamu dalam mengembangkan software yaitu:

1. Tanpa titik koma (;) pada setiap akhir statement
2. [Null safety](https://kotlinlang.org/docs/reference/null-safety.html) (Safety call [?.], [?] for nullable, dan [!!.] for non-null assertion)
3. Penggunaan `var` dan `val` sebagai variabel bebas (tanpa harus mendefinisikan object class)
4. [Smart casts](https://kotlinlang.org/docs/reference/typecasts.html) (menggunakan `as` sebagai cast)
5. [Static members](https://kotlinlang.org/docs/reference/classes.html) digantikan dengan companion objects, top-level functions, extension functions
6. [Extension functions](https://kotlinlang.org/docs/reference/extensions.html) (penerusan function dari class objects)
7. Dan lain sebagainya.. ([simak di sini](https://kotlinlang.org/docs/reference/comparison-to-java.html))

**Contoh Syntax Kotlin paling dasar:**

```kotlin
fun hitungDuaAngka(angka1: Int, angka2: Int): Int {
  return angka1 + angka2
}
// atau dipersingkat menjadi:
fun hitungDuaAngka(angka1: Int, angka2: Int): Int = angka1 + angka2
```

Jika anda ingin mencoba bereksperimen dengan code-code Kotlin, bisa kalian akses melalui Kotlin Koans di [sini](https://play.kotlinlang.org/koans/overview).

Atau jika anda ingin bersenang-senang melakukan coding Kotlin sesuka hati dimana saja melalui Kotlin Playground di [sini](https://play.kotlinlang.org/koans/overview).

## The Activity Lifecycle

![Android Activity Lifecycle](/assets/resources/go-academy/app-activity-lifecycle.png#center "Android Activity Lifecycle")
*Android Activity Lifecycle*

> Android Activity Lifecycle

Dalam aplikasi Android, terdapat lifecycle yang berperan penting dalam berjalannya sebuah Activity. Activity juga tentunya mempunyai koneksi ke activity lain melalui Intent. Apa bedanya Activity dan Intent?

**Activity** sendiri merujuk pada laman yang kita rancang & tampilkan pada layar smartphone sedangkan Intent merupakan fasilitas yang diinginkan oleh Activity (baik berpindah laman/Activity maupun menerima panggilan dari aplikasi lain).

**Intent** berfungsi dalam perpindahan Activity juga untuk menerima panggilan dari aplikasi lain (misalnya share, bayar pakai QR Code, upload file) dan Launcher.

Dalam project yang saya buat, saya sertakan salah satu demo code yang dapat kalian akses melalui repository saya [di sini](https://github.com/akmalrusli363/BNCC-Academy-Kotlin-Demo/blob/master/app/src/main/java/com/tilikki/bnccapp/demo/MainActivity.kt)

{% gist 0daa729e4848c1413842540718df488e %}

Intent tentunya bisa bikin aplikasi anda bisa diakses oleh aplikasi lain dan memungkinkan anda untuk mempunyai 2 launcher untuk activity berbeda lho! Caranya? Tentu dengan `intent-filter`, anda dapat menerima panggilan intent apapun bahkan termasuk juga dari launcher dan panggilan dari aplikasi lainnya.

{% gist 3ffe211ab89268bdb4ecdeaa31cdb812 %}

Tanpa adanya `intent-filter` sama sekali dalam `AndroidManifest.xml`, aplikasi tentunya tidak bisa dibuka karena tidak ada intent yang menerima akses tersebut sama sekali.

Untuk mengetahui informasi lebih lanjut mengenai Intent & Intent Filter dapat dilihat di [Android UI Guides - Intents & Intent Filters](https://developer.android.com/guide/components/intents-filters?hl=en "Android UI Guides - Intents & Intent Filters") di bawah:

<!-- Generated linkpreview for https://developer.android.com/guide/components/intents-filters?hl=en -->
<div class="jekyll-linkpreview-wrapper">
  <div class="jekyll-linkpreview-content">
    <div class="jekyll-linkpreview-image">
      <a href="https://developer.android.com/guide/components/intents-filters?hl=en" target="_blank">
        <img src="https://developer.android.com/images/social/android-developers.png">
      </a>
    </div>
    <div class="jekyll-linkpreview-body">
      <h2 class="jekyll-linkpreview-title">
        <a href="https://developer.android.com/guide/components/intents-filters?hl=en" target="_blank">Intents and Intent Filters  |  Android Developers</a>
      </h2>
      <div class="jekyll-linkpreview-description">An Intent is a messaging object you can use to request an action from another app component . Although intents facilitate communication between components in several ways, there are three fundamental use cases: An Activity represents a single screen in…</div>
    </div>
    <div class="jekyll-linkpreview-footer">
      <a href="developer.android.com" target="_blank">developer.android.com</a>
    </div>
  </div>
</div>

---

## A view for your data: RecyclerView

> Bagi developer barbar, menampilkan data perlu berulangkali copy-paste layout yang sama untuk menampilkan data yang berbeda-beda. HAH? kalo datanya sampai ribuan apa kagak mampus?

Ada sebuah View yang sangat sakti dalam menampilkan data-data baik data yang kita buat sendiri maupun data yang diambil dari sumber luar, yaitu **RecyclerView**!

**Mengapa RecyclerView**? Karena RecyclerView mempadukan satu elemen layout untuk kemudian dipakai berulang-ulang jika ada pemakaian elemen yang berulang-ulang, terutama jika ada perubahan data.

![Layers of RecyclerView](/assets/resources/go-academy/recycler-view.png "Layers of RecyclerView")
*Layers of RecyclerView*

Dalam ReyclerView terdapat 2 komponen penting, yaitu **`RecyclerView.Adapter`** dan **`RecyclerView.ViewHolder`** dimana:
- **RecyclerView.Adapter** berfungsi untuk menampung data-data yang anda inginkan ke dalam layout tersebut _(data pools)_.
- **RecyclerView.ViewHolder** untuk melakukan bind data-data dalam Adapter ke RecyclerView itu sendiri _(binder)_.

Tentunya View tersebut sangat amat berguna jika anda menginginkan data yang banyak & berseri untuk ditampilkan dalam View tersebut.

Ingin mengetahui lebih lanjut tentang RecyclerView? Simak lebih lanjut melalui [Android Developer UI Guides - RecyclerView](https://developer.android.com/guide/topics/ui/layout/recyclerview?hl=en) di bawah:

<!-- Generated linkpreview for https://developer.android.com/guide/topics/ui/layout/recyclerview?hl=en -->
<div class="jekyll-linkpreview-wrapper">
  <div class="jekyll-linkpreview-content">
    <div class="jekyll-linkpreview-image">
      <a href="https://developer.android.com/guide/topics/ui/layout/recyclerview?hl=en" target="_blank">
        <img src="https://developer.android.com/images/social/android-developers.png">
      </a>
    </div>
    <div class="jekyll-linkpreview-body">
      <h2 class="jekyll-linkpreview-title">
        <a href="https://developer.android.com/guide/topics/ui/layout/recyclerview?hl=en" target="_blank">Create a List with RecyclerView  |  Android Developers</a>
      </h2>
      <div class="jekyll-linkpreview-description">Using RecyclerView to display lists and grids of dynamic content.</div>
    </div>
    <div class="jekyll-linkpreview-footer">
      <a href="developer.android.com" target="_blank">developer.android.com</a>
    </div>
  </div>
</div>

---

## Hit your data with OkHttp!

![Click website vector](/assets/resources/go-academy/click-website-api.jpg#center "Click website vector")
*Click website vector created by rawpixel.com - www.freepik.com [[Source]](https://www.freepik.com/vectors/background)*

Untuk project yang saya buat, saya menggunakan [**okHttp**](https://square.github.io/okhttp/) sebagai library dalam menjalankan hit API untuk mendapatkan data yang saya butuhkan. Ada berbagai pilihan alternatif lain seperti [**retrofit**](https://square.github.io/retrofit/) untuk mendapatkan API dengan bantuan GSON/library JSON lainnya.

Untuk memasukkan library tersebut (baik `okHttp` maupun `retrofit`), library tersebut wajib dimasukkan ke dalam `build.gradle` dan lakukan "sync project" agar library dapat tersinkronisasi dengan project tersebut.

```gradle
dependencies {
    ...
    // for image insertion, use Picasso library
    implementation 'com.squareup.picasso:picasso:2.71828'

    // Use okHttp library
    implementation "com.squareup.okhttp3:okhttp:4.8.1"

    // or if you using retrofit library
    implementation 'com.squareup.retrofit2:retrofit:2.8.0'
}
```

Dalam Hit API menggunakan okHttp, terdapat 2 function penting yaitu `fetchData(lookupAdapter: LookupAdapter)` dan `getCallback(lookupAdapter: LookupAdapter): Callback` dimana kedua function tersebut tidak ada dalam library & tidak harus didefinisikan, namun masing-masing mempunyai peranan masing-masing.

Function `fetchData` akan memanggil request sesuai dengan URL API yang diinginkan oleh pengguna lalu melakukan `enqueue` untuk mendapatkan data-data dari API dengan memanggil function `getCallback` di dalamnya.

```kotlin
val lookupDataApiURL = "https://api.kawalcorona.com/indonesia/provinsi/"
```
```kotlin
val request: Request = Request.Builder().url(lookupDataApiURL).build()

okHttpClient.newCall(request) .enqueue(getCallback(lookupAdapter))
```

Dalam function `getCallback` yang terpanggil oleh `okHttpClient`, data akan diambil sebagai JSON (JavaScript Object Notation) untuk kemudian diubah sebagai array oleh `JSONArray` untuk kemudian kita olah sendiri datanya menjadi data-class object.

{% gist a6f08c3df8b43ad669fa8754f0caef10 %}

Barangkali code seperti ini terlihat cukup panjang bagi sebagian developer sehingga terkadang dalam kasus tertentu, developer merasa perlu ada beberapa bagian code yang harus diubah dengan alasan yang berbeda *(why? Jawabannya ada di smell [Divergent Change (Martin Fowler)](https://akmalrusli363.github.io/smell/Fowler/Change-Preventers#divergent-change))* sehingga perlu diubah dengan menerapkan building block salah satunya adalah **MVP (Model-View-Presenter)**.

---

## Architectural Takeaway: Model-View-Presenter Building Block

> _"Poorly designed code usually takes more code to do the same things, often because the code quite literally does the same thing in several places."_
**― Martin Fowler**

Pada bagian code diatas, barangkali cukup memusingkan apalagi disertai dengan alasan efisiensi waktu, code tersebut diselesaikan dengan teknik 'hajar' bagian code tanpa peduli building block apa yang mau diterapkan pada _data fetching from API_ tersebut.

![Domain conceptual levels at stance](/assets/resources/go-academy/conceptual-domain-level.png#center "Domain conceptual levels at stance")
*Domain conceptual levels at stance [[Source](https://archfirst.org/domain-driven-design-6-layered-architecture/)]*

Dalam Software Engineering, diperkenalkan Design Pattern, Domain Design, dan Building Block dimana ketiga elemen tersebut dapat membantu para developer menciptakan software dengan rapi, jelas, dan mudah dipahami oleh pengguna maupun developer lain.

Pada dasar dalam penerapan Domain Design, Aplikasi terbagikan dalam 6 Level yaitu:

- View
- Controller
- Handler
- Repository
- Factory
- Model

Atau jika dipersingkat dan disederhanakan:

- **View** _(the user interface)_
- **Controller** _(connector between View and Model)_
- **Repository** _(user-defined data storage)_
- **Model** _(the data fetched from database/online sources)_

Terdapat beberapa building block untuk mempermudah integrasi aplikasi antara View, Controller, dan Repository yaitu melalui:

- **_MVC_ (Model-View-Controller)**
- **_MVP_ (Model-View-Presenter)**
- **_MVVM_ (Model-View-ViewModel)**

![MVC vs MVP, the two of most common building block in Android Architecture](/assets/resources/go-academy/mvc-vs-mvp.png#center "MVC vs MVP, the two of most common building block in Android Architecture")
*MVC vs MVP, the two of most common building block in Android Architecture*

Pada project yang saya kerjakan, saya menerapkan model arsitektur MVP _(Model-View-Presenter)_ yang diajarkan oleh **Raditya Gumay** dan **Egi Adtya** dalam kegiatan BNCC Academy hari ke-5.

Untuk menyederhanakan permodelan tersebut, terdapat 4 langkah dalam pemisahan layer dalam sebuah activity, yaitu:

1. Buatkan 2 class, representatif untuk pisahin layer View dari business logic & data processing logic (Presenter & Model).
2. Definisikan 3 interface representasi MVP building block yaitu, **Presenter** dengan parameter Model dan View, **Model** dengan parameter Callback, serta **View** untuk diimplementasikan pada masing-masing representasi layernya.
3. Pisahkan `fetchData` ke Model class _(anggap nama barunya `getData` dengan return value berupa `Callback`)_ & `getCallback` ke Presenter class.
4. Pastikan dalam View/Activity telah mengimplementasikan building block View agar mudah dipanggil oleh class lain.

Maka hasilnya akan semakin mempermudah anda dalam memahami isi code tersebut lebih mudah dengan penerapan building block!

{% gist 88029e8534abeca5c030ad4389db7633 %}

Kepanjangan? Terlalu ribet dengan panjangnya code yang aku buat? Atau penasaran ingin mencoba mengaplikasikan building block ke project aplikasi Android-mu dengan inovasi anda masing-masing? Ketiga bagian code tersebut merupakan contoh penerapan MVP dan `okHttp` yang diaplikasikan dalam Project Siaga COVID-19 yang dikerjakan secara personal dan perkelompokan selama BNCC x GoAcademy berlangsung.

Sebagai referensi, saya juga menyertakan building block agar teman-teman dapat mengimplementasikan building block ini dengan mudah dan cepat dalam penerapan MPV architecture.

{% gist d99b2452b6f10fc9d757f328eeb8c814 %}

---

## What's next in Kotlin Development?

Dalam development aplikasi Android berbasis Kotlin, sudah banyak developer yang memanfaatkan Kotlin sebagai preferred programming language-nya salah satunya Gojek, DANA, hingga Google dengan masing-masing inovasi yang super duper inovatif.

![Kotlin development in Gojek](/assets/resources/go-academy/gojek-kotlin-development.jpeg "Kotlin development in Gojek")
*Kotlin development in Gojek (visit Gojek blog at [https://blog.gojekengineering.com/tagged/kotlin](https://blog.gojekengineering.com/tagged/kotlin))*

Dalam beberapa produk Google, terdapat aplikasi yang memanfaatkan RecyclerView ini dengan tingkat kompleksitas yang cukup tinggi. Bahkan dalam RecyclerView terdapat informasi-informasi yang padat dan beragam mengenai aktivitas yang ingin anda ikuti tentunya.

![Google Calendar in Android](/assets/resources/go-academy/google-calendar-preview.png "Google Calendar in Android")
*Google Calendar in Android [Source: [Nokia Power User](https://nokiapoweruser.com/google-calendar-for-android-updated-with-copy-event-and-notify-guest-feature/)]*

Dan buat anda yang ingin belajar lebih lanjut mengenai API dalam pemrograman Android, silahkan disimak pada link di bawah:

- OkHttp: [https://square.github.io/okhttp/](https://square.github.io/okhttp/)
- Tutorial OkHttp: [https://www.journaldev.com/13629/okhttp-android-example-tutorial](https://www.journaldev.com/13629/okhttp-android-example-tutorial)
- Retrofit: [https://square.github.io/retrofit/](https://square.github.io/retrofit/)
- Tutorial Retrofit: [https://www.journaldev.com/13639/retrofit-android-example-tutorial](https://www.journaldev.com/13639/retrofit-android-example-tutorial)

Satu lagi, saya juga sertakan link repository yang tentunya sangat disayangkan jika anda tidak mencoba Aplikasi hasil eksperimen saya sendiri dengan Project COVID-19 Data selama BNCC x Go-Academy berlangsung di bawah:

<!-- Generated linkpreview for https://github.com/akmalrusli363/BNCC-Academy-Kotlin-Demo -->
<div class="jekyll-linkpreview-wrapper">
  <div class="jekyll-linkpreview-content">
    <div class="jekyll-linkpreview-image">
      <a href="https://github.com/akmalrusli363/BNCC-Academy-Kotlin-Demo" target="_blank">
        <img src="https://avatars0.githubusercontent.com/u/43511875?s=400&amp;v=4">
      </a>
    </div>
    <div class="jekyll-linkpreview-body">
      <h2 class="jekyll-linkpreview-title">
        <a href="https://github.com/akmalrusli363/BNCC-Academy-Kotlin-Demo" target="_blank">akmalrusli363/BNCC-Academy-Kotlin-Demo</a>
      </h2>
      <div class="jekyll-linkpreview-description">A repository for an app made during BNCC x Gojek Academy demonstrated using Kotlin, which shows data about COVID19 statistics in Indonesia - akmalrusli363/BNCC-Academy-Kotlin-Demo</div>
    </div>
    <div class="jekyll-linkpreview-footer">
      <a href="github.com" target="_blank">github.com</a>
    </div>
  </div>
</div>

Sekian post saya mengenai kegiatan saya di BNCC x Go-Academy, semoga bermanfaat bagi kita semua & sampai ketemu di post selanjutnya :smiley:

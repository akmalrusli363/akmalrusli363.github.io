---
title: "Unimage Photo Viewer"
category: Android App, Internship Project
date: 2021-06-16
---

Github repos: [akmalrusli363/Unimage-Photo-Viewer](https://github.com/akmalrusli363/Unimage-Photo-Viewer)

![App logo](assets/resources/unimage-app-logo.png#center)

**Unimage Photo Viewer** is a personal project which provides photos from **Unsplash** using Unsplash API ([The documentation](https://unsplash.com/documentation)). The Unsplash API itself have many common API endpoints such as:

- Search image
- Show user profile
- List user photos
- Get a photo
- Get a photo's statistics
- Get random photos
- Search for user
- Search for collections
- and many more...

To be noted, the Unsplash API uses _**OAuth 2.0 Authentication** (Bearer)_ where the user can obtain the **OAuth's access token** by taking the app's **Access Key**, **Secret Key**, and **Redirect URI** from Unsplash Developer App's page. You also need to be registered on Unsplash to create your application first before proceeding OAuth access authentication on your HTTP Client.

### Features

This application has 3 activities: photo search, photo detail, and user's profile. Each activities has it's own **ViewModel** and access to libraries using **Dagger**'s dependency injection.

For main Unsplash API URL, the link of [`https://api.unsplash.com`](https://api.unsplash.com/) is the main API's URL that refers to each endpoint. Please refer to [the documentation](https://unsplash.com/documentation) for detailed documentation.


#### Photo Search (MainActivity)

API URL Endpoint: `https://api.unsplash.com/search/photos`

API Parameters:

- `query`: Query to search
- `page`: Page number to display
- `per_page`: Number of items to display for a page

This activity consists of a `SearchView` and a `RecyclerView` which displays photo grid using `StaggeredGridLayoutManager` which display photos according to their dimension and orientation. Basically, each photo represents photo's URL (thumbnail) which loaded using **Picasso** through `Picasso.get().load(imageUrl).into(imageView)`.

When the app launches, the activity shows only search bar and a blank view where it displays search photo result based on your search query.


#### Photo Detail (PhotoDetailActivity)

API URL Endpoint: `https://api.unsplash.com/photos/{photoId}`

API Parameters:

- `{photoId}` : The photo ID

This activity consists of a photo picture, like count, view in browser button, full view, user profile, and descriptions in general.

While user access the profile of the photo owner, they'll redirected to Profile Activity which displays user's bio data and photo collections. Also, the user can download the photo through *download icon* which redirects user to show full size of photo, or view more information or related images through *"view in web"* button.

Because this activity only provides basic information of the photo, user need to be access on browser using *"view in web"* button to choose photo size to download, like, share, or view EXIF information of that photo.

##### EXIF

The feature was added in new version of Unimage App which displays EXIF information (eg. camera brand/model, focal length, exposure time, aperture, ISO) for the photo. This field is hidden if no fields were present for that photo.


#### Profile (ProfileActivity)

API URL Endpoint: `https://api.unsplash.com/users/{userName}`

API Parameters:

- `{userName}` : Username to search

The profile activity consists of user bio data consists of username, full name, and user statistics. Also, this activity provides user photos through secondary link `/photos` which provides set of images through `RecyclerView` photo grid using `StaggeredGridLayoutManager` (display photo grid according to their dimension and orientation).

Same as photo search activity, user can access their photo which redirects to photo detail. Even with same user, the activity shown through user photo are redirects back to user profile if the owner of the photo are equal to previous photos.


### Scenario: Offline

> For additional information how the offline image caching works, see repository's [README.md](https://github.com/akmalrusli363/Unimage-Photo-Viewer/) for more details.

While offline, if user have already searched for photos using a query, the photos will stored into database though **Room** which stored on 3 different tables:

![Unimage Entity Relationship Diagram](https://raw.githubusercontent.com/akmalrusli363/Unimage-Photo-Viewer/main/img/erd-unimage.png)

Not all images are shown because the image fetched separately by image loader, **Picasso**, which has it's own caching system to store cached image and fetched the cached images while offline as possible.


### Libraries

#### Essentials

- Kotlin & AndroidX Core
- AppCompat (`androidx.appcompat:appcompat`)
- Google Material Design (`com.google.android.material:material`)

#### AndroidX

- AndroidX Preferences (`androidx.preference:preference-ktx`)
- AndroidX Multidex (`androidx.multidex:multidex`)
- AndroidX Room (`androidx.room`)
  - Room Runtime
  - Room RxJava2 Adapter

#### Testing Libraries

- AndroidX Test (`androidx.test`)
- Android Architecture Test (`androidx.arch.core:core-testing`)
- Android Fragment Test (`androidx.fragment:fragment-testing`)
- Espresso (`androidx.test.espresso`)
  - `espresso-core`
  - `espresso-contrib`
  - `espresso-intents`
- Mockito (`org.mockito`)
  - Mockito Core
  - Mockito Kotlin
  - Mockito Android

#### External Libraries

- Retrofit (`com.squareup.retrofit2`):
  - Retrofit
  - GSON Converter
  - Adapter RxJava2
- RxJava (`io.reactivex.rxjava2`):
  - RxJava
  - RxAndroid
- Picasso (`com.squareup.picasso:picasso`)
- Dagger (`com.google.dagger`):
  - Dagger Android
  - Dagger Android Processor (Annotator)
  - Dagger Compiler (Annotator)
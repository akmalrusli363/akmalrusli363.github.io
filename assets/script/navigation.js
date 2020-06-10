var nav = document.getElementById('nav');

if (window.pageYOffset == 0 && nav.classList.contains("blend")) {
  nav.classList.add("transparent");
}

window.onscroll = function () {
  if (window.pageYOffset == 0 && nav.classList.contains("blend")) {
    nav.classList.add("transparent");
  } else {
    nav.classList.remove("transparent");
  }
};

const scrolling = document.querySelector(".main-header");

window.addEventListener("scroll", function () {
  scrolling.classList.toggle("scrolling-active", window.scrollY > 80);
});

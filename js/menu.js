const scrolling = document.querySelector(".main-header");

window.addEventListener("scroll", function () {
  scrolling.classList.toggle("scrolling-active", window.scrollY > 80);
});

const btnMobileMenu = document.querySelector(".btn-mobile-nav");
const mobileIcons = document.querySelectorAll(".btn-mobile-nav__icon");
const mainMenu = document.querySelector(".menu");

btnMobileMenu.addEventListener("click", function () {
  mainMenu.classList.toggle("active");
  mobileIcons.forEach((item) => {
    item.classList.toggle("hidden");
  });
  btnMobileMenu.classList.toggle("btnn");
});

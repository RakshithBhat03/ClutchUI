const btnHamburger = document.querySelector(".btn-hamburger");
const mobileNav = document.querySelector(".nav-mobile");
const mobileNavClose = document.querySelector(".nav-mobile-close");
btnHamburger.addEventListener("click", () => {
  mobileNav.classList.add("nav-mobile-show");
});
mobileNavClose.addEventListener("click", () => {
  mobileNav.classList.remove("nav-mobile-show");
});

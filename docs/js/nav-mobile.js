const navigationHamburger = document.querySelector("#navigation__hamburger");
const navigationMobile = document.querySelector("#navigation__mobile");
const mobileMenuClose = document.querySelector("#mobile-menu-close");
navigationHamburger.addEventListener("click", () => {
  navigationMobile.classList.add("navigation__mobile-active");
});
mobileMenuClose.addEventListener("click", () => {
  navigationMobile.classList.remove("navigation__mobile-active");
});

const sidebar = document.querySelector(".main__sidebar");
const btnMenu = document.querySelector(".mobile-menu-btn");
const arrowIcon = document.querySelector(".arrow-icon");
let menuClose = true;
btnMenu.addEventListener("click", () => {
  if (menuClose) {
    sidebar.classList.add("menu-open");
    arrowIcon.style.transform = "rotate(90deg)";
    menuClose = false;
  } else {
    sidebar.classList.remove("menu-open");
    arrowIcon.style.transform = null;
    menuClose = true;
  }
});

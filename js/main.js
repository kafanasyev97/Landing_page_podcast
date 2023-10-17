const btn = document.querySelector(".header__btn");
const nav = document.querySelector(".header__container");

btn.addEventListener("click", () => {
  nav.classList.toggle("header__menu-open");
});

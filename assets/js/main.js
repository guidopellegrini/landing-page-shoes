/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* validamos si la constante existe */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* validamos si la constante existe */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // cuando hacemos click en nav__link, borramos la clase show-menu
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== SWIPER SHOE ===============*/
let swiperShoes = new Swiper(".home__swiper", {
  loop: true,
  spaceBetween: 32,
  grabCursor: true,
  effect: "creative",
  creativeEffect: {
    prev: {
      translate: [-100, 0, -500], // [translateX, translateY, translateZ]
      opacity: 0,
    },
    next: {
      translate: [100, 0, -500], // [translateX, translateY, translateZ]
      opacity: 0,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/*=============== SHADOW HEADER ===============*/
function shadowHeader() {
  const header = document.getElementById("header");
  // Cuando el scroll sea mayor que 50 viewport height, agregamos la clase shadow-header al tag header
  if (this.scrollY >= 50) header.classList.add("shadow-header");
  else header.classList.remove("shadow-header");
}
window.addEventListener("scroll", shadowHeader);

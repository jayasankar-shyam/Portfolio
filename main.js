const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}
let animate = new Typed("#anim", {
    strings: ["B.Tech Student", "Front End Developer"],
    typeSpeed: 100,
    backSpeed: 25,
    loop: true,
  });
  let animat = new Typed("#anim2", {
    strings: ["B.Tech Student", "Front End Developer"],
    typeSpeed: 100,
    backSpeed: 25,
    loop: true,
  });
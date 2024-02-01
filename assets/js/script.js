'use strict';



/**
 * navbar toggle
 */

const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");

navToggleBtn.addEventListener("click", function () {
  header.classList.toggle("nav-active");
  this.classList.toggle("active");
});

/**
 * toggle the navbar when click any navbar link
 */

const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    header.classList.toggle("nav-active");
    navToggleBtn.classList.toggle("active");
  });
}






/**
 * back to top & header
 */

const backTopBtn = document.querySelector("[data-back-to-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

var typed = new Typed(".typing", {
  strings: [
    "Shraddha Gawde",
    "A Node.js Backend Developer",
    "always eager to learn new things",
    "currently learning about AWS",
  ],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});
var typed = new Typed(".typi", {
  strings: ["Hi, I am Shraddha",
  "I am Node.js Backend Developer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});



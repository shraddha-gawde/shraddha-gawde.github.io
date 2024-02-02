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



// set timer
const elemTitle = document.querySelector('.elem-title');

    const targetNumber = 500;

    const duration = 10000; 

    const increment = Math.ceil(targetNumber / (duration / 100));

    let currentNumber = 0;

    function updateNumber() {
        elemTitle.textContent = currentNumber;
        if (currentNumber < targetNumber) {
            currentNumber += increment;
            requestAnimationFrame(updateNumber);
        }
    }

    window.addEventListener('load', () => {
        updateNumber();
    });

    const elemTitle2 = document.querySelector('.elem-2 .elem-title');

    // Set the target number
    const targetNumber2 = 1200; // Replace with your desired number

    // Set the duration of the animation in milliseconds
    const duration2 = 20000; // Adjust as needed

    // Calculate the increment value for each frame
    const increment2 = Math.ceil(targetNumber2 / (duration2 / 100));

    let currentNumber2 = 0;

    // Function to update the displayed number and schedule the next update
    function updateNumber2() {
        elemTitle2.textContent = currentNumber2;
        if (currentNumber2 < targetNumber2) {
            currentNumber2 += increment2;
            requestAnimationFrame(updateNumber2);
        }
    }

    // Start the animation when the page is loaded
    window.addEventListener('load', () => {
        updateNumber2();
    });



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
    "Shraddha Subhash Gawde",
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



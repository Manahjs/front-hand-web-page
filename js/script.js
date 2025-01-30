'use strict';



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

for (let i = 0; i < navToggler.length; i++) {
  navToggler[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    navbar.classList.remove("active");
    overlay.classList.remove("active");
  });
}





/**
 * header
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

// Automatically scroll the slider every 3 seconds
setInterval(() => {
  const slider = document.querySelector('.slider');
  slider.scrollBy({
      left: 200, // Adjust the scroll distance as needed
      behavior: 'smooth'
  });
}, 3000);














// const employees = [
//   { name: "John Doe", position: "Software Engineer", photo: "https://via.placeholder.com/250" },
//   { name: "Jane Smith", position: "Project Manager", photo: "https://via.placeholder.com/250" },
//   { name: "Alice Johnson", position: "UX Designer", photo: "https://via.placeholder.com/250" },
//   { name: "Bob Brown", position: "Data Analyst", photo: "https://via.placeholder.com/250" },
//   { name: "Charlie Davis", position: "DevOps Engineer", photo: "https://via.placeholder.com/250" },
//   { name: "Diana Prince", position: "Product Owner", photo: "https://via.placeholder.com/250" },
//   { name: "Ethan Hunt", position: "QA Engineer", photo: "https://via.placeholder.com/250" },
//   { name: "Fiona Green", position: "Marketing Specialist", photo: "https://via.placeholder.com/250" },
//   { name: "George White", position: "Sales Executive", photo: "https://via.placeholder.com/250" },
//   { name: "Hannah Black", position: "HR Manager", photo: "https://via.placeholder.com/250" },
//   { name: "Ian Grey", position: "Business Analyst", photo: "https://via.placeholder.com/250" },
//   { name: "Julia Roberts", position: "Content Writer", photo: "https://via.placeholder.com/250" },
//   { name: "Kevin Bacon", position: "Graphic Designer", photo: "https://via.placeholder.com/250" },
//   { name: "Laura Croft", position: "Web Developer", photo: "https://via.placeholder.com/250" },
//   { name: "Mike Tyson", position: "Network Engineer", photo: "https://via.placeholder.com/250" },
//   { name: "Nina Simone", position: "SEO Specialist", photo: "https://via.placeholder.com/250" },
//   { name: "Oscar Wilde", position: "Copywriter", photo: "https://via.placeholder.com/250" },
//   { name: "Paul Atreides", position: "Data Scientist", photo: "https://via.placeholder.com/250" },
//   { name: "Quinn Fabray", position: "Social Media Manager", photo: "https://via.placeholder.com/250" }







function filterEmployees() {
  // Get the selected filter value
  const filterValue = document.getElementById('position').value;
  // Get all employee cards
  const cards = document.querySelectorAll('.card');

  // Loop through each card
  cards.forEach(card => {
      // Check if the filter value is 'all' or matches the card's data-position
      if (filterValue === 'all' || card.getAttribute('data-position') === filterValue) {
          card.style.display = 'block'; // Show the card
      } else {
          card.style.display = 'none'; // Hide the card
      }
  });
}
// scripts.js

// Get the hamburger menu and the navigation menu
const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('navbar');

// Ensure that the JavaScript runs after the DOM has fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Add event listener to the hamburger icon
    hamburger.addEventListener('click', function () {
        // Toggle the 'active' class to show/hide the navbar
        navbar.classList.toggle('active');
        // Toggle the 'active' class to animate the hamburger to an 'X'
        hamburger.classList.toggle('active');
    });
});

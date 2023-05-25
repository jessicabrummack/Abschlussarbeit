<!--function to open the hamburger menu-->

hamburger = document.querySelector(".hamburger");
hamburger.onclick = function() {
    navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("active");
}
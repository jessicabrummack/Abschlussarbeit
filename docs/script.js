<!--function to open the hamburger menu-->

hamburger = document.querySelector(".hamburger");
hamburger.onclick = function() {
    navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("active");
}
<!--function to open the sidebar on smaller screens-->
sidebar = document.querySelector(".sidebar");
sidebar.onclick = function() {
    menu_toggle = document.querySelector(".left-sidebar");
    menu_toggle.classList.toggle("active");

}
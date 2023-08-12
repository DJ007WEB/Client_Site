
const mobile_nav = document.querySelector(".mobile-navbar-btn");

const header = document.querySelector(".header");


const toggleNavBar = () => {
    header.classList.toggle("active");
}


mobile_nav.addEventListener("click", () => toggleNavBar());
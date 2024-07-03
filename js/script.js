// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketik humburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik di luar sidebar untuk menghiangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click,function");
if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
  navbarNav.classList.remove("active");
}

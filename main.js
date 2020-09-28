const hamburger = document.querySelector(".hamburger");
const navItems = document.querySelector(".nav-items");
const item = document.querySelector(".nav-item");

hamburger.addEventListener("click", () => {
    navItems.classList.toggle("open");
}
)
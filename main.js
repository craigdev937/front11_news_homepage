const menuToggle = document.querySelector('.menu__toggle');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll(".nav a");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
    menuToggle.classList.toggle("open");

    const isOpen = nav.classList.contains("open");
    menuToggle.setAttribute("aria-expanded", isOpen);
    document.body.style.overflow = isOpen ? "hidden" : "";
});

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        nav.classList.remove("open");
        menuToggle.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
    })
});

nav.addEventListener("click", (event) => {
    if (event.target === nav) {
        nav.classList.remove("open");
        menuToggle.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
    }
});




document.addEventListener("DOMContentLoaded", function () {
    const mobileMenu = document.getElementById("mobile-menu");
    const navbar = document.getElementById("navbar");

    mobileMenu.addEventListener("click", function () {
        navbar.classList.toggle("show-menu");
    });

    window.addEventListener("resize", function () {
        if (window.innerWidth > 768) {
            navbar.classList.remove("show-menu");
        }
    });
});

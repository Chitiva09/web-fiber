// Función para alternar el menú lateral

function toggleMenu() {
    const sideMenu = document.getElementById("side-menu");
    const overlay = document.getElementById("overlay");

    sideMenu.classList.toggle("active");
    overlay.style.display = sideMenu.classList.contains("active") ? "block" : "none"; // Muestra/oculta el overlay
}

function closeMenu() {
    const sideMenu = document.getElementById("side-menu");
    const overlay = document.getElementById("overlay");

    sideMenu.classList.remove("active");
    overlay.style.display = "none"; // Asegúrate de ocultar el overlay
}

// Cerrar el menú si se hace clic fuera del menú lateral
document.addEventListener('click', function (event) {
    const sideMenu = document.getElementById('side-menu');
    const hamburgerMenu = document.getElementById('hamburger-menu');
    // Verificar si el clic fue fuera del menú y del ícono de hamburguesa
    if (!sideMenu.contains(event.target) && !hamburgerMenu.contains(event.target)) {
        sideMenu.classList.remove('active');
    }
});

let slideIndex = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.gallery-item');
    const totalSlides = slides.length;

    slideIndex += step;

    if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
    } else if (slideIndex >= totalSlides) {
        slideIndex = 0;
    }

    const gallery = document.querySelector('.gallery');
    gallery.style.transform = `translateX(-${slideIndex * 100}%)`;
}


window.onscroll = function () {
    const nav = document.querySelector('nav');
    if (window.scrollY > 0) {
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky');
    }
};

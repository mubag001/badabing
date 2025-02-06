// Burger Menu
const burgerMenu = document.querySelector('.burger-menu');
const navLinks = document.querySelector('.nav-links');

burgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Slider
const slides = document.querySelectorAll('.slide');
const heroBanner = document.querySelector('.hero-banner');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentSlide = 0;
const switchInterval = 4000; // Millisekunde


function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });

    // Change hero-banner background image
    const newBg = slides[index].getAttribute('data-bg');
    heroBanner.style.backgroundImage = `url('${newBg}')`;
}


prevBtn.addEventListener('click', () => {
    clearInterval(autoSwitch); // Pause auto-switch on manual interaction
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
    startAutoSwitch(); // Restart auto-switch after interaction
});

nextBtn.addEventListener('click', () => {
    clearInterval(autoSwitch);
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
    startAutoSwitch();
});

// Auto-switch
function autoNextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Start interval für Auto Switch
function startAutoSwitch() {
    autoSwitch = setInterval(autoNextSlide, switchInterval);
}

// Initialisierung
showSlide(currentSlide);

// Start slider für Auto Switching
let autoSwitch = setInterval(autoNextSlide, switchInterval);
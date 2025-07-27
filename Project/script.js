// Mobile menu toggle
const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

// Open menu
menuOpenButton.addEventListener("click", () => {
    document.body.classList.add("show-mobile-menu");
});
// Close menu
menuCloseButton.addEventListener("click", () => {
    document.body.classList.remove("show-mobile-menu");
});

// Close menu when a nav link is clicked
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        document.body.classList.remove("show-mobile-menu");
    });
});

// Initialize Swiper for testimonials
const swiper = new Swiper('.slider-container', {
    loop: true,
    grabCursor: true,
    spaceBetween: 25,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
});
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
let slideIndex = 0;

// Slideshow functionality
function changeSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("portfolio-item");
    if (n >= slides.length) {slideIndex = 0}
    if (n < 0) {slideIndex = slides.length - 1}
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    slides[slideIndex].classList.add("active");
}

document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('i');
    const styleLink = document.getElementById('theme-style');
    let currentTheme = localStorage.getItem('theme') || 'dark'; // Set default to 'dark'

    // Function to set the theme
    function setTheme(theme) {
        if (theme === 'light') {
            styleLink.href = 'alternate-style.css';
            themeIcon.classList.replace('bi-moon-fill', 'bi-sun-fill');
        } else {
            styleLink.href = 'style.css';
            themeIcon.classList.replace('bi-sun-fill', 'bi-moon-fill');
        }
        currentTheme = theme;
        localStorage.setItem('theme', theme);
    }

    // Set initial theme
    setTheme(currentTheme);

    // Theme toggle functionality
    themeToggle.addEventListener('click', function() {
        setTheme(currentTheme === 'light' ? 'dark' : 'light');
    });

    // Existing scroll functionality
    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');
            
            if(top >= offset && top < offset + height){
                navLinks.forEach(links => {
                    links.classList.remove('active');
                    document.querySelector('header nav a[href*=' + id + ' ]').classList.add('active')
                })
            }
        })
    }

    // Existing menu icon functionality
    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    }

    // Initialize slideshow
    showSlides(slideIndex);
});
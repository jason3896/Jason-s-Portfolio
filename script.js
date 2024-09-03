let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('i');
    const body = document.body;

    // Theme toggle functionality
    themeToggle.addEventListener('click', function() {
        body.classList.toggle('light-mode');
        
        // Save the theme preference
        if (body.classList.contains('light-mode')) {
            localStorage.setItem('theme', 'light');
            themeIcon.classList.replace('bi-moon-fill', 'bi-sun-fill');
        } else {
            localStorage.setItem('theme', 'dark');
            themeIcon.classList.replace('bi-sun-fill', 'bi-moon-fill');
        }
    });

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.add('light-mode');
        themeIcon.classList.replace('bi-moon-fill', 'bi-sun-fill');
    }

});

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

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
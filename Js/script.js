// Navigation mobile
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-menu');

if (burger) {
    burger.addEventListener('click', () => {
        nav.classList.toggle('active');
        burger.classList.toggle('active');
    });
}

// Fermer le menu au clic sur un lien
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        burger.classList.remove('active');
    });
});

// Tracking des événements pour Analytics
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        if (typeof gtag !== 'undefined') {
            gtag('event', 'click', {
                'event_category': 'Button',
                'event_label': this.textContent.trim()
            });
        }
    });
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

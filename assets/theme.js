// ================= SCROLL SUAVE PARA ANCLAS =================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// ================= ANIMACIONES CON INTERSECTION OBSERVER =================
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

// Agregar animación a las secciones importantes
document.querySelectorAll('.hero-banner, .category-blocks div, .product-card, .promo-banner, .image-with-text').forEach(element => {
    observer.observe(element);
});

// ================== CSS para la Animación ==================
const style = document.createElement('style');
style.innerHTML = `
.fade-in {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 0.8s ease, transform 0.8s ease;
}
.hero-banner, .category-blocks div, .product-card, .promo-banner, .image-with-text {
    opacity: 0;
    transform: translateY(50px);
}
`;
document.head.appendChild(style);

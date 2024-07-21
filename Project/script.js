document.addEventListener('DOMContentLoaded', (event) => {
    const leftButton = document.querySelector('.left-btn');
    const rightButton = document.querySelector('.right-btn');
    const container = document.querySelector('.rewards-cards');

    leftButton.addEventListener('click', () => {
        container.scrollBy({
            top: 0,
            left: -300,
            behavior: 'smooth'
        });
    });

    rightButton.addEventListener('click', () => {
        container.scrollBy({
            top: 0,
            left: 300,
            behavior: 'smooth'
        });
    });

    // Lazy loading effect
    const lazyElements = document.querySelectorAll('.lazy');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    lazyElements.forEach(element => {
        observer.observe(element);
    });
});

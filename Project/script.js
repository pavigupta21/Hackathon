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
});

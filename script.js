document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('changeText');
    const title = document.querySelector('.title');
    const greetings = [
        'Hello, World!',
        'Hola, Mundo!',
        'Bonjour, Monde!',
        'Ciao, Mondo!',
        'こんにちは、世界！'
    ];
    let currentIndex = 0;

    button.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % greetings.length;
        title.style.animation = 'none';
        title.offsetHeight; // Trigger reflow
        title.style.animation = 'fadeIn 0.5s ease';
        title.textContent = greetings[currentIndex];
    });
});
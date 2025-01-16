document.querySelectorAll('.toggle-button').forEach(button => {
    button.addEventListener('click', () => {
        const extraContent = button.nextElementSibling;
        extraContent.style.display = extraContent.style.display === 'block' ? 'none' : 'block';
    });
});

let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-image');
slides[currentSlide].classList.add('active');

function changeSlide(direction) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}
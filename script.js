let currentIndex = 0;
const slides = document.getElementById('slides');
const totalSlides = slides.children.length;

function updateSlides() {
    const offset = -currentIndex * 100;
    slides.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlides();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlides();
}

// Optional: Auto-slide every 3 seconds
setInterval(nextSlide, 3000);
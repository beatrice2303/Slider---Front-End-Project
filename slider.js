// // slider.js

// let currentSlide = 0;
// const slides = document.querySelectorAll('.hero .slide');

// function showSlide(index) {
//     const heroSection = document.querySelector('.hero');
//     if (index >= slides.length) {
//         currentSlide = 0;
//     } else if (index < 0) {
//         currentSlide = slides.length - 1;
//     } else {
//         currentSlide = index;
//     }
//     heroSection.style.transform = `translateX(-${currentSlide * 100}%)`;
// }

// function nextSlide() {
//     showSlide(currentSlide + 1);
// }

// function previousSlide() {
//     showSlide(currentSlide - 1);
// }

// // Automatically switch slides every 5 seconds
// setInterval(nextSlide, 5000);

// // Event listeners for manual control (if you want to add next/prev buttons)
// document.getElementById('nextBtn').addEventListener('click', nextSlide);
// document.getElementById('prevBtn').addEventListener('click', previousSlide);


let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${100 * (i - index)}%)`;
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

setInterval(nextSlide, 5000); // Change slide every 5 seconds
showSlide(currentSlide);

document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.carousel-container');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    let currentIndex = 0;

    function showSlide(index) {
        container.style.transform = `translateX(-${index * 100}%)`;
    }

    function showNextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function showPrevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    nextButton.addEventListener('click', showNextSlide);
    prevButton.addEventListener('click', showPrevSlide);

    // Optional: Auto-play
    setInterval(showNextSlide, 5000);
});
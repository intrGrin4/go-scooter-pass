const sliderItem = document.querySelectorAll(".exclusive__item");
const prevButton = document.querySelector('.exclusive__slider-buttons-arrow--preview');
const nextButton = document.querySelector('.exclusive__slider-buttons-arrow--next');
const slides = Array.from(sliderItem);
const slideCount = slides.length;
let slideIndex = 0;

prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

function showPreviousSlide() {
    slideIndex = (slideIndex - 1 + slideCount) % slideCount;
    updateSlider();
}

function showNextSlide() {
    slideIndex = (slideIndex + 1) % slideCount;
    if (slideIndex == slides.length) {
        nextButtonButton.classList.add("disabled");
    } else {
        prevButton.classList.remove("disabled");
    }
    updateSlider();
}

function updateSlider() {
    slides.forEach((slide, index) => {
        if (index === slideIndex) {
            slide.classList.remove("exclusive__item--disabled");
            slide.classList.add("exclusive__item--show");
        } else {
            slide.classList.remove("exclusive__item--show");
            slide.classList.add("exclusive__item--disabled");
        }
        stopSliderShow();
    });
}

function stopSliderShow() {
    if (slideIndex == 0) {
        prevButton.setAttribute('disabled', "");
    } else {
        prevButton.removeAttribute('disabled');
    }
    if (slideIndex == slideCount - 1) {
        nextButton.setAttribute('disabled', "");
    } else {
        nextButton.removeAttribute('disabled');
    }
}

updateSlider();
const slider = document.querySelector('.projects__slider');
const prevBtn = document.querySelector('.projects__button--prev');
const nextBtn = document.querySelector('.projects__button--next');
const slides = document.querySelectorAll('.projects__slider li');
let currentStartIndex = 0;


const totalSlides = slides.length;
export function switchSlide() {
    if (window.innerWidth > 767) {
        scrollSlider();
        updateButtons();
    }
}

function getSlideSize() {
    if (slides.length === 0) {
        return { width: 0, margin: 0 };

    }
    const firstSlide = slides[0];
    const computedStyle = getComputedStyle(firstSlide);
    const width = firstSlide.offsetWidth;
    const marginRight = parseInt(computedStyle.marginRight);
    return { width: width, margin: marginRight };

}
function updateButtons() {
    const { width, margin } = getSlideSize();
    const slideFullWidth = width + margin;
    const visibleSlidesCount = Math.floor(slider.offsetWidth / slideFullWidth);

    if (totalSlides <= visibleSlidesCount) {
        prevBtn.disabled = true;
        nextBtn.disabled = true;
        return;
    }

    prevBtn.disabled = currentStartIndex === 0;
    nextBtn.disabled = (currentStartIndex + visibleSlidesCount) >= totalSlides
}

function scrollSlider() {
    const { width, margin } = getSlideSize();
    const slideFullWidth = width + margin;
    slider.scrollTo({
        left: currentStartIndex * slideFullWidth,
        behavior: 'smooth'
    })
    updateButtons();
}
prevBtn.addEventListener('click', () => {
    if (currentStartIndex > 0) {
        currentStartIndex--;
        scrollSlider();
    }
});

nextBtn.addEventListener('click', () => {
    const { width, margin } = getSlideSize();
    const slideFullWidth = width + margin;
    const visibleSlidesCount = Math.floor(slider.offsetWidth / slideFullWidth);

    if ((currentStartIndex + visibleSlidesCount < totalSlides)) {
        currentStartIndex++;
        scrollSlider();
    }
});

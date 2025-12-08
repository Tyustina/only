
const sliders = document.querySelectorAll('.portfolio__items');
let isDown = false;
let startX;
let scrollLeft;
const isMobile = window.innerWidth < 768;

export function initPortfolioSlider() {
    if (isMobile) {
        sliders.forEach((slides) => {
            slides.addEventListener('mousedown', (e) => {
                isDown = true;
                startX = e.pageX;               // где нажали
                scrollLeft = slides.scrollLeft;  // текущее положение
            });

            slides.addEventListener('mouseleave', () => isDown = false);
            slides.addEventListener('mouseup', () => isDown = false);

            slides.addEventListener('mousemove', (e) => {
                if (!isDown) return;
                e.preventDefault();
                const x = e.pageX;
                const walk = (x - startX) * 2;  // скорость перетаскивания
                slides.style.transform = `translateX(${scrollLeft - walk}px)`;
            });

            // Когда отпускаем — округляем до ближайшей карточки
            slides.addEventListener('mouseup', () => {
                if (!isDown) return;
                isDown = false;

                const walked = scrollLeft - (scrollLeft - slides.style.transform.replace('translateX(', '').replace('px)', '') * 1);
                const slideWidth = 320; // 300 + 20px margin
                const page = Math.round(walked / slideWidth);

                slides.style.transform = `translateX(-${page * cardWidth}px)`;
            });
        })
    }
}


// function getSlideSize() {
//     if (slides.length === 0) {
//         return { width: 0, margin: 0 };

//     }
//     const firstSlide = slides[0];
//     const computedStyle = getComputedStyle(firstSlide);
//     const width = firstSlide.offsetWidth;
//     const marginRight = parseInt(computedStyle.marginRight);
//     return { width: width, margin: marginRight };

// }
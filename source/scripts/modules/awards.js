// swipeSlider.js
export function initAwardsSlider() {
    const list = document.querySelector('.awards__list');
    if (!list) { 
        return 
    };

    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    // Автоматически берём ширину первой карточки + gap из CSS
    const cardWidth = list.querySelector('li').offsetWidth + 10; // 24 — твой gap

    const start = (e) => {
        isDown = true;
        list.classList.add('dragging');
        startX = e.pageX || e.touches[0].pageX;
        scrollLeft = list.scrollLeft || 0;
    };

    const move = (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX || e.touches[0].pageX;
        const walk = (x - startX) * 2;
        list.style.transform = `translateX(${scrollLeft - walk}px)`;
    };

    const end = () => {
        if (!isDown) return;
        isDown = false;
        list.classList.remove('dragging');

        // Прилипаем к ближайшей карточке
        const moved = Math.abs(parseFloat(list.style.transform) || 0);
        const page = Math.round(moved / cardWidth);
        list.style.transform = `translateX(-${page * cardWidth}px)`;
    };

    // mouse
    list.addEventListener('mousedown', start);
    list.addEventListener('mousemove', move);
    list.addEventListener('mouseup', end);
    list.addEventListener('mouseleave', end);

    // touch
    list.addEventListener('touchstart', start);
    list.addEventListener('touchmove', move);
    list.addEventListener('touchend', end);
}
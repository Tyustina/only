// const videoContainer = document.querySelector('.hero__media');

// export function scaleVideo() {
//     if (videoContainer) {
//         const maxScale = 8.0;
//         const minScale = 1.0;

//         const handleScroll = () => {
//             const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//             const documentHeight = document.documentElement.scrollHeight - window.innerHeight; // Общая высота прокрутки

//             if (documentHeight === 0) { // Избегаем деления на ноль, если контента мало
//                 videoContainer.style.transform = `scale(${minScale})`;
//                 return;
//             }

//             // Прогресс прокрутки от 0 (вверху) до 1 (в самом низу страницы)
//             const scrollProgress = scrollTop / documentHeight;

//             // Линейная интерполяция масштаба
//             // Когда scrollProgress = 0, scale = minScale
//             // Когда scrollProgress = 1, scale = maxScale
//             let scale = minScale + (maxScale - minScale) * scrollProgress;

//             // Ограничиваем масштаб на всякий случай
//             scale = Math.max(minScale, Math.min(maxScale, scale));

//             videoContainer.style.transform = `scale(${scale})`;
//         };

//         // Добавляем слушатель события 'scroll' к объекту window
//         window.addEventListener('scroll', handleScroll);

//         // Вызываем функцию один раз при загрузке, чтобы установить начальное состояние
//         handleScroll();
//     }
// }

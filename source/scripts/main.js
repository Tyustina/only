import './modules/nav.js'
// import { scaleVideo } from './modules/video.js';
import { switchingNav } from './modules/nav.js';
import { flippingBanners } from './modules/banners.js';
import { switchSlide } from './modules/projects.js';
import { initScrollAnimation } from './modules/animations.js';
window.addEventListener('DOMContentLoaded', () => {
    // scaleVideo();
    switchingNav();
    flippingBanners();
    switchSlide();
    initScrollAnimation();
});

window.addEventListener('resize', () => {
    initScrollAnimation();
    switchingNav();
    switchSlide();
});

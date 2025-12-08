import './modules/nav.js'
// import { scaleVideo } from './modules/video.js';
import { switchingNav } from './modules/nav.js';
import { flippingBanners } from './modules/banners.js';
import { switchSlide } from './modules/projects.js';
import { initPortfolioSlider } from './modules/portfolio.js';
import {initAwardsSlider} from './modules/awards.js'
window.addEventListener('DOMContentLoaded', () => {
    // scaleVideo();
    switchingNav();
    flippingBanners();
    switchSlide();
    initPortfolioSlider();
    initAwardsSlider();
});

import './modules/nav.js'
// import { scaleVideo } from './modules/video.js';
import { movingParagraph } from './modules/projects.js';
import { switchingNav } from './modules/nav.js';
window.addEventListener('DOMContentLoaded', () => {
    // scaleVideo();
    switchingNav();
});

window.addEventListener('resize',movingParagraph);
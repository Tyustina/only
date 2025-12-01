import './modules/nav.js'
import { scaleVideo } from './modules/video.js';
import { movingParagraph } from './modules/projects.js';
window.addEventListener('DOMContentLoaded', () => {
    scaleVideo();
});

window.addEventListener('resize',movingParagraph);
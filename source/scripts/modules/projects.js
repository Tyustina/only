const textBlock = document.querySelector('.projects__text');
const paragraph = document.querySelector('.hero__about p');
isMobile = window.innerWidth < 768;

export function movingParagraph() {
    if(isMobile) {
        textBlock.appendChild(paragraph)
    }
}
// source/scripts/modules/nav.js
var nav = document.querySelector(".nav");
var navToggle = document.querySelector(".header__toggle");
var isDesktop = window.innerWidth > 1023;
var body = document.body;
var overlay = document.querySelector(".overlay");
function switchingNav() {
  if (navToggle) {
    navToggle.addEventListener("click", openCloseNav);
  }
}
function openCloseNav() {
  if (nav.classList.contains("is-open")) {
    closeNav();
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeNav();
      }
    });
    body.addEventListener("click", (e) => {
      if (e.target === overlay) {
        closeNav();
      }
    });
  } else {
    openNav();
  }
}
function closeNav() {
  nav.classList.remove("is-open");
  body.classList.remove("scroll-lock");
  overlay.classList.remove("is-active");
  navToggle.classList.remove("is-open");
}
function openNav() {
  nav.classList.add("is-open");
  body.classList.add("scroll-lock");
  overlay.classList.add("is-active");
  navToggle.classList.add("is-open");
}
window.addEventListener("resize", switchingNav);

// source/scripts/modules/video.js
var videoContainer = document.querySelector(".hero__media");
function scaleVideo() {
  if (videoContainer) {
    const maxScale = 8;
    const minScale = 1;
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (documentHeight === 0) {
        videoContainer.style.transform = `scale(${minScale})`;
        return;
      }
      const scrollProgress = scrollTop / documentHeight;
      let scale = minScale + (maxScale - minScale) * scrollProgress;
      scale = Math.max(minScale, Math.min(maxScale, scale));
      videoContainer.style.transform = `scale(${scale})`;
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
  }
}

// source/scripts/modules/projects.js
var textBlock = document.querySelector(".projects__text");
var paragraph = document.querySelector(".hero__about p");
isMobile = window.innerWidth < 768;
function movingParagraph() {
  if (isMobile) {
    textBlock.appendChild(paragraph);
  }
}

// source/scripts/main.js
window.addEventListener("DOMContentLoaded", () => {
  scaleVideo();
  switchingNav();
});
window.addEventListener("resize", movingParagraph);
//# sourceMappingURL=main.js.map

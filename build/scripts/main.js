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

// source/scripts/modules/projects.js
var textBlock = document.querySelector(".projects__text");
var paragraph = document.querySelector(".hero__about p");
isMobile = window.innerWidth < 768;
function movingParagraph() {
  if (isMobile) {
    textBlock.appendChild(paragraph);
  }
}

// source/scripts/modules/banners.js
var bannersList = document.querySelector(".banners__wrapper");
var switchBanner = (toggle) => {
  if (toggle.classList.contains("is-active")) {
    return;
  }
  const targetId = toggle.dataset.targetId;
  const elBannersList = bannersList.querySelector(`.banners__slide[data-id="${targetId}"]`);
  if (elBannersList) {
    const toggleActive = bannersList.querySelector(".banners__toggle.is-active");
    const activeBanner = bannersList.querySelector(".banners__slide.is-active");
    toggleActive.classList.remove("is-active");
    activeBanner.classList.remove("is-active");
    toggle.classList.add("is-active");
    setTimeout(function() {
      elBannersList.classList.add("is-active");
    }, 150);
  }
};
function flippingBanners() {
  bannersList.addEventListener("click", (e) => {
    if (e.target && !e.target.closest(".banners__toggles")) {
      return;
    }
    const toggle = e.target.closest(".banners__toggle");
    switchBanner(toggle);
  });
}

// source/scripts/main.js
window.addEventListener("DOMContentLoaded", () => {
  switchingNav();
  flippingBanners();
});
window.addEventListener("resize", movingParagraph);
//# sourceMappingURL=main.js.map

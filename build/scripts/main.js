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

// source/scripts/modules/projects.js
var slider = document.querySelector(".projects__slider");
var prevBtn = document.querySelector(".projects__button--prev");
var nextBtn = document.querySelector(".projects__button--next");
var slides = document.querySelectorAll(".projects__slider li");
var currentStartIndex = 0;
var totalSlides = slides.length;
function switchSlide() {
  scrollSlider();
  updateButtons();
}
function getSlideSize() {
  if (slides.length === 0) {
    return { width: 0, margin: 0 };
  }
  const firstSlide = slides[0];
  const computedStyle = getComputedStyle(firstSlide);
  const width = firstSlide.offsetWidth;
  const marginRight = parseInt(computedStyle.marginRight);
  return { width, margin: marginRight };
}
function updateButtons() {
  const { width, margin } = getSlideSize();
  const slideFullWidth = width + margin;
  const visibleSlidesCount = Math.floor(slider.offsetWidth / slideFullWidth);
  if (totalSlides <= visibleSlidesCount) {
    prevBtn.disabled = true;
    nextBtn.disabled = true;
    return;
  }
  prevBtn.disabled = currentStartIndex === 0;
  nextBtn.disabled = currentStartIndex + visibleSlidesCount >= totalSlides;
}
function scrollSlider() {
  const { width, margin } = getSlideSize();
  const slideFullWidth = width + margin;
  slider.scrollTo({
    left: currentStartIndex * slideFullWidth,
    behavior: "smooth"
  });
  updateButtons();
}
prevBtn.addEventListener("click", () => {
  if (currentStartIndex > 0) {
    currentStartIndex--;
    scrollSlider();
  }
});
nextBtn.addEventListener("click", () => {
  const { width, margin } = getSlideSize();
  const slideFullWidth = width + margin;
  const visibleSlidesCount = Math.floor(slider.offsetWidth / slideFullWidth);
  if (currentStartIndex + visibleSlidesCount < totalSlides) {
    currentStartIndex++;
    scrollSlider();
  }
});

// source/scripts/modules/portfolio.js
var sliders = document.querySelectorAll(".portfolio__items");
var isDown = false;
var startX;
var scrollLeft;
var isMobile = window.innerWidth < 768;
function initPortfolioSlider() {
  if (isMobile) {
    sliders.forEach((slides2) => {
      slides2.addEventListener("mousedown", (e) => {
        isDown = true;
        startX = e.pageX;
        scrollLeft = slides2.scrollLeft;
      });
      slides2.addEventListener("mouseleave", () => isDown = false);
      slides2.addEventListener("mouseup", () => isDown = false);
      slides2.addEventListener("mousemove", (e) => {
        if (!isDown)
          return;
        e.preventDefault();
        const x = e.pageX;
        const walk = (x - startX) * 2;
        slides2.style.transform = `translateX(${scrollLeft - walk}px)`;
      });
      slides2.addEventListener("mouseup", () => {
        if (!isDown)
          return;
        isDown = false;
        const walked = scrollLeft - (scrollLeft - slides2.style.transform.replace("translateX(", "").replace("px)", "") * 1);
        const slideWidth = 320;
        const page = Math.round(walked / slideWidth);
        slides2.style.transform = `translateX(-${page * cardWidth}px)`;
      });
    });
  }
}

// source/scripts/modules/awards.js
function initAwardsSlider() {
  const list = document.querySelector(".awards__list");
  if (!list) {
    return;
  }
  ;
  let isDown2 = false;
  let startX2 = 0;
  let scrollLeft2 = 0;
  const cardWidth2 = list.querySelector("li").offsetWidth + 10;
  const start = (e) => {
    isDown2 = true;
    list.classList.add("dragging");
    startX2 = e.pageX || e.touches[0].pageX;
    scrollLeft2 = list.scrollLeft || 0;
  };
  const move = (e) => {
    if (!isDown2)
      return;
    e.preventDefault();
    const x = e.pageX || e.touches[0].pageX;
    const walk = (x - startX2) * 2;
    list.style.transform = `translateX(${scrollLeft2 - walk}px)`;
  };
  const end = () => {
    if (!isDown2)
      return;
    isDown2 = false;
    list.classList.remove("dragging");
    const moved = Math.abs(parseFloat(list.style.transform) || 0);
    const page = Math.round(moved / cardWidth2);
    list.style.transform = `translateX(-${page * cardWidth2}px)`;
  };
  list.addEventListener("mousedown", start);
  list.addEventListener("mousemove", move);
  list.addEventListener("mouseup", end);
  list.addEventListener("mouseleave", end);
  list.addEventListener("touchstart", start);
  list.addEventListener("touchmove", move);
  list.addEventListener("touchend", end);
}

// source/scripts/main.js
window.addEventListener("DOMContentLoaded", () => {
  switchingNav();
  flippingBanners();
  switchSlide();
  initPortfolioSlider();
  initAwardsSlider();
});
//# sourceMappingURL=main.js.map

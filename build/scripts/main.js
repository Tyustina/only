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
    const maxScale = 3;
    const minScale = 1;
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (documentHeight === 0) {
        videoContainer.style.transform = ` scale(${minScale})`;
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
  if (window.innerWidth > 767) {
    scrollSlider();
    updateButtons();
  }
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

// source/scripts/modules/animations.js
var observer = null;
function initScrollAnimation() {
  const animatedElements = document.querySelectorAll('[data-animate="true"]');
  if (!animatedElements.length) {
    return;
  }
  if (observer) {
    animatedElements.forEach((element) => {
      observer.unobserve(element);
    });
  }
  const isTabletOrMobile = window.innerWidth <= 1279;
  const observerOptions = {
    threshold: isTabletOrMobile ? 0.28 : 0.4
  };
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("animate");
        }, 100);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  animatedElements.forEach((element) => {
    observer.observe(element);
  });
}

// source/scripts/main.js
window.addEventListener("DOMContentLoaded", () => {
  scaleVideo();
  switchingNav();
  flippingBanners();
  switchSlide();
  initScrollAnimation();
});
window.addEventListener("resize", () => {
  initScrollAnimation();
  switchingNav();
  switchSlide();
});
//# sourceMappingURL=main.js.map

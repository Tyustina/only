const bannersList = document.querySelector('.banners__wrapper');

const switchBanner = (toggle) => {
    if (toggle.classList.contains('is-active')) {
        return;
    }
    const targetId = toggle.dataset.targetId;
    const elBannersList = bannersList.querySelector(`.banners__slide[data-id="${targetId}"]`);
    if (elBannersList) {
        const toggleActive = bannersList.querySelector('.banners__toggle.is-active');
        const activeBanner = bannersList.querySelector('.banners__slide.is-active');
        toggleActive.classList.remove('is-active');
        activeBanner.classList.remove('is-active');
        toggle.classList.add('is-active');
        setTimeout(function () {
            elBannersList.classList.add('is-active');
        }, 150);
    }
};

export function flippingBanners() {
    bannersList.addEventListener('click', (e) => {
        if (e.target && !e.target.closest('.banners__toggles')) {
            return;
        }
        const toggle = e.target.closest('.banners__toggle');
        switchBanner(toggle);
    });
}
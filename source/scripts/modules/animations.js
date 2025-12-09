let observer = null;

export function initScrollAnimation() {
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
        threshold: isTabletOrMobile ? 0.28 : 0.4,
    };

    observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('animate');
                }, 100);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedElements.forEach((element) => {
        observer.observe(element);
    });
}

const videoContainer = document.querySelector('.hero__media');

export function scaleVideo() {
    if (videoContainer) {
        const maxScale = 3.0;
        const minScale = 1.0;

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

        window.addEventListener('scroll', handleScroll);
        handleScroll();
    }
}

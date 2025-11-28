// source/scripts/modules/nav.js
console.log("\u0424\u0430\u0439\u043B \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D");

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

// source/scripts/main.js
window.addEventListener("DOMContentLoaded", () => {
  scaleVideo();
});
//# sourceMappingURL=main.js.map

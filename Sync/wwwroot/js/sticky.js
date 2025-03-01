let isCollapsed;
// Collap menu
function menuCollap() {
  stickers.forEach((sticky) => {
    sticky.classList.add("has-sticker");
  });
  stickerCrookeds.forEach((crooked) => {
    crooked.style.transition = "none";
    crooked.classList.add("has-sticker");
  });
  stickerStraightBig.style.transition = "none";
  stickerStraightSmall.style.transition = "none";
  stickerStraightBig.classList.add("has-sticker");
  stickerStraightSmall.classList.add("has-sticker");
}

// Expand menu
function menuExpand() {
  stickers.forEach((sticky) => {
    sticky.classList.remove("has-sticker");
  });

  stickerStraightBig.style.transition = "ease-in 950ms";
  stickerStraightBig.classList.remove("has-sticker");
  stickerStraightBig.addEventListener("transitionend", () => {
    if (isCollapsed !== true) {
      stickerStraightSmall.style.transition = "ease-in 450ms";
      stickerStraightSmall.classList.remove("has-sticker");
      stickerCrookeds.forEach((crooked) => {
        crooked.style.transition = "ease-in 450ms";
        crooked.classList.remove("has-sticker");
      });
    }
  });
}
// stick header
window.onscroll = function () {
  if (window.scrollY > header.offsetTop && isCollapsed !== true) {
    menuCollap();
    isCollapsed = true;
  } else if (
    window.scrollY <= header.offsetTop &&
    isCollapsed !== false &&
    menuIsOpened !== true
  ) {
    menuExpand();
    isCollapsed = false;
  }
};

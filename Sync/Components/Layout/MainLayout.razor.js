//variables
//=========================
const header = document.querySelector("[js-header]");
const menuFlyout = document.querySelector("[js-menu-flyout]");
const menuItens = document.querySelectorAll("[js-menu-item]");
const menuMobile = document.querySelector(".js-menu-mobile");
const menuMobileFlyout = document.querySelector("[js-menu-mobile-flyout]");
const menuMobileItens = document.querySelectorAll("[js-menu-mobile-item]");
const stickerCrookeds = document.querySelectorAll("[js-sticky__crooked]");
const stickers = document.querySelectorAll("[js-sticky]");
const stickerStraightBig = document.querySelector("[js-sticky__straight-big]");
const stickerStraightSmall = document.querySelector("[js-sticky__straight-small]");
const uP720 = window.matchMedia("(min-width: 720px)");
let classOpened;
let clickMenu;
let currentImagePosition = -100;
let menuIsOpened;
let menuIsOpened2;

//fake
//=========================
document.querySelector("[js-fake]").style.height = header.offsetHeight + "px";

//responsive
//=========================
function responsive(element) {
  if (element.matches && menuIsOpened2 === true) {
    classOpened = "empty";
    closeMenuMobile();
    openMenu(clickMenu);
  } else if (!element.matches && menuIsOpened2 === true) {
    classOpened = "empty";
    closeMenu();
    buttonMobileMenu();
    openMenuMobile(clickMenu);
  }
}

uP720.addEventListener("change", responsive);
responsive(uP720);
//=========================

//sticky
//=========================
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
//=========================


//menu
//=========================
// Open  and close menu
function openMenu(itenMenu) {
  clickMenu = itenMenu;
  let carouselClass = ".js-" + itenMenu;
  if (classOpened !== carouselClass) {
    menuItens.forEach((element) => {
      element.classList.add("is-hidden");
    });
    menuCollap();
    menuFlyout.classList.add("is-open");
    buttonClose.classList.remove("is-hidden");
    buttonClose.classList.add("is-open");
    document.querySelector(carouselClass).classList.remove("is-hidden");
    document.querySelector(carouselClass).classList.add("is-open");
    classOpened = carouselClass;
    menuIsOpened = true;
  } else {
    menuItens.forEach((element) => {
      element.classList.add("is-hidden");
      element.classList.remove("is-open");
    });
    menuFlyout.classList.remove("is-open");
    buttonClose.classList.add("is-hidden");
    buttonClose.classList.remove("is-open");
    menuIsOpened = false;
    classOpened = "empty";
    if (window.scrollY > header.offsetTop) {
      menuCollap();
      isCollapsed = true;
    } else if (window.scrollY <= header.offsetTop) {
      menuExpand();
      isCollapsed = false;
    }
  }
}

// Close menu
function closeMenu() {
  menuItens.forEach((element) => {
    element.classList.add("is-hidden");
    element.classList.remove("is-open");
  });
  menuFlyout.classList.remove("is-open");
  buttonClose.classList.add("is-hidden");
  buttonClose.classList.remove("is-open");
  menuIsOpened = false;
  classOpened = "empty";
  if (window.scrollY > header.offsetTop) {
    menuCollap();
    isCollapsed = true;
  } else if (window.scrollY <= header.offsetTop) {
    menuExpand();
    isCollapsed = false;
  }
}
//=========================

//menu mobile
//=========================
// Animação botão menu mobile
function buttonMobileMenu() {
  if (menuIsOpened === true) {
    closeMenuMobile();
  } else {
    buttonMobile.forEach(element => {
      element.classList.add("is-open");
    });
    menuMobile.classList.add("is-open");
    menuMobile.classList.remove("is-hidden");
    menuCollap();
    menuIsOpened = true;
  }
}

// Menu mobile flyout
function openMenuMobile(itenMenuMobile) {
  clickMenu = itenMenuMobile;
  let carouselClass = ".js-mobile-" + itenMenuMobile;
  if (classOpened !== carouselClass) {
    cleanenuMobile();
    menuMobileFlyout.classList.add("is-open");
    menuMobileFlyout.classList.remove("is-hidden");
    document.querySelector(carouselClass).classList.remove("is-hidden");
    document.querySelector(carouselClass).classList.add("is-open");
    classOpened = carouselClass;
    menuIsOpened = true;
  } else {
    closeMenuMobile();
  }
}

function closeMenuMobile() {
  buttonMobile.forEach(element => {
    element.classList.remove("is-open");
  });
  cleanenuMobile();
  menuMobile.classList.remove("is-open");
  menuMobile.classList.add("is-hidden");
  menuMobileFlyout.classList.remove("is-open");
  menuMobileFlyout.classList.add("is-hidden");
  buttonClose.classList.add("is-hidden");
  buttonClose.classList.remove("is-open");
  if (window.scrollY > header.offsetTop) {
    menuCollap();
    isCollapsed = true;
  } else if (window.scrollY <= header.offsetTop) {
    menuExpand();
    isCollapsed = false;
  }
  menuIsOpened = false;
  classOpened = "empty";
}

function cleanenuMobile() {
  menuMobileItens.forEach(element => {
    element.classList.add("is-hidden");
    element.classList.remove("is-open");
  });
}



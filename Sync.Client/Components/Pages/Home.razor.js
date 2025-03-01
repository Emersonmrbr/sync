const adjustImageInterval = 500;
const autoSliderInterval = 5000;
const buttonClose = document.querySelector("[js-button-close]");
const buttonMobile = document.querySelectorAll("[js-button-mobile]");
const buttonNext = document.querySelector("[js-slider-next]");
const buttonPrev = document.querySelector("[js-slider-prev]");
const carousel = document.querySelector("[js-carousel]");
const galleryWrapper = document.querySelector("[js-gallery-wrapper]");
let amountImages = document.querySelectorAll("[js-slider-gallery]").length;
let currentIndex = 1;
let globalDirection = "";
let imageList = document.querySelectorAll("[js-slider-gallery]");
let imagePosition = imageList[0].style.marginLeft;
let images = document.querySelectorAll("[js-slider-gallery]");


const adjustImage = setInterval(adjustImages, adjustImageInterval);
const autoSlider = setInterval(advanceImage, autoSliderInterval);

function adjustImages() {
  cleanStyles();
  setInitialMargin();
}

function cleanStyles() {
  images.forEach((image) => {
    image.removeAttribute("style");
    image.classList.remove("is-hidden");
  });
}

function setInitialMargin() {
  images[0].style.marginLeft = "-100%";
  clearInterval(adjustImage);
}

function createSlideClones() {
  const firstSlide = images[0].cloneNode(true);
  const lastSlide = images[images.length - 1].cloneNode(true);
  firstSlide.classList.add("slide-cloned");
  lastSlide.classList.add("slide-cloned");
  galleryWrapper.append(firstSlide);
  galleryWrapper.prepend(lastSlide);
}

function moveImage() {
  images[0].style.marginLeft = `-${currentIndex * 100}%`;
}

function changeImage(direction) {
  globalDirection = direction;
  images[0].style.transition = "all 500ms ease-in";
  moveImage();
}

function advanceImage() {
  currentIndex++;
  if (currentIndex > images.length - 1) {
    currentIndex = 0;
  }
  changeImage("next");
}

function rewindImage() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  changeImage("prev");
}

createSlideClones();
images = document.querySelectorAll("[js-slider-gallery]");

images[0].addEventListener("transitionend", () => {
  const amountImages = images.length;
  if (images[0].style.marginLeft === `-${(amountImages - 1) * 100}%` && globalDirection === "next") {
    currentIndex = 1;
    images[0].style.transition = "none";
    moveImage();
  } else if (images[0].style.marginLeft === "0%" && globalDirection === "prev") {
    currentIndex = amountImages - 2;
    images[0].style.transition = "none";
    moveImage();
  }
});

buttonNext.addEventListener("click", () => {
  advanceImage();
  clearInterval(autoSlider);
});

buttonPrev.addEventListener("click", () => {
  rewindImage();
  clearInterval(autoSlider);
});

moveImage();

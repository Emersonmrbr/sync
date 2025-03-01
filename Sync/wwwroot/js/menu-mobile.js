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
	if (window.pageYOffset > header.offsetTop) {
		menuCollap();
		isCollapsed = true;
	} else if (window.pageYOffset <= header.offsetTop) {
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

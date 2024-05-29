import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebP();

const generalSwiper = new Swiper(".general-swiper", {
	spaceBetween: 30,
	loop: true,
	autoHeight: true,
	autoplay: {
		delay: 5000,
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		1000: {
			slidesPerView: 2,
		},
	},
});

const objectsSwiper = new Swiper(".objects-swiper", {
	autoplay: {
		enabled: true,
		delay: 0,
		disableOnInteraction: true,
	},
	autoHeight: true,
	loop: true,
	slidesPerView: 3,
	spaceBetween: 30,
	speed: 12000,
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		500: {
			slidesPerView: 2,
		},
		1000: {
			slidesPerView: 3,
		},
	},
});

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
	navigation: {
		prevEl: "#gen-sw-left",
		nextEl: "#gen-sw-right",
	},
});

const objectsSwiper = new Swiper(".objects-swiper", {
	autoHeight: true,
	loop: true,
	spaceBetween: 30,
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
	navigation: {
		prevEl: "#obj-sw-left",
		nextEl: "#obj-sw-right",
	},
});

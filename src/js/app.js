import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebP();

const setSwiper = ({ id, delay, breakpoints }) => {
	const el = document.querySelector(id);
	return new Swiper(id, {
		autoHeight: true,
		loop: true,
		spaceBetween: 30,
		autoplay: {
			delay,
		},
		breakpoints,
		navigation: {
			prevEl: el.querySelector("#nav-prev"),
			nextEl: el.querySelector("#nav-next"),
		},
		pagination: {
			el: el.querySelector("#nav-paging"),
		},
	});
};

setSwiper({
	id: "#general-swiper",
	delay: 5000,
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		1000: {
			slidesPerView: 2,
		},
	},
});

setSwiper({
	id: "#objects-swiper",
	delay: 3000,
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

setSwiper({
	id: "#reviews-swiper",
	delay: 5000,
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

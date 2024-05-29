import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebP();

const generalSwiper = document.querySelector('#general-swiper');
new Swiper("#general-swiper", {
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
		prevEl: generalSwiper.querySelector("#nav-prev"),
		nextEl: generalSwiper.querySelector("#nav-next"),
	},
	pagination: {
		el: generalSwiper.querySelector("#nav-paging")
	}
});

const objectsSwiper = document.querySelector('#objects-swiper');
new Swiper("#objects-swiper", {
	autoHeight: true,
	loop: true,
	spaceBetween: 30,
	autoplay: {
		delay: 3000,
	},
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
		prevEl: objectsSwiper.querySelector("#nav-prev"),
		nextEl: objectsSwiper.querySelector("#nav-next"),
	},
	pagination: {
		el: objectsSwiper.querySelector("#nav-paging")
	}
});

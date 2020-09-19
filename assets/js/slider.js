// let sliders = document.querySelectorAll('.slider');

// sliders.forEach(el => {
//     let mySwiper = new Swiper('.swiper-container', {
//         // Optional parameters
//         setWrapperSize: true,
//         slidesPerView: '1',
//         centeredSlides: true,

//         autoplay: {
//             delay: 5000,
//             disableOnInteraction: true
//         },

//         // Navigation arrows
//         navigation: {
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev',
//         },
//     });

//     let fadeTxt = index => {
//         let slideTxt = el.querySelectorAll(".swiper__txt--item");

//         slideTxt.forEach(item => {
//             item.classList.remove("swiper__txt--active");
//         });
//         slideTxt[index].classList.add("swiper__txt--active");
//     };

//     mySwiper.on('slideChange', () => {
//         fadeTxt(mySwiper.activeIndex);
//     });
// });

let fadeTxt = (index, slider) => {
    let slideTxt = slider.querySelectorAll(".swiper__txt--item");

    slideTxt.forEach(item => {
        item.classList.remove("swiper__txt--active");
    });
    slideTxt[index].classList.add("swiper__txt--active");
};

let sliderOffer = document.querySelector('.slider-offer'),
    bigSlider = document.querySelector('.big-slider'),
    newSlider = document.querySelector('.news-slider');

let swiperOffer = new Swiper('.swiper-offer', {
    // Optional parameters
    setWrapperSize: true,
    slidesPerView: '1',
    centeredSlides: true,

    autoplay: {
        delay: 5000,
        disableOnInteraction: true
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-offer-next',
        prevEl: '.swiper-offer-prev',
    },
});

swiperOffer.on('slideChange', () => fadeTxt(swiperOffer.activeIndex, sliderOffer));

let bigSwiper = new Swiper('.big-swiper', {
    // Optional parameters
    setWrapperSize: true,
    slidesPerView: '1',
    centeredSlides: true,

    autoplay: {
        delay: 5000,
        disableOnInteraction: true
    },

    // Navigation arrows
    navigation: {
        nextEl: '.big-swiper-next',
        prevEl: '.big-swiper-prev',
    },
});

let centerBigSwiper = new Swiper('.center-swiper', {
    // Optional parameters
    setWrapperSize: true,
    slidesPerView: '1',
    centeredSlides: true,

    autoplay: {
        delay: 5000,
        disableOnInteraction: true
    },

    // Navigation arrows
    navigation: {
        nextEl: '.big-swiper-next',
        prevEl: '.big-swiper-prev',
    },
});

centerBigSwiper.on('slideChange', () => fadeTxt(centerBigSwiper.activeIndex, bigSlider));

let newSwiper = new Swiper('.news-swiper', {
    // Optional parameters
    setWrapperSize: true,
    slidesPerView: '1',
    centeredSlides: true,

    autoplay: {
        delay: 5000,
        disableOnInteraction: true
    },

    // Navigation arrows
    navigation: {
        nextEl: '.news-swiper-next',
        prevEl: '.news-swiper-prev',
    },
});
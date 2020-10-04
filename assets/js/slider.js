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

// Функция для изменения текста в зависимости от текущего слайда
let fadeTxt = (index, slider) => {
    let slideTxt;
    if (window.screen.width > 560) {
        slideTxt = slider.querySelector('.swiper__txt').querySelectorAll(".swiper__txt--item");
    } else if (window.screen.width <= 560) {
        slideTxt = slider.querySelector('.swiper__txt--media').querySelectorAll(".swiper__txt--item");
    } else {
        slideTxt = undefined;
    }

    if (slideTxt) {
        slideTxt.forEach(item => {
            item.classList.remove("swiper__txt--active");
        });
        slideTxt[index].classList.add("swiper__txt--active");
    }
};

// Все слайдеры со страницы
let sliderOffer = document.querySelector('.slider-offer'),
    bigSlider = document.querySelector('.big-slider'),
    newSlider = document.querySelector('.news-slider');

// Слайдер Услуги
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
    on: {
        slideChange: function() {
            fadeTxt(this.activeIndex, sliderOffer);
        }
    }
});

//Тройной слайдер в разделе Работы
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
    on: {
        slideChange: function() {
            fadeTxt(this.activeIndex, bigSlider);
        }
    }
});

//Центральный слайдер в разделе Работы
// let centerBigSwiper = new Swiper('.center-swiper', {
//     // Optional parameters
//     setWrapperSize: true,
//     slidesPerView: '1',
//     centeredSlides: true,

//     autoplay: {
//         delay: 5000,
//         disableOnInteraction: true
//     },

//     // Navigation arrows
//     navigation: {
//         nextEl: '.big-swiper-next',
//         prevEl: '.big-swiper-prev',
//     }
// });

//Слайдер Новости
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
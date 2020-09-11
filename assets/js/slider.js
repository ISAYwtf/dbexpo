let sliders = document.querySelectorAll('.slider');

sliders.forEach(el => {
    let mySwiper = new Swiper('.swiper-container', {
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
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
    });

    let fadeTxt = index => {
        let slideTxt = el.querySelectorAll(".swiper__txt--item");

        slideTxt.forEach(item => {
            item.classList.remove("swiper__txt--active");
        });
        slideTxt[index].classList.add("swiper__txt--active");
    };

    mySwiper.on('slideChange', function() {
        fadeTxt(mySwiper.activeIndex);
    });
});
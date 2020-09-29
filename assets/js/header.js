let header = document.querySelector('header'),
    logo = header.querySelector('.header__logo'),
    logoWidthPercent = (logo.clientWidth * 100) / header.querySelector('.wrap').clientWidth,
    logoWidth = logo.clientWidth;

if (window.screen.width > 768 && window.screen.width <= 1024) {
    if (window.scrollY > 200) {
        logo.style.width = 47 + 'px';
    }
} else if (window.screen.width > 560 && window.screen.width <= 1024) {
    if (window.scrollY > 130) {
        logo.style.width = 47 + 'px';
    }
}

window.addEventListener('resize', () => {
    if (window.screen.width > 560 && window.screen.width <= 1024) {
        logo.style.width = logoWidthPercent + '%';
    }
    logoWidth = logo.clientWidth;
}, false);

window.addEventListener('scroll', () => {

    if (window.screen.width > 768 && window.screen.width <= 1024) {
        if (window.scrollY <= 200) {
            logo.style.width = logoWidth - (window.scrollY / 2) + 'px';
        } else if (window.scrollY > 200) {
            logo.style.width = 47 + 'px';
        }
    } else if (window.screen.width > 560 && window.screen.width <= 1024) {
        if (window.scrollY <= 130) {
            logo.style.width = logoWidth - (window.scrollY / 2) + 'px';
        } else if (window.scrollY > 130) {
            logo.style.width = 47 + 'px';
        }
    }
});
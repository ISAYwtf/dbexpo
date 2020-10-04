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
    let maxScroll;

    if (window.screen.width > 768 && window.screen.width <= 1024) {
        maxScroll = 200;
    } else if (window.screen.width > 560 && window.screen.width <= 1024) {
        maxScroll = 130;
    } else {
        maxScroll = undefined;
    }

    if (maxScroll) {
        if (window.scrollY <= maxScroll) {
            logo.style.width = logoWidth - (window.scrollY / 2) + 'px';
        } else if (window.scrollY > maxScroll) {
            logo.style.width = 47 + 'px';
        }
    }
});

let menu = header.querySelector('.header__menu'),
    logoSVG = logo.children[0];

logo.addEventListener('click', (event) => {
    if (window.screen.width <= 560) {
        event.preventDefault();

        if (menu.dataset.show === 'false') {
            menu.classList.toggle('header__menu--hide');

            svgAnimation(logoSVG, true);

            setTimeout(() => menu.dataset.show = true, 10);
        } else if (menu.dataset.show === 'true') {
            menu.dataset.show = false;

            svgAnimation(logoSVG, false);

            setTimeout(() => menu.classList.toggle('header__menu--hide'), 400);
        }
    }

});

function svgAnimation(svg, flag) {
    if (flag) {
        svg.querySelectorAll('.top-line').forEach(el => el.style.opacity = '0');
        svg.querySelectorAll('.bottom-line').forEach(el => el.style.opacity = '0');
        svg.querySelectorAll('.center-line').forEach(el => el.style.opacity = '0');
        svg.querySelectorAll('path').forEach(el => el.style.opacity = '0');
    } else {
        svg.querySelectorAll('.top-line').forEach(el => el.style.opacity = '1');
        svg.querySelectorAll('.bottom-line').forEach(el => el.style.opacity = '1');
        svg.querySelectorAll('.center-line').forEach(el => el.style.opacity = '1');
        svg.querySelectorAll('path').forEach(el => el.style.opacity = '1');
    }
}

menuItems = menu.querySelectorAll('a');

menuItems.forEach(el => {
    el.addEventListener('click', () => {
        if (window.screen.width <= 560) {
            menu.dataset.show = false;

            svgAnimation(logoSVG, false);

            setTimeout(() => menu.classList.toggle('header__menu--hide'), 400);
        }
    });
});
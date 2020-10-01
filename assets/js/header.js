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

let menu = header.querySelector('.header__menu'),
    logoSVG = logo.children[0];

let toBottom = {
        x1: logoSVG.querySelector('.to__top-line').x1.baseVal.value,
        x2: logoSVG.querySelector('.to__top-line').x2.baseVal.value,
        y1: logoSVG.querySelector('.to__top-line').y1.baseVal.value,
        y2: logoSVG.querySelector('.to__top-line').y2.baseVal.value
    },
    toTop = {
        x1: logoSVG.querySelector('.to__bottom-line').x1.baseVal.value,
        x2: logoSVG.querySelector('.to__bottom-line').x2.baseVal.value,
        y1: logoSVG.querySelector('.to__bottom-line').y1.baseVal.value,
        y2: logoSVG.querySelector('.to__bottom-line').y2.baseVal.value
    },
    centerLeft = {
        x1: logoSVG.querySelectorAll('.center-line')[0].x1.baseVal.value,
        x2: logoSVG.querySelectorAll('.center-line')[0].x2.baseVal.value,
        y1: logoSVG.querySelectorAll('.center-line')[0].y1.baseVal.value,
        y2: logoSVG.querySelectorAll('.center-line')[0].y2.baseVal.value
    },
    centerRight = {
        x1: logoSVG.querySelectorAll('.center-line')[1].x1.baseVal.value,
        x2: logoSVG.querySelectorAll('.center-line')[1].x2.baseVal.value,
        y1: logoSVG.querySelectorAll('.center-line')[1].y1.baseVal.value,
        y2: logoSVG.querySelectorAll('.center-line')[1].y2.baseVal.value
    },
    topLine = {
        x1: logoSVG.querySelector('.top-line').x1.baseVal.value,
        x2: logoSVG.querySelector('.top-line').x2.baseVal.value,
        y1: logoSVG.querySelector('.top-line').y1.baseVal.value,
        y2: logoSVG.querySelector('.top-line').y2.baseVal.value
    },
    bottomLine = {
        x1: logoSVG.querySelector('.bottom-line').x1.baseVal.value,
        x2: logoSVG.querySelector('.bottom-line').x2.baseVal.value,
        y1: logoSVG.querySelector('.bottom-line').y1.baseVal.value,
        y2: logoSVG.querySelector('.bottom-line').y2.baseVal.value
    };

logo.addEventListener('click', (event) => {
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
});

function svgAnimation(svg, flag) {
    if (flag) {
        svg.querySelectorAll('.center-line')[0].x1.baseVal.value = toBottom.x1;
        svg.querySelectorAll('.center-line')[0].x2.baseVal.value = toBottom.x2;
        svg.querySelectorAll('.center-line')[0].y1.baseVal.value = toBottom.y1;
        svg.querySelectorAll('.center-line')[0].y2.baseVal.value = toBottom.y2;

        svg.querySelectorAll('.center-line')[1].x1.baseVal.value = toTop.x2;
        svg.querySelectorAll('.center-line')[1].x2.baseVal.value = toTop.x1;
        svg.querySelectorAll('.center-line')[1].y1.baseVal.value = toTop.y2;
        svg.querySelectorAll('.center-line')[1].y2.baseVal.value = toTop.y1;

        svg.querySelector('.top-line').x1.baseVal.value = toBottom.x1;
        svg.querySelector('.top-line').x2.baseVal.value = toBottom.x2;
        svg.querySelector('.top-line').y1.baseVal.value = toBottom.y1;
        svg.querySelector('.top-line').y2.baseVal.value = toBottom.y2;

        svg.querySelector('.bottom-line').x1.baseVal.value = toTop.x1;
        svg.querySelector('.bottom-line').x2.baseVal.value = toTop.x2;
        svg.querySelector('.bottom-line').y1.baseVal.value = toTop.y1;
        svg.querySelector('.bottom-line').y2.baseVal.value = toTop.y2;

        svg.querySelectorAll('path').forEach(el => el.style.opacity = '0');
    } else {
        svg.querySelectorAll('.center-line')[0].x1.baseVal.value = centerLeft.x1;
        svg.querySelectorAll('.center-line')[0].x2.baseVal.value = centerLeft.x2;
        svg.querySelectorAll('.center-line')[0].y1.baseVal.value = centerLeft.y1;
        svg.querySelectorAll('.center-line')[0].y2.baseVal.value = centerLeft.y2;

        svg.querySelectorAll('.center-line')[1].x1.baseVal.value = centerRight.x1;
        svg.querySelectorAll('.center-line')[1].x2.baseVal.value = centerRight.x2;
        svg.querySelectorAll('.center-line')[1].y1.baseVal.value = centerRight.y1;
        svg.querySelectorAll('.center-line')[1].y2.baseVal.value = centerRight.y2;

        svg.querySelector('.top-line').x1.baseVal.value = topLine.x1;
        svg.querySelector('.top-line').x2.baseVal.value = topLine.x2;
        svg.querySelector('.top-line').y1.baseVal.value = topLine.y1;
        svg.querySelector('.top-line').y2.baseVal.value = topLine.y2;

        svg.querySelector('.bottom-line').x1.baseVal.value = bottomLine.x1;
        svg.querySelector('.bottom-line').x2.baseVal.value = bottomLine.x2;
        svg.querySelector('.bottom-line').y1.baseVal.value = bottomLine.y1;
        svg.querySelector('.bottom-line').y2.baseVal.value = bottomLine.y2;

        svg.querySelectorAll('path').forEach(el => el.style.opacity = '1');
    }


    // console.log(toBottom);
}
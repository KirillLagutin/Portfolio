// Theme switcher

(function () {
    const switcher = document.querySelector('.switch');
    const body = document.querySelector('body');

    switcher.addEventListener('click', () => {
        body.classList.toggle('switchMode')
    });
}());
//--------------------------------------------------------------------------------

//Background menu

(function () {
    const header = document.querySelector('.header');

    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add('header_active');
        }
        else {
            header.classList.remove('header_active');
        }
    };
}());
//---------------------------------------------------------------------------------

// Burger handler

(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header__nav');
    const menuClose = document.querySelector('.header__nav-close');
    const menuLinks = document.querySelectorAll('.header__link');

    burgerItem.addEventListener('click', () => {
        menu.classList.add('header__nav_active');
    });

    menuClose.addEventListener('click', () => {
        menu.classList.remove('header__nav_active');
    });

    if (window.innerWidth < 768) {
        menuLinks.forEach(link => link.addEventListener('click', () => {
            menu.classList.remove('header__nav_active');
        }));
    }
    
}());
//----------------------------------------------------------------------------------

// Scroll to anchors

(function () {

    const smoothScroll = function (targetEl, duration) {
        const headerElHeight =  document.querySelector('.header').clientHeight;
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top - headerElHeight;
        let startPosition = window.pageYOffset;
        let startTime = null;
    
        const ease = function(t,b,c,d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };
    
        const animation = function(currentTime){
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0,run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);
    };

    const scrollTo = function () {
        const links = document.querySelectorAll('.js-scroll');
        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    };
    scrollTo();
}());
//-------------------------------------------------------------------------------------

// Show More

(function () {

    const showMore = document.querySelector('.portfolio__button');
    const descButton = document.querySelector('.portfolio__button-desc');
    const itemLength = document.querySelectorAll('.portfolio__item').length;
    let items = 6;

    showMore.addEventListener('click', () => {
        items += 6;
        const array = Array.from(document.querySelector('.portfolio__items').children);
        const visibleItems = array.slice(0, items);

        visibleItems.forEach(el => el.classList.add('is-visible'));

        if(visibleItems.length === itemLength) {
            showMore.style.display = 'none';
            descButton.style.display = 'none';
        }
    });
}());
//--------------------------------------------------------------------------------------
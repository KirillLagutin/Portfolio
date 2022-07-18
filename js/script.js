$(document).ready(function() {
    // Переключатель темы
    $('.header__item-switch, .header__link-switch-desc').click(()=>{
        $('body').toggleClass('switchMode');
    });

    // Плавность для всех якорей
    $('a[href^="#"]').click(function (e) {
        e.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 900);
    });

    // Фиксированное меню
    onscroll = ()=>{
        if(scrollY > 10) {
            $('.header').addClass('header__fixed');
        }
        else if(scrollY < 10) {
            $('.header').removeClass('header__fixed');
        }
    };
});


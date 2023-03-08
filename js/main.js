$(function () {

    $('.header__slider').slick({
        arrows: false,
        dots: true,
        autoplay: 3000,

    });

    $('.menu__btn').on('click', function () {
        $('.menu__btn').toggleClass('menu__btn--active');
        $('.menu__list').toggleClass('menu__list--active');
    });
    $('.menu__list-link').on('click', function () {
        $('.menu__btn').removeClass('menu__btn--active');
        $('.menu__list').removeClass('menu__list--active');
    });

    var mixer = mixitup('.gallery__inner', {
        load: {
            filter: '.category-asia'
        }
    });
});
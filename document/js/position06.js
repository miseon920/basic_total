$(function () {
    $('.top_banner button').on('click', function () {
        $('.top_banner').toggleClass('active').children('.container').slideToggle();
    });
    $('.right_banner').on('click', function () {
        $(this).toggleClass('active');
    });
});
$(function () {
    $('.smile').on('click', function () {
        $(this).toggleClass('on');
    });
    $('.top_banner button').on('click', function () {
        $('.top_banner .container').toggleClass('active');
        // $('.top_banner .container').slideToggle();
    });
});
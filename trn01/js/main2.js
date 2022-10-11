$(function () {
    $('.first_slider').slick({
        //setting-name: setting-value
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 600,
        fade: true,
        cssEase: 'linear',
        arrows: false
    });
    var slide_item = $('.first_slider figure');
    slide_item.eq(0).addClass("on");
    $('.first_slider').on("afterChange", function (event, slick, current) {
        slide_item.eq(current).addClass("on").siblings().removeClass("on");
    });
});
$(function () {
    var slide_item = $('.main_slicder figure');
    slide_item.eq(0).addClass("on");
    $('.main_slicder').on("init reInit afterChange", function () {
        var here = $('.slick-current');
        // console.log(here);
        here.addClass('on').siblings().removeClass('on');
    });

    $('.main_slicder').slick({
        //setting-name: setting-value
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 300,
        fade: true,
        cssEase: 'linear',
        arrows: false,
        pauseOnHover: false,
        pauseOnHover: false
    });
});
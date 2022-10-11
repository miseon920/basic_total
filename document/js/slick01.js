$(function () {
    //$('.test_slick').slick();
    var hover_a = $('.main_visual .main_slider figure .inner a');
    $('.main_visual .main_slider').on('init reInit afterChange', function (event, slick, currentSlide) {
        //console.log(currentSlide);
        var total = slick.slideCount;
        $('.num').text((currentSlide ? currentSlide + 1 : 1) + '/' + total);
        let cur = $('.slick-current');
        cur.find('a').removeClass('check');
        //console.log(cur);
        cur.addClass('on').siblings().removeClass('on');
        $(hover_a).hover(function () {
            cur.find('a').addClass('check');
        });
    });

    $('.main_visual .main_slider').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
    });
});
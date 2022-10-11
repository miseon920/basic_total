$(function () {
  $(".all_menu").click(function () {
    $(".lnb_quick").toggleClass("on");
  });
  $(".search_box .search").click(function () {
    $(".search_bg,.search_frm").fadeIn(600);
    $("html,body").css({ overflow: "hidden" });
  });
  $(".search_bg").click(function () {
    $(".search_bg,.search_frm").fadeOut(600);
    $("html,body").css({ overflow: "visible" });
  });

  $(".visual_banner").on(
    "init afterChange",
    function (event, slick, currentSlide) {
      //console.log(currentSlide);
      let cur = $(".slick-current");
      cur.find("a").removeClass("check");
      //console.log(cur);
      cur.addClass("on").siblings().removeClass("on");
    }
  );
  $(".visual_banner").slick({
    //   dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    useTransform: false,
    fade: true,
    cssEase: "linear",
  });
  $(".arrowSlider .prev").on("click", function () {
    $(this).closest("section").find(".slick-slider").slick("slickPrev");
  });
  $(".arrowSlider .next").on("click", function () {
    $(this).closest("section").find(".slick-slider").slick("slickNext");
  });
  $(".left_slider").slick({
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    asNavFor: ".right_slider",
  });
  $(".right_slider").slick({
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    variableWidth: true,
    centerMode: false,
    asNavFor: ".left_slider",
  });
  const a_bt = $(".section02 .content_title a");
  const sec_li = $(".section04 .section_img li");
  const target = $(".section02").offset().top;
  const target2 = $(".section04").offset().top;
  const target3 = $(".section05").offset().top;
  const header_h = $("header").innerHeight();

  $(".wheel").click(function () {
    $("html,body").animate({ scrollTop: target - header_h }, 400);
    return false;
  });

  $(a_bt).mouseenter(function () {
    $(this).closest("li").addClass("on").siblings("li").removeClass("on");
  });
  scroll();
  $(window).scroll(function () {
    const scrollT = $(window).scrollTop();
    //console.log(scrollT);
    scroll();
    if (target2 - 150 < scrollT && scrollT < target3) {
      $(sec_li).each(function (eq) {
        var s_li = $(this);
        setTimeout(function () {
          s_li.addClass("in-effect");
        }, eq * 100);
      });
    } else {
      sec_li.removeClass("in-effect");
    }
  });

  $(sec_li).click(function () {
    const idx = $(this).index();
    //console.log(idx);
    $(this).addClass("on").siblings("li").removeClass("on");
    $(".section_txt")
      .find("li")
      .eq(idx)
      .addClass("on")
      .siblings("li")
      .removeClass("on");
  });
});

function scroll() {
  const scrollT = $(window).scrollTop();
  //console.log(scrollT);
  if (scrollT > 0) {
    $("header").addClass("on");
  } else {
    $("header").removeClass("on");
  }
}

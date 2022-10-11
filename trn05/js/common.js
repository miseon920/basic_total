$(function () {
  $(".visual_slider").on(
    "init reInit afterChange",
    function (event, slick, currentSlide) {
      //console.log(currentSlide);
      let cur = $(".slick-current");
      cur.find("a").removeClass("check");
      //console.log(cur);
      cur.addClass("on").siblings().removeClass("on");
      $(".slick-active").addClass("check").prevAll("li").addClass("check");
      $(".slick-active").nextAll("li").removeClass("check");
    }
  );
  $(".visual_slider").slick({
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    useTransform: false,
  });

  //item
  var p_l = $(".product_list .product_box ul li");
  var b_h = $(window).height();
  function pli_v() {
    $(p_l).each(function (eq) {
      var p_li = $(this);
      var l_top = $(p_li).offset().top;
      //console.log(l_top);
      if (eq > 3) {
        $(window).scroll(function () {
          if ($(window).scrollTop() > l_top - b_h) {
            setTimeout(function () {
              p_li.addClass("active");
            }, eq * 200);
          }
        });
      } else {
        p_li.addClass("active");
      }
    });
  }
  pli_v();
  scroll();
  const sec_li = $(".event .inner > div ul li");
  const target2 = $("#event").offset().top;

  /*https://michalsnik.github.io/aos/ [애니메이션] */

  $(window).on("scroll", function () {
    scroll();
    const scrollT = $(this).scrollTop();
    const target3 = parseInt($(".grid_bg").attr("data-height"));
    const real_h = target2 + target3;
    //console.log(scrollT + "/" + target2 + "/" + target3 + "/" + real_h);
    if (scrollT > target2 + target3 - 300) {
      //alert("ggg");
      $(sec_li).each(function (eq) {
        var s_li = $(this);
        setTimeout(function () {
          s_li.addClass("in-effect");
        }, eq * 300);
      });
    } else {
      sec_li.removeClass("in-effect");
    }
  });
  $(window).on("load", function () {
    pli_v();
  });

  $(".top a").on("click", function () {
    $("html,body").animate({ scrollTop: 0 }, 600);
    return false;
  });
});
function scroll() {
  const scrollT = $(window).scrollTop();
  //console.log(scrollT);
  if (scrollT > 0) {
    $("header,.right_lnb").addClass("on");
  } else {
    $("header,.right_lnb").removeClass("on");
  }
}

window.onload = () => {
  masonry_layout();
  document.addEventListener("DOMContentLoaded", function () {
    masonry_layout();
  });
  window.addEventListener("resize", function () {
    masonry_layout();
  });
};
function masonry_layout() {
  const Masonry = document.querySelectorAll(".grid_bg");
  if (!Masonry) {
    return !1;
  }
  const body = document.querySelector("body");
  Masonry.forEach(function (ele) {
    if (body.clientWidth >= 1170) {
      var imgMove = [0, 0, 0, 0];
      var leftWidth = 307.5;
    } else if (body.clientWidth >= 991) {
      var imgMove = [0, 0, 0];
      var leftWidth = body.clientWidth / 3;
    } else if (body.clientWidth >= 480) {
      var imgMove = [0, 0];
      var leftWidth = body.clientWidth / 2;
    } else {
      var imgMove = [0];
      var leftWidth = body.clientWidth;
    }

    const item = ele.getElementsByClassName("grid-item"); // 각 Masonry아이템에 있는 item을 획득
    for (var i = 0; i < item.length; i++) {
      // 각 item에 대해
      const min = imgMove.indexOf(Math.min.apply(0, imgMove)); // imgMove의 배열의 최소값이 있는 인덱스 숫자 획득
      const x = leftWidth * min; // 한행의 넓이 x 인덱스 숫자로 x 좌표 만들기
      const itemHeight = item[i].offsetHeight; // 아이템의 높이를 구하기
      const y = imgMove[min]; // imgMove의 최소값이 있는 배열에 있는 y값을 불러오기
      imgMove[min] += itemHeight + 30; // 최소값의 배열에 아이템의 높이 저장하기. 10은 간격이다.
      item[i].setAttribute(
        "style",
        "transform:translate(" + x + "px," + y + "px)"
      ); // 아이템의 x,y 좌표를 transform으로 지정해주기
    }

    const imgMax = Math.max.apply(0, imgMove); // 최종적으로 아이템배열 최대값 높이를 가져오기
    ele.setAttribute("style", "height:" + imgMax + "px"); // 감싸고 있는 masonry의 높이를 지정해주기
    ele.setAttribute("data-height", imgMax);
  });
}

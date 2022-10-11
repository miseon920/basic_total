$(function () {
  $(".visual_slider").on(
    "init reInit afterChange",
    function (event, slick, currentSlide) {
      //console.log(currentSlide);
      let cur = $(".slick-current");
      cur.find("a").removeClass("check");
      //console.log(cur);
      cur.addClass("on").siblings().removeClass("on");
    }
  );
  $(".visual_slider").slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    customPaging: function (slider, i, src) {
      var thumb = $(slider.$slides[i]).data();
      src = i + 1;
      if (i == "0") {
        i = "토목시공";
      } else if (i == "1") {
        i = "건축시공";
      } else if (i == "2") {
        i = "플랜트시공";
      }
      return (
        '<a href="javascript:void(0);" class="dot"> <img src="./img/visual_dot0' +
        src +
        '.png">' +
        i +
        "</a>"
      );
    },
  });
  $("#full_box").fullpage({
    //options here
    //navigation: true,

    verticalCentered: true,
    anchors: [
      //nav custom
      "first_section",
      "second_section",
      "third_section",
      "fourth_section",
      "five_section",
      "last_gnb",
    ],
    menu: "#gnb",
    afterLoad: function (origin, destination, direction, trigger) {
      var origin = this;
      var idx = destination.index;
      $(".section").eq(idx).addClass("on").siblings().removeClass("on");
      $(".gnb li").eq(idx).addClass("on").siblings().removeClass("on");
      //using index

      if (idx > 0) {
        $("#header").addClass("on");
        on_img("#header");
      } else {
        $("#header").removeClass("on");
        off_img("#header");
      }
      //console.log(idx);
      if (idx == 1 || idx == 4 || idx == 5) {
        $(".gnb").addClass("white");
      } else {
        $(".gnb").removeClass("white");
      }
      if (idx == 2) {
        $("#utb").YTPPlay();
      } else {
        $("#utb").YTPPause();
      }

      if (idx == 5) {
        $(".gnb li")
          .eq(idx - 1)
          .addClass("on");
      }
    },
  });
  jQuery("#utb").YTPlayer({
    videoURL: "https://youtu.be/eKP4g57JHzU",
    containment: ".utb", //재생위치
    autoPlay: false,
    showControls: true,
    mute: true,
    startAt: 0,
    opacity: 1,
    playOnlyIfsible: true,
  });

  $(".utb .zoom").click(function () {
    $("#utb").YTPFullscreen();
    return false;
  });

  //left_slider
  var left_slider = $(".section4 .left_slider ul");
  $(left_slider).on("init afterChange", function (event, slick, currentSlide) {
    // console.log(currentSlide);
    $(".section4 .right_slider figure")
      .eq(currentSlide)
      .fadeIn()
      .siblings()
      .fadeOut();
  });
  $(left_slider).slick({
    arrows: false,
    dots: true,
    autoplay: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    autoplaySpeed: 4000,
    infinite: true,
  });
  $(".custom_play i:first-child").on("click", function () {
    $(left_slider).slick("slickPlay");
  });
  $(".custom_play i:last-child").on("click", function () {
    $(left_slider).slick("slickPause");
  });
  //methods
  //$.fn.fullpage.setAllowScrolling(false);
  var figure = $(".section2 .content ul li figure");
  $(figure).mouseover(function () {
    $(this).find(".hover_txt").addClass("on");
    $(this).parent().siblings().find(".hover_txt").removeClass("on");
  });
  $(figure)
    .find(".hover_txt")
    .mouseleave(function () {
      $(".hover_txt").removeClass("on");
    });
});

function on_img(obj) {
  var o_img = $(obj).find("img").attr("src");
  var real_img = o_img.replace("_off", "_on");
  $(obj).find("img").attr("src", real_img);
}
function off_img(obj) {
  var o_img = $(obj).find("img").attr("src");
  var real_img = o_img.replace("_on", "_off");
  $(obj).find("img").attr("src", real_img);
}

$(function () {
  $(".topBanner i").click(function () {
    $(".topBanner").slideUp();
  });

  $(".mainSlider").on(
    "init afterChange",
    function (event, slick, currentSlide) {
      var current = $(".slick-current");
      //console.log(currentSlide);
      current.addClass("on").siblings().removeClass("on");
      //num _ slideNum
      //console.log(slick);
      var total = slick.slideCount;
      $(".slideNum span").text(
        currentSlide ? currentSlide + 1 + "/" + total : 1 + "/" + total
      );
    }
  );

  $(".mainSlider").slick({
    // autoplay: true,
    dots: true,
    arrows: false,
    pauseOnHover: false,
    pauseOnFocus: false,
  });

  $(".mainArrow i:first-child").click(function () {
    $(".mainSlider").slick("slickPrev");
  });
  $(".mainArrow i:last-child").click(function () {
    $(".mainSlider").slick("slickNext");
  });

  jQuery("#utb").YTPlayer({
    videoURL: "https://youtu.be/lKsmjjyITc0",
    containment: ".utb", //재생위치
    autoPlay: true,
    showControls: false,
    mute: true,
    startAt: 0,
    opacity: 1,
    playOnlyIfsible: true, //동영상위치에 왔을때 재생시키기 위한것
  });

  $(".utb .zoom").click(function () {
    $("#utb").YTPFullscreen();
    return false;
  });

  $(".productSlider").slick({
    arrows: false,
    dots: true,
    slidesToShow: 5,
    centerMode: true,
  });

  $(".productArrows .xi-arrow-left").click(function () {
    $(".productSlider").slick("slickPrev");
  });

  $(".productArrows .xi-arrow-right").click(function () {
    $(".productSlider").slick("slickNext");
  });

  $(".tab_menu li").on("click", function (event) {
    event.preventDefault();
    //console.log($(this), $(this).index(), event.target, event.currentTarget);
    $(".tab_menu li").removeClass("on");
    $(this).addClass("on");
    var idx = $(this).index(); // 0,1,2
    $(".tab_content>div").removeClass("on");
    $(".tab_content>div").eq(idx).addClass("on");
  });

  $(".tab_content .notice li").on("click", function (event) {
    event.preventDefault();
    var idx = $(this).index(); // 0,1,2
    $(".right_content>li").removeClass("on");
    $(".right_content>li").eq(idx).addClass("on");
    console.log(ux);
  });

  $(".toTop").on("click", function () {
    $("html,body").animate({ scrollTop: 0 }, 200);
  });

  $(window).on("scroll", function () {
    var sct = $(window).scrollTop();
    if (sct > 500) {
      $(".toTop").fadeIn(300);
    } else {
      $(".toTop").fadeOut(1000);
    }
  });

  $("#fl").on("change", function () {
    console.log($(this), $(this).val());
    var lnk = $(this).val();
    if (lnk) {
      window.open(lnk);
    }
  });
});

function searchAction() {
  //console.log("gggg?");
  var searchValue = $('#searchForm input[type="text"]').val();
  //console.log(searchValue.length);
  if (searchValue.length < 5 || searchValue == "") {
    alert("최소 5자 이상 입력해 주세요");
    $('#searchForm input[type="text"]').focus();
  } else {
    alert(searchValue);
  }
}

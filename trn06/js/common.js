$(function () {
  //item
  const swiper = new Swiper(".proSwiper", {
    pagination: {
      el: ".swiper-pagination2",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
  });
  /*
  
      // on: {
    //   slideChange: function () {
    //     $(".stop").click();
    //   },
    // },
  */

  /*https://michalsnik.github.io/aos/ [애니메이션] */

  $(".top a").on("click", function () {
    $("html,body").animate({ scrollTop: 0 }, 600);
    return false;
  });
  /*비메오 버튼 컨트롤*/
  vimeo_play_and_stop();

  function vimeo_play_and_stop() {
    var f = $(".vimeo_iframe");
    $(f).each(function (idx) {
      if (!f || !f.attr("src")) return;

      var url = f.eq(idx).attr("src").split("?")[0];
      //console.log(url);
      $(".play").click(function () {
        var data = {
          method: "play",
          value: 1,
        };
        f[0].contentWindow.postMessage(JSON.stringify(data), url);
      });

      $(".stop").click(function () {
        var data = {
          method: "pause",
          value: 1,
        };

        f[0].contentWindow.postMessage(JSON.stringify(data), url);
      });
    });
  }
  //썸네일 swiper - 홀수이며 loop가 아닐때 오류발생
  /*const galleryThumbs = new Swiper('.gallery-thumbs', {
    slidesPerView: 2,
    loopedSlides: 2,
      //centeredSlides: true,
     spaceBetween: 30,
      //freeMode:true,
      //touchRatio: 0.2,
      slideToClickedSlide: true,
      watchSlidesVisibility: true,  

    });  
  const galleryTop = new Swiper('.gallery-top', {
    loopedSlides: 2,

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },      
      pagination: { el: '.gallery-top .swiper-pagination', dynamicBullets: true, clickable: true, renderBullet: function (index, className) { return '<span class="' + className + '">' + (index + 1) + '</span>'; }, }, on: {
       slideChangeTransitionEnd: function () {                
         SetPageNumber(this.activeIndex + 1);
        },
        thumbs: {
        swiper: galleryThumbs,
      },
         
     },

    });
    galleryTop.controller.control = galleryThumbs;
    galleryThumbs.controller.control = galleryTop;*/
  $(".left_slider").on(
    "init afterChange",
    function (event, slick, currentSlide) {
      //console.log(currentSlide);
      if (!currentSlide || currentSlide == 0) {
        //console.log("gg");
        $(".arrows .prev").addClass("on");
      } else {
        $(".arrows .prev").removeClass("on");
      }
      if (currentSlide == 4) {
        //console.log("gg");
        $(".arrows .next").addClass("on");
      } else {
        $(".arrows .next").removeClass("on");
      }
      const total = slick.slideCount;
      $(".page_number").text(currentSlide ? currentSlide + 1 : 1);
    }
  );
  $(".arrows .prev").on("click", function () {
    $(this).closest("section").find(".slick-slider").slick("slickPrev");
  });
  $(".arrows .next").on("click", function () {
    $(this).closest("section").find(".slick-slider").slick("slickNext");
  });
  $(".left_slider").slick({
    arrows: false,
    loop: false,
    infinite: false,
    //autoplay: true,
    //autoplaySpeed: 3000,
    asNavFor: ".right_slider",
  });
  $(".right_slider").slick({
    arrows: false,
    loop: false,
    infinite: false,
    //autoplay: true,
    //autoplaySpeed: 3000,
    slidesToShow: 1,
    variableWidth: true,
    centerMode: false,
    asNavFor: ".left_slider",
  });
  scroll();
  $(window).scroll(function () {
    scroll();
  });
  $(window).resize(function () {
    scroll();
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
// function SetPageNumber(nPageNumber) {
//   document.querySelector(".page_number").innerHTML = nPageNumber;
// }
window.onload = () => {
  AOS.init();

  const btn = document.querySelector(".btn-select");
  const list = document.querySelector(".list-member");
  btn.addEventListener("click", () => {
    btn.classList.toggle("on");
  });
  list.addEventListener("click", (event) => {
    event.preventDefault();
    //console.log(event.target.nodeName);
    if (event.target.nodeName === "A") {
      btn.innerText = event.target.innerText;
      btn.classList.remove("on");
    }
  });
};

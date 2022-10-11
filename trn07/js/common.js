$(function () {
  //item
  const swiper = new Swiper(".viaul_S", {
    slidesPerView: 1,
  });
  const mySwiper = new Swiper(".board_S", {
    loop: true,
    // speed: 1000,
    // autoplay: {
    //   delay: 3000,
    // },
    spaceBetween: 30,
    // effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 3,
    // initialSlide: 1,
    // coverflowEffect: {
    //   rotate: 0,
    //   stretch: 80,
    //   depth: 200,
    //   modifier: 1,
    //   slideShadows: false,
    // },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: {
      init: function () {
        console.log("swiper initialized");
      },
    },
  });
  mySwiper.on("slideChange", function () {
    console.log("slide changed");
  });
  const swiper_P = new Swiper(".swiper_P", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
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

  const li_a = $(".con_tab ul li a");

  $(li_a).on("click", function () {
    const idx = $(this).parent().index();
    $(this).parent().addClass("on").siblings().removeClass("on");
    $(".content_box > div").eq(idx).addClass("on").siblings().removeClass("on");
    return false;
  });

  $(".top a").on("click", function () {
    $("html,body").animate({ scrollTop: 0 }, 600);
    return false;
  });
  scroll();
  $(window).on("scroll", function () {
    scroll();
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
function SetPageNumber(nPageNumber) {
  document.querySelector(".page_number").innerHTML = nPageNumber;
}
// window.onload = () => {
//   const btn = document.querySelector(".btn-select");
//   const list = document.querySelector(".list-member");
//   btn.addEventListener("click", () => {
//     btn.classList.toggle("on");
//   });
//   list.addEventListener("click", (event) => {
//     event.preventDefault();
//     //console.log(event.target.nodeName);
//     if (event.target.nodeName === "A") {
//       btn.innerText = event.target.innerText;
//       btn.classList.remove("on");
//     }
//   });
// };

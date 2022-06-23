const swiper = new Swiper('.swiper', {
  pagination:{
    el: '.swiper-pagination',
    clickable: true,
  },
  grabCursor: true,
  initialSlide: 2,
  autoplay:{
    delay: 2000,
  },
  loop: true,
  speed: 700,
  effect: "cube",
  cubeEffect: {
    shadow: false,
  },
})

const dots = document.querySelectorAll('.swiper-pagination-bullet');
const activeDot = document.querySelector(".swiper-pagination-bullet-active")
const activeNum = activeDot.getAttribute("aria-label")[activeDot.getAttribute("aria-label").length-1]
for(let i = 0; i < activeNum; i++){
  dots[i].classList.add("swiper-pagination-bullet-white")
}

swiper.on('slideChange', function(){
  const activeDot = document.querySelector(".swiper-pagination-bullet-active")
  const activeNum = activeDot.getAttribute("aria-label")[activeDot.getAttribute("aria-label").length-1]
  for(let i = 0; i < activeNum; i++){
    dots[i].classList.add("swiper-pagination-bullet-white")
  }
  for(let i = activeNum; i < 6; i++){
    dots[i].classList.remove("swiper-pagination-bullet-white")
  }
})


const swiper2 = new Swiper('.three__right', {
  grabCursor: true,
  slidesPerView: 1,
  centeredSlides: true,
  slidesPerGroup: 1,
  spaceBetween: 16,
  autoplay:{
    delay: 2000,
    disableOnInteraction: false,
  },
  speed: 400,
  effect: "slide",
  loop: true,
  breakpoints: {
    730: {
      slidesPerView: 1,
    },
    0: {
      slidesPerView: 1.2,
    }
  },
  thumbs:{
    swiper:{
      el: '.list',
      slidesPerView: 5,
      direction: 'vertical',
      spaceBetween: 46,
      slideToClickedSlide: true,
      breakpoints: {
        1240:{
          spaceBetween: 46,
        },
        1140:{
          spaceBetween: 40,
        },
        1000:{
          spaceBetween: 30,
        },
        900:{
          spaceBetween: 25,
        },
        730:{
          el: '.list',
          slidesPerView: 5,
          direction: 'vertical',
          spaceBetween: 46,
          slideToClickedSlide: true,
          spaceBetween: 15,
        },
        0:{
          slidesPerView: 1,
          direction: 'horizontal',
          spaceBetween: 0,
          loop: true,
        }
      }
    }
  }
})
















/**
 * 
const swiper2 = new Swiper('.three__right', {
  grabCursor: true,
  initialSlide: 2,
  slidesPerView: 1,
  slidesPerGroup: 1,
  loopedSlides: 5,
  centeredSlides: true,
  autoplay:{
    delay: 2000,
  },
  loop: true,
  speed: 400,
  effect: "slide",
 
})

const thumbs = new Swiper('.list', {
  slidesPerView: 'auto',
  slidesPerGroup: 1,
  direction: 'vertical',
  initialSlide: 2,
  spaceBetween: 46,
  centeredSlides: true,
  slideToClickedSlide: true,
  loop: true,

})

swiper2.controller.control = thumbs;
thumbs.controller.control = swiper2;
 */
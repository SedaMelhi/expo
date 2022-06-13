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
  }
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
window.addEventListener("load", function() {
  AOS.init();
  this.document.querySelector("body").classList.remove("no-scroll")
  document.querySelector("body").classList.add("animation")
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
    effect: "coverflow",
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
  setTimeout(() => {
    for (let slide of document.querySelectorAll(".swiper-slide")){
      if (!slide.classList.contains("swiper-slide-active")){
        slide.classList.add("swiper-slide-first")
      }
    }   
  }, 2000);
  setTimeout(() => {
    for (let slide of document.querySelectorAll(".swiper-slide")){
      if (!slide.classList.contains("swiper-slide-active")){
        slide.classList.remove("swiper-slide-first")
      }
    }   
  }, 4000);
  const square = this.document.querySelectorAll(".header .square__item")
  const squareLine = this.document.querySelector(".header .square__line")
  let num = 0
  if(this.window.innerWidth > 700){
    let timerId = setInterval(() => {  
      squareLineShow(num, squareLine, square)
      num++
    }, 18)  
    setTimeout(() => { clearInterval(timerId)}, 23*18);
  }
 
}) 

function squareLineShow(num, squareLine, square){
  let timerId = setInterval(() => {  
    randomSquare(num, square)
    num += squareLine.children.length
  }, 18);
  setTimeout(() => { clearInterval(timerId); }, 40*18);
}
function randomSquare(num, square){
  square[num].classList.add("square__bg")
  square[num].classList.add("square__show")
  setTimeout(() => square[num].classList.remove("square__bg"), 400);
}
////////////////////////////////////////////////////////////////////

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



const menu_items = document.querySelectorAll(".menu__item a");
const menu = document.querySelector(".menu")

menu_items.forEach(item => item.addEventListener("click", function (e) {
  
      e.preventDefault();
      let href = this.getAttribute('href').substring(1);
      const scrollTarget = document.getElementById(href);
      const topOffset = menu.offsetHeight;
      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - topOffset;
      window.scrollBy({
          top: offsetPosition,
          behavior: 'smooth'
      });
  
  
}))


const form = document.querySelector(".overlay");
const formClose = document.querySelector(".form__close");
let btn = document.querySelectorAll(".btn")
btn = new Array(...btn)
btn = btn.slice(1)

btn.forEach(item => {
  item.addEventListener("click", function(){
    form.style.display = "flex";
    form.classList.remove("overlay__hidden")
  })
})

form.addEventListener("click", function(e){
  if(e.target == form || e.target == formClose || (new Array(...formClose.childNodes).includes(e.target)) || e.target == formClose){
    form.classList.add("overlay__hidden");
    setTimeout(() => {form.style.display = "none"}, 500)
  }
})

console.log(formClose)
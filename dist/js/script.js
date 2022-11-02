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
    initialSlide: 1,
    autoplay: false,
    loop: true,
    speed: 900,
    effect: "coverflow",
    cubeEffect: {
      shadow: false,
    },
  })
  this.setTimeout(() => swiper.slideNext(900, true), 2000)
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
}) 


////////////////////////////////////////////////////////////////////

const swiper2 = new Swiper('.three__right', {
  grabCursor: true,
  slidesPerView: 1,
  centeredSlides: true,
  slidesPerGroup: 1,
  spaceBetween: 16,
  autoplay:{
    delay: 2500,
    disableOnInteraction: false,
  },
  speed: 900,
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
      let href = this.getAttribute('href');
      if(href[0] == "#"){
        e.preventDefault();
        href = href.substring(1);
        const scrollTarget = document.getElementById(href);
        const topOffset = menu.offsetHeight;
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;
        window.scrollBy({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
      
  
  
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






const module2 = document.querySelector(".opacity__form")
jQuery(document).ready(function (e) {
  jQuery('.send-btn').click( function(e) {
    var form = jQuery(this).closest('form');
    
    if ( form.valid() ) {
     module2.style.display = 'flex';
      var actUrl = form.attr('action');
 
      jQuery.ajax({
        url: actUrl,
        type: 'post',
        dataType: 'html',
        data: form.serialize(),
        success: function(data) {
          form.html(data);
          form.css('opacity','1');
        },
        error:	 function() {
             form.find('.status').html('серверная ошибка');
        }
      });
        e.preventDefault()
    }
  });
 });
const swiperTeam = new Swiper('.team__wrap', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  spaceBetween: 24,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView: 3.5,
  initialSlide: 2,
  centeredSlides: true,
  centeredSlidesBounds: true,
  breakpoints: {
    250:{
      slidesPerView: 1,
    },
    500:{
      slidesPerView: 2,
    },
    600:{
      slidesPerView: 3,
    },
    800:{
      slidesPerView: 3.5,
    },
    
  }
});

const more = document.querySelector(".button"),
      projects = document.querySelector(".project__hidden")

more.addEventListener("click", function() {
  projects.classList.add("project__visible")
  more.style.display = "none"
})



const langRu = document.querySelector(".lang__ru")
const langEn = document.querySelector(".lang__en")





langEn.addEventListener("click", function(){
  if(langRu.classList.contains("lang__active")){
    langRu.classList.remove("lang__active")
  }
  if(!langEn.classList.contains("lang__active")){
    langEn.classList.add("lang__active")
  }
  changeLanguage('en');
})

langRu.addEventListener("click", function(){
  if(langEn.classList.contains("lang__active")){
    langEn.classList.remove("lang__active")
  }
  if(!langRu.classList.contains("lang__active")){
    langRu.classList.add("lang__active")
  }
  changeLanguage('ru');
})


function changeLanguage(hash) {
  for (let key in langText) {
      let elems = document.querySelectorAll('.lng-' + key);
      elems.forEach(elem => {
        if (elem) {
          elem.innerHTML = langText[key][hash];
      }


      })
      

  }
}

changeLanguage('en');
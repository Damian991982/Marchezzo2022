/*Header & Nav */
let navbar = document.querySelector('.header .navbar');
let menuBtn = document.querySelector('#menu-btn');

menuBtn.onclick = () =>{
   menuBtn.classList.toggle('fa-times');
   navbar.classList.toggle('active');
};

window.onscroll = () =>{
   menuBtn.classList.remove('fa-times');
   navbar.classList.remove('active');
};
/*End Header & Nav*/

var swiper = new Swiper(".productos-slider", {
   grabCursor:true,
   loop:true,
   centeredSlides:true,
   autoplay:{
      delay:2500,
      disableOnInteraction:false,

  },
  pagination:{
      el:'.swiper-pagination',
      clickable:true,
  },


   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
});



var swiper = new Swiper(".franquicias-slider", {
   grabCursor:true,
   loop:true,
   centeredSlides:true,
   autoHeight:true,
   spaceBetween: 20,
   autoplay:{
      delay:2500,
      disableOnInteraction:false,

  },
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
   breakpoints: {
      0: {
        slidesPerView: 1,
      },
      700: {
        slidesPerView: 2,
      },
      1000: {
        slidesPerView: 3,
      },
   },
});


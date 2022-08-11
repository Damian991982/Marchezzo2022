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

 /* Slider productos Swiper JS */
 
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

 /* End productos Swiper JS */


 /* Top visualization products */

document.querySelectorAll('.top-image1').forEach(image_1 => {
  image_1.addEventListener('click', () => {
      var src = image_1.getAttribute('src');
      document.querySelector('.big-image1').src = src;
  });
});

document.querySelectorAll('.top-image2').forEach(image_1 => {
  image_1.addEventListener('click', () => {
      var src = image_1.getAttribute('src');
      document.querySelector('.big-image2').src = src;
  });
});

document.querySelectorAll('.top-image3').forEach(image_1 => {
  image_1.addEventListener('click', () => {
      var src = image_1.getAttribute('src');
      document.querySelector('.big-image3').src = src;
  });
});

document.querySelectorAll('.top-image4').forEach(image_1 => {
  image_1.addEventListener('click', () => {
      var src = image_1.getAttribute('src');
      document.querySelector('.big-image4').src = src;
  });
});

/* End Top visualization products */



 /*Slider Sabores Swiper JS*/

 var swiper = new Swiper(".sabores-slider", {
  grabCursor:true,
  loop:true,
  centeredSlides:true,
  spaceBetween: 20,
  pagination: {
     el: ".swiper-pagination",
     clickable: true,
  },
  navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
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



let previewContainer = document.querySelector('.food-preview-container');
let previewBox = previewContainer.querySelectorAll('.food-preview');

document.querySelectorAll('.sabores .slide').forEach(food =>{
  food.onclick = () =>{
     previewContainer.style.display = 'flex';
     let name = food.getAttribute('data-name');
     previewBox.forEach(preveiw =>{
        let target = preveiw.getAttribute('data-target');
        if(name == target){
           preveiw.classList.add('active');
        }
     });
  };
});

previewContainer.querySelector('#close-preview').onclick = () =>{
  previewContainer.style.display = 'none';
  previewBox.forEach(close =>{
     close.classList.remove('active');
  });
};


 /*End Slider Sabores Swiper JS*/


 





 
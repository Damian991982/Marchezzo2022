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




 /* Validar Formulario */


 const NombreApellido = document.getElementById("NomApe");

 const Email = document.getElementById("Mail");

 const Telefono = document.getElementById("Telefono");

 const ExperienciaComercial = document.getElementById("ExpCom");

 const ZonaAbrirLocal = document.getElementById("Zal");

 const DisponeLocalZona = document.getElementById("Dlz");





 NombreApellido.addEventListener("input", function (event) {
  if (NombreApellido.validity.patternMismatch) {
    NombreApellido.setCustomValidity("¡Se esperaba un nombre!");
  } else {
    NombreApellido.setCustomValidity("");
  }
});


Email.addEventListener("input", function (event) {
  if (Email.validity.typeMismatch) {
    Email.setCustomValidity("¡Se esperaba una direccion de correo electronico!");
  } else {
    Email.setCustomValidity("");
  }
});

Telefono.addEventListener("input", function (event) {
  if (Telefono.validity.patternMismatch) {
    Telefono.setCustomValidity("¡Se esperaba una telefono de formato correcto!");
  } else {
    Telefono.setCustomValidity("");
  }
});

ExperienciaComercial.addEventListener("input", function (event) {
  if (ExperienciaComercial.validity.patternMismatch) {
    ExperienciaComercial.setCustomValidity("¡Se esperaba una cadena de formato correcto!");
  } else {
    ExperienciaComercial.setCustomValidity("");
  }
});

ZonaAbrirLocal.addEventListener("input", function (event) {
  if (ZonaAbrirLocal.validity.patternMismatch) {
    ZonaAbrirLocal.setCustomValidity("¡Se esperaba una cadena de formato correcto!");
  } else {
    ZonaAbrirLocal.setCustomValidity("");
  }
});

DisponeLocalZona.addEventListener("input", function (event) {
  if (DisponeLocalZona.validity.patternMismatch) {
    DisponeLocalZona.setCustomValidity("¡Se esperaba una cadena de formato correcto!");
  } else {
    DisponeLocalZona.setCustomValidity("");
  }
});







/* End Validar Formulario */








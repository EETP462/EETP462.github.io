const fabars=document.querySelector(".fa-solid");
const ul=document.querySelector(".ul");
fabars.addEventListener("click", function (){
    ul.classList.toggle("lista");
});
var imgs = document.querySelectorAll('.slider img');
var dots = document.querySelectorAll('.dot');
var currentImg = 0; // index of the first image 
const interval = 3000; // duration(speed) of the slide
function changeSlide(n) {
    for (var i = 0; i < imgs.length; i++) { // reset
      imgs[i].style.opacity = 0;
      dots[i].className = dots[i].className.replace(' active', '');
    }
  
    currentImg = n;
  
    imgs[currentImg].style.opacity = 1;
    dots[currentImg].className += ' active';
  }
function redirigirAPagina() {
    window.location.href = 'ciclos.html';
  }
const navitem= document.querySelectorAll(".navitem");

navitem.forEach(function(item) {

     item.addEventListener("click", function (){

                  ul.classList.remove("lista");

     });

});

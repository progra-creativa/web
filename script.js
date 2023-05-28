// Cursor sacado de https://forum.freecodecamp.org/t/making-an-image-follow-the-cursor/358711/2//
$(document).ready(function(){
  $(document).mousemove(function(e){
    $('img').css('left',e.pageX+"px");
    $('img').css('top',e.pageY+"px");
  });
});
//Efecto de movimiento y opacidad para los parrafos, basado en un video tutorial de Oscar Leuro
window.addEventListener('scroll',function(){

  var alobj = document.querySelectorAll('.caja'); 

    for(var i = 0; i< alobj.length; i++){

      var altura = window.innerHeight/1.8;
      var distancia = alobj[i].getBoundingClientRect().top;
      alobj[i].classList.add('transform_up')


      console.log(altura);
      console.log(distancia);
      if (distancia<= altura){
        alobj[i].classList.add('aparece');
      }

        }

})

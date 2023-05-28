// Cursor sacado de https://forum.freecodecamp.org/t/making-an-image-follow-the-cursor/358711/2//
$(document).ready(function(){
  $(document).mousemove(function(e){
    $('img').css('left',e.pageX+"px");
    $('img').css('top',e.pageY+"px");
  });
});

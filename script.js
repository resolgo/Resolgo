$(document).ready(function() {
    // Mostrar el botón cuando el usuario baja 20px desde la parte superior de la página
    $(window).scroll(function() {
      if ($(this).scrollTop() > 20) {
        $('.scroll-to-top').fadeIn();
      } else {
        $('.scroll-to-top').fadeOut();
      }
    });
    
    // Cuando el usuario hace clic en el botón, vuelve a la parte superior de la página
    $('.scroll-to-top').click(function() {
      $('html, body').animate({scrollTop : 0},800);
      return false;
    });
  });
  
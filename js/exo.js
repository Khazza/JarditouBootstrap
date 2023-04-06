$(document).ready(function() {
  $('.navbar-toggler').click(function() {
    $('html, body').animate({
      scrollTop: $('#navbarScrollBottom').offset().top
    }, 500);
  });
});

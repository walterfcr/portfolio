
$(document).ready(function () {
  // Smooth Scroll Initialization
  smoothScroll.init({
    selector: '.nav-link[href^="#"]',
    speed: 300,
    easing: 'easeInQuart'
  });

  // Initially hide the scroll-to-top button
  $('#flechabtn').hide();

  // Show/hide on scroll
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 100) {
      $('#flechabtn').fadeIn();
      $('#inicio').addClass('nav-bg'); 
    } else {
      $('#flechabtn').fadeOut();
      $('#inicio').removeClass('nav-bg'); 
    }
  });
});

// Scroll to top function
function topFunction() {
  $('html, body').animate({ scrollTop: 0 }, 800); // 800ms smooth scroll
}

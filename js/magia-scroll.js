$(document).ready(function() {
    // Initialize smooth scrolling
    smoothScroll.init({
        selector: '[data-scroll]',
        speed: 100, // 0.1 seconds scroll speed
        easing: 'easeInQuart' // Easing function
    });

    // Hide the ScrollTop button on page load
    $('#flechabtn').hide(); 

    // Scroll event to show/hide the ScrollTop button and modify the navbar
    $(window).scroll(function() {
        scrollFunction();
    });

    // Smooth scroll to top functionality
    $('#flechabtn').click(function(event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 600); // 600ms scroll to top
    });
});

// Function to handle scroll-related UI changes
function scrollFunction() {
    if ($(document).scrollTop() > 180) {
        $('#flechabtn').fadeIn(); // Show the button with fade effect

        $('#navbar').css('marginTop', '7px');
        $('#logo').hide();
        $('#logo2').show().css('paddingLeft', '5%');
        $('#container').css({
            height: '65px',
            backgroundColor: '#020a13',
            width: '100%',
            borderBottom: 'solid #44505d',
            borderLeft: 'solid #44505d',
            borderRight: 'solid #44505d'
        });

    } else {
        $('#flechabtn').fadeOut(); // Hide the button with fade effect

        $('#logo').show();
        $('#navbar').css('marginTop', '30px');
        $('#logo2').hide().css('paddingLeft', 'initial');
        $('#container').css({
            height: 'initial',
            backgroundColor: 'initial',
            borderBottom: 'none',
            borderLeft: 'none',
            borderRight: 'none',
            width: '80%'
        });
    }
}

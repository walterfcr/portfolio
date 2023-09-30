
$(document).ready(function() {
    smoothScroll.init({
        selector: '[data-scroll]',
        //selector: 'a.nav-link', 
        // 2 seg equivale a 2000)  
        speed: 300,
        //aceleraciones
        easing:'easeInQuintQuad',
        //easing: 'easyInCubic'
        //easing: 'easyInOutQuad',
        //easing:'easeInQuart',
        //easing: 'easeInOutCubic',
    });

});

//desaparece el boton ScrollTop al cargar la pagina web
document.getElementById("flechabtn").style.display = "none";
document.getElementById("headerIzq").style.display = "block";
document.getElementById("headerDer").style.width = "80%";
document.getElementById("navbar").style.border = "none";
document.getElementById("navbar").style.padding = "50px 0 0";
document.getElementById("lenguaje").style.display = "block";



//esconder botón ScrollTop (parte superior)
window.onscroll = function() {
    scrollFunction()
};

//funcion scroll
function scrollFunction() {
    if (document.body.scrollTop > 180 || document.documentElement.scrollTop > 180) {
        document.getElementById("flechabtn").style.display = "block";
        document.getElementById("headerIzq").style.display = "none";
        document.getElementById("headerDer").style.width = "100%";
        document.getElementById("navbar").style.borderBottom = "solid #fff";
        document.getElementById("navbar").style.background = "#020a13";
        document.getElementById("navbar").style.borderLeft = "solid #fff";
        document.getElementById("navbar").style.borderRight = "solid #fff";
        document.getElementById("navbar").style.margin = "0 auto";
        document.getElementById("navbar").style.width = "100%";
        document.getElementById("lenguaje").style.display = "none";
        
        
       

    } else {
        document.getElementById("flechabtn").style.display = "none";
        document.getElementById("headerIzq").style.display = "block";
        document.getElementById("headerDer").style.width = "80%";
        document.getElementById("navbar").style.border = "none";
        document.getElementById("navbar").style.background = "none";
        document.getElementById("navbar").style.width = "60%";
        document.getElementById("navbar").style.margin = "30px auto 0";
        document.getElementById("lenguaje").style.display = "block";
        
    }
}

//Funcián Scrolltop (Jquery)
function topFunction() {
    $('a.scroll-top').click(function(event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: 0 });
    });
}
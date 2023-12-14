//Elasticidad botones menu
$(document).ready(function() {
    smoothScroll.init({
        selector: '[data-scroll]',
        //selector: 'a.nav-link', 
        // 2 seg equivale a 2000)  
        speed: 100,
        //aceleraciones
        easing: 'easeInQuart',
        //easing: 'easyInCubic'
        //easing: 'easyInOutQuad',
        //easing:'easeInQuart',
        //easing: 'easeInOutCubic',
    });

});


//desaparece el boton ScrollTop al cargar la pagina web
document.getElementById("flechabtn").style.display = "none";



//esconder botón ScrollTop (parte superior)
window.onscroll = function() {
    scrollFunction()
};

//funcion scroll
function scrollFunction() {
    if (document.body.scrollTop > 180 || document.documentElement.scrollTop > 180) {
        document.getElementById("flechabtn").style.display = "block";
        document.getElementById("navbar").style.marginTop = "7px";
        document.getElementById("logo").style.display = "none";
        document.getElementById("logo2").style.display = "block";
        document.getElementById("logo2").style.paddingLeft = "5%";
        document.getElementById("container").style.height = "65px";
        document.getElementById("container").style.backgroundColor = "#020a13";
        document.getElementById("container").style.width = "100%";
        document.getElementById("container").style.borderBottom = "solid #44505d";
        document.getElementById("container").style.borderLeft = "solid #44505d";
        document.getElementById("container").style.borderRight = "solid #44505d";



    } else {
        document.getElementById("flechabtn").style.display = "none";
        document.getElementById("logo").style.display = "initial";
        document.getElementById("navbar").style.marginTop = "30px";
        document.getElementById("logo2").style.display = "none";
        document.getElementById("logo2").style.paddingLeft = "initial";
        document.getElementById("container").style.height = "initial";
        document.getElementById("container").style.backgroundColor = "initial";
        document.getElementById("container").style.borderBottom = "none";
        document.getElementById("container").style.borderLeft = "none";
        document.getElementById("container").style.borderRight = "none";
        document.getElementById("container").style.width = "80%";
   
    }
}




//Funcián Scrolltop (Jquery)
function topFunction() {
    $('a.scroll-top').click(function(event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: 0 });
    });
}
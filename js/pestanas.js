
let proyectoPestana1 = document.querySelector('#proyectoPestana1');
let proyectoPestana2 = document.querySelector('#proyectoPestana2');
let proyectoPestana3 = document.querySelector('#proyectoPestana3');


function proyectos() {
    document.getElementById("proyectos").style.display = 'block';
    proyectoPestana1.classList.add("activo");
    document.getElementById("disenos").style.display = 'none';
    proyectoPestana2.classList.remove("activo");
    document.getElementById("ilustracion").style.display = 'none';
    proyectoPestana3.classList.remove("activo");

}

function disenos(){
    document.getElementById("proyectos").style.display = 'none';
    proyectoPestana1.classList.remove("activo");
    document.getElementById("disenos").style.display = 'block';
    proyectoPestana2.classList.add("activo");
    document.getElementById("ilustracion").style.display = 'none';
    proyectoPestana3.classList.remove("activo");

}

function ilustracion(){
    document.getElementById("proyectos").style.display = 'none';
    proyectoPestana1.classList.remove("activo");
    document.getElementById("disenos").style.display = 'none';
    proyectoPestana2.classList.remove("activo");
    document.getElementById("ilustracion").style.display = 'block';
    proyectoPestana3.classList.add("activo");

}






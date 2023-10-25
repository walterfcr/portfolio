
let modal = document.getElementById("modal1");
let img = document.getElementById("myImg");
let modalImg = document.getElementById("img01");
let captionText = document.getElementById("caption");

let modal2 = document.getElementById("modal2");
let img2 = document.getElementById("myImg2");
let modalImg2 = document.getElementById("img02");
let captionText2 = document.getElementById("caption2");


img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

img2.onclick = function(){
    modal2.style.display = "block";
    modalImg2.src = this.src;
    captionText2.innerHTML = this.alt;
}

let cerrar = document.getElementsByClassName("close")[0];

cerrar.onclick = function(){
    modal.style.display = "none";
}

let cerrar2 = document.getElementsByClassName("close2")[0];

cerrar2.onclick = function(){
    modal2.style.display = "none";
}



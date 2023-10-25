
let modal = document.getElementById("modal1");
let img = document.getElementById("myImg");
let modalImg = document.getElementById("img01");
let captionText = document.getElementById("caption");

img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

let cerrar = document.getElementsByClassName("close")[0];

cerrar.onclick = function(){
    modal.style.display = "none";
}





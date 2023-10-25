
let modal = document.getElementById("modal1");
let img = document.getElementById("myImg");
let modalImg = document.getElementById("img01");
let captionText = document.getElementById("caption");

let modal2 = document.getElementById("modal2");
let img2 = document.getElementById("myImg2");
let modalImg2 = document.getElementById("img02");
let captionText2 = document.getElementById("caption2");

let modal3 = document.getElementById("modal3");
let img3 = document.getElementById("myImg3");
let modalImg3 = document.getElementById("img03");
let captionText3 = document.getElementById("caption3");

let modal4 = document.getElementById("modal4");
let img4 = document.getElementById("myImg4");
let modalImg4 = document.getElementById("img04");
let captionText4 = document.getElementById("caption4");

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

img3.onclick = function(){
    modal3.style.display = "block";
    modalImg3.src = this.src;
    captionText3.innerHTML = this.alt;
}

img4.onclick = function(){
    modal4.style.display = "block";
    modalImg4.src = this.src;
    captionText4.innerHTML = this.alt;
}

let cerrar = document.getElementsByClassName("close")[0];

cerrar.onclick = function(){
    modal.style.display = "none";
}

let cerrar2 = document.getElementsByClassName("close2")[0];

cerrar2.onclick = function(){
    modal2.style.display = "none";
}

let cerrar3 = document.getElementsByClassName("close3")[0];

cerrar3.onclick = function(){
    modal3.style.display = "none";
}

let cerrar4 = document.getElementsByClassName("close4")[0];

cerrar4.onclick = function(){
    modal4.style.display = "none";
}
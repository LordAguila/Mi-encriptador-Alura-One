//DETALLES
// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"


function encriptar() {
    var texto = document.getElementById("input-text").value;
    texto = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");
    document.getElementById("encrypted-text").value = texto;
}

var boton = document.getElementById("boton-encriptar");
boton.onclick = function () {    
    if(document.getElementById("input-text").value.match(/^[a-z ]*$/)) {
        encriptar();
    } else {
        alert("Solo se permiten letras minusculas, sin caracteres especiales.")
    }

}
function desencriptar() {
    var texto = document.querySelector("#input-text").value;
    texto = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");
    document.getElementById("encrypted-text").value = texto;
}

var boton = document.getElementById("boton-desencriptar");
boton.onclick = function () {
    if(document.getElementById("input-text").value.match(/^[a-z ]*$/)) {
        desencriptar();
    } else {
        alert("Solo se permiten letras minusculas, sin caracteres especiales.")
    }
}
function copiar() {
    navigator.clipboard.writeText(
        document.getElementById("encrypted-text").value
    );
}
document.querySelector("#boton-copiar").addEventListener("click", copiar);

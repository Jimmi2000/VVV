
window.addEventListener('resize', Resize);
function Resize() {

    var altezza = document.getElementById('prima_polaroid').clientHeight; // individua altezza incluso padding (clientHeight)
    document.getElementById('seconda_polaroid').style.height = "" + altezza.toString() + "px"; // tooString rende il valore numerico come letterale e dopo ci affianco px
    document.getElementById('terza_polaroid').style.height = "" + altezza.toString() + "px";  // tooString rende il valore numerico come letterale e dopo ci affianco px

}

window.addEventListener('load', Resize); //lancia la funziona resize al caricamento della pagina
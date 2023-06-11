window.addEventListener('load', Resize); //lancia la funziona resize al caricamento della pagina
window.addEventListener('resize', Resize);//lancia la funziona resize al ridimensionamento della pagina
function Resize() {

    var polaroids = document.getElementsByClassName('polaroid'); // prende tutti gli elementi con quella classe
    for (var i = 0; i < polaroids.length; i++) {  // mi dice di scorrere su tutti gli elementi
        // console.log(polaroids[i].id);
        var id = polaroids[i].id; // prende id polaroid
        var numero = id.substring(8, 100); //prende numero in fondo a id
        var altezza = document.getElementById(id).clientHeight; // individua altezza incluso padding (clientHeight)
        // console.log(altezza);
        document.getElementById('testo' + numero.toString()).style.height = "" + altezza.toString() + "px"; // tooString rende il valore numerico come letterale e dopo ci affianco px
    } //associa altezza presa a testo



}
var immagine = 2; //non fare ripetere due volte prima immagine

var intervalid = window.setInterval(function () {  //imposta intervallo ogni tot millisecondi


    for (var i = 1; i <= 5; i++) { //++ = +1 c'è una variabile i che ogni giro viene implementata i = classe / j= id
        // console.log('test');
        var immagini = document.getElementsByClassName('image' + i.toString());
        // console.log(immagini);
        //  console.log(immagini.length );
        for (var j = 0; j < immagini.length; j++) {
            // console.log(immagini[j]);
            // console.log(j);
            var id = immagini[j].id;
            // console.log(id);
            if (i == immagine) {
                //  console.log('mostra '+id.toString());
                document.getElementById(id).style.display = 'block';
            } else {
                //  console.log('nasconsi '+id.toString());
                document.getElementById(id).style.display = 'none';
            }

        }
    }
    if (immagine == 5) {
        immagine = 1;
    } else {
        immagine = immagine + 1;
    }
    Resize();
}, 3000); //millisecondi intervallo
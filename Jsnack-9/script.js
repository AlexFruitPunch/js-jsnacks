//dichiarazione array vuoto
let Numeri = [];

let Risultato = 0;
let Mediaritm = 0;

//caricamento dell'array
for(i = 0; i < 10; i++){
    Numeri[i] = parseInt(prompt("inserisci un numero"));
}

for(i = 0; i < 10; i++){
    Risultato = Risultato + Numeri[i];
}

Mediaritm = mediaAritmetica(Risultato, Numeri.length);
alert("la media aritmetica dei tuoi numeri è: " + Mediaritm);
document.getElementById("MediArray").innerHTML = Mediaritm;
//Funzioni

function mediaAritmetica(Num, lunghezza) {
    let media = Num / lunghezza;
    return media; 
}
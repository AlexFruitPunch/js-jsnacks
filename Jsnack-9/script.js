//dichiarazione array vuoto
let ArrayNumero = [];
let Numero;

let Summ = 0;
let Mediaritm = 0;

//caricamento dell'array
for(let i = 0; i < 10; i++){
    Numero = parseInt(prompt("inserisci un numero"));
    ArrayNumero.push(Numero);
}

for(let i = 0; i < 10; i++){
    Summ = Summ + ArrayNumero[i];
}

Mediaritm = mediaAritmetica(Summ, ArrayNumero.length);
alert("la media aritmetica dei tuoi numeri è: " + Mediaritm);
document.getElementById("MediArray").innerHTML = Mediaritm;

//Funzioni

function mediaAritmetica(Num, lunghezza) {
    let media = Num / lunghezza;
    return media; 
}
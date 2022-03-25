//dichiarazione array
let Numeri = [1,2,3,4,5,6,7,8,9,10];
let addizione = 0;
alert("Benvenuto in Sommiamo i numeri");
alert("ho una lista di numeri da 1 a 10 e ti dirò quant'è la loro somma");


for(let i = 0; i < Numeri.length; i++){
    addizione = SommaNumeri(Numeri[i], addizione);
}

alert("la Somma dei numeri è: " + addizione);
document.getElementById("SommaArray").innerHTML = addizione;

//Funzioni

function SommaNumeri(Num, somma) {
    somma = Num + somma ;
    return somma;
}

//dichiarazione di un array di numeri e variabile somma
let numeri = [];
let somma = 0; 

alert("inserisci 10 numeri e io te li sommerò");

//ciclo per caricare i numeri nell'array

for(let i = 0; i < 10; i++){
    numeri.push(parseInt(prompt("inserisci un numero")));
}

console.log(numeri);

for(let i = 0; i < numeri.length; i++){
    somma = somma + numeri[i];
}

alert("la somma dei numeri è " + somma);
document.getElementById("SommaNumeri").innerHTML = somma;
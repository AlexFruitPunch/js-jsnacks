//creazione Array vuoto
let Numeri = [];
let SceltaUtente;

alert("Dimmi 6 Numeri, ti dirò quali sono dispari");
for(let i = 0; i < 6; i++){
    SceltaUtente = parseInt(prompt("Inserisci un numero che vuoi")); 
    if(SceltaUtente % 2 == 1){
        Numeri.push(SceltaUtente);
    }
}

console.log(Numeri);
document.getElementById("Dispa").innerHTML = Numeri;
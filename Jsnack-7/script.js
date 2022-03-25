//dichiarazione array vuoto
let Numeri = [];
let SceltaUtente = 0;
//qui l'utente dirà la numerosità dell'array
let Quantita = parseInt(prompt("dimmi quanti numeri vuoi inserire"));

for(let i = 0; i < Quantita; i++){
    SceltaUtente = parseInt(prompt("Dimmi il numero di cui vuoi il Cubo"));
    SceltaUtente = AlCubo(SceltaUtente);
    Numeri.push(SceltaUtente); 
}

document.getElementById("Cubizzati").innerHTML = Numeri;

//Funzioni

function AlCubo(Num) {
    Num = Num ** 3;
    return Num;
}

//dichiaro le due parole

let parola1 = prompt("inserisci la prima parola");
//rimuovo possibili spazi all'inizio e alla fine della stringa
parola1 = parola1.trim();

let parola2 = prompt("inserisci la seconda parola");
//rimuovo possibili spazi all'inizio e alla fine della stringa
parola2 = parola2.trim();

//ricavo la lunghezza delle 2 parole dichiarando e assegnando valori
const LunghezzaP1 = parola1.length;
console.log("la lunghezza della prima parola è: " + parola1.length)

const LunghezzaP2 = parola2.length;
console.log("la lunghezza della prima parola è: " + parola2.length)

if(LunghezzaP1 > LunghezzaP2){
    alert("la parola più corta è: " + parola2);
    alert("la parola più lunga è: " + parola1);
    document.getElementById("la-corta").innerHTML = parola2;
    document.getElementById("la-lunga").innerHTML = parola1;
} else if(LunghezzaP2 > LunghezzaP1){
    alert("la parola più corta è: " + parola1);
    alert("la parola più lunga è: " + parola2);
    document.getElementById("la-corta").innerHTML = parola1;
    document.getElementById("la-lunga").innerHTML = parola2;
} else{
    alert("le due parole sono lunghe uguali");
}

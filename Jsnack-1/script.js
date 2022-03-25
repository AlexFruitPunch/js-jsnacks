//dichiarazione e richiesta dei due numeri da confrontare
const numero1 = parseInt(prompt("inserisci il primo numero"));
const numero2 = parseInt(prompt("inserisci il secondo numero"));
let maggiore;

if(numero1 > numero2){
    maggiore = numero1;
    alert(maggiore + " è il maggiore dei due");
    document.getElementById("il-maggiore").innerHTML = maggiore;
} else if(numero2 > numero1){
    maggiore = numero2;
    alert(maggiore + " è il maggiore dei due");
    document.getElementById("il-maggiore").innerHTML = maggiore;    
} else{
    alert("i due numeri sono uguali");
    document.getElementById("il-maggiore").innerHTML = "i due numeri si equivalgono";
}




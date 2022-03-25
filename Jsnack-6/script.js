//dichiarazione delle due variabili numeri
let NumeroPC;
let NumeroUtente;
//dichiarazione flag
let risultato = false;

alert("Benvenuto in INDOVINA IL NUMERO");
alert("Ora io estrarrò un numero casuale da 0 a 10");
alert("Tu devi dirmi un numero, sempre tra 0 e 10 e vedere se indovinerai");
alert("Uscirai solo finche non vincerai");

//inizio gioco
while(risultato == false){
    //generazione numero randomico da 0 a 10 con controlli 
    NumeroPC = Math.floor(Math.random() * 10);
    console.log("il numero del PC è " + NumeroPC);

    alert("Ho già estratto il mio numero");
    //utente ci dice che numero vuole usare
    NumeroUtente = parseInt(prompt("Dimmi un numero da 0 a 10"));
    console.log("il numero dell'utente è " + NumeroUtente);
    
    if(NumeroUtente >= 0 && NumeroUtente <= 10) {
        if(NumeroPC == NumeroUtente){
            alert("hai vinto !!!");
            risultato = true;
            document.getElementById("Esito").innerHTML = "hai vinto !!!"; 
        } else{
        alert("hai perso mi dispiace, ritenta e sarai più fortunato");
        document.getElementById("Esito").innerHTML = "hai perso mi dispiace !!!";
        }
    } else{
        alert("non va bene, dev'essere un numero compreso tra 0 e 10");
    }    
}
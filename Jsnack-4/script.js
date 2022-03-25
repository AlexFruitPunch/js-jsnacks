let InLista = ["Gatsby", "Marcello", "Johnny", "Fiorella", "Natasha", "Will", "Fernanda"];

alert("benvenuto alla festa del Grande Gatsby");
alert("la festa è a numero chiuso e la farò entrare solo se è in lista");

//richiesta del nome per confronto, con prima lettera maiuscola
let Utente = PrimaLetteraMaiuscola(prompt("Mi dica il suo nome per piacere"));
console.log(Utente);

//Dichiarazione flag
Controllo = false;

//controllo per vedere se l'utente è in lista
for(let i = 0; i < InLista.length; i++){
    if(Utente == InLista[i]){
        alert("Benvenuto alla festa Sig." + Utente);
        Controllo = true;
        break;
    } 
}

if(Controllo == false){
    alert("Mi dispiace ma lei non è in lista");
}







/*FUNZIONI*/

function PrimaLetteraMaiuscola(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
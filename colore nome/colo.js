// 2 - Il software deve chiedere all’utente il suo nome e il sesso con due prompt diversi.
// Sulla pagina html deve apparire “Ciao <nome>“, il colore del nome deve essere azzurro o rosa a seconda del sesso inserito;

// chiedo all'utente il suo nome
var nome = prompt("Inserisci il tuo nome");
document.getElementById('colore').innerHTML = nome;
// chiedo il sesso
var sesso = prompt("Inserisci il tuo sesso");

var element = document.getElementById("colore");


 if(sesso === "maschio"){ // cambio colore in blu se utente è maschio
   element.className = "coloremaschio";

 }else if (sesso === "femmina"){ // cambio colore in rosa se utente è femmina
   element.className = "femmina";

 }else if (sesso != "maschio" || sesso != "femmina"){ // se utente inserisce valori diversi da maschio o femmina
   alert("Inserimento non valido!!!")

 }

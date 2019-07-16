// 1 -  Un alert espone 5 numeri casuali. Da li parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire un prompt alla volta i numeri che ha
// visto precedentemente.Dopo che sono stati inseriti i 5 numeri,
// il software dice quanti e quali dei numeri da indovinare sono stati individuati;
alert("ciao benvenuto in memory");
alert("Ti mostrero 5 numeri...... memorizzali!!! ")
var numArrayca = [];

// ciclo per generare 5 numeri casuali
for( var i = 0 ; i < 5 ; i++ ){
  numArrayca.push(generaNum());
  alert( numArrayca[i] );
}
console.log( numArrayca );

// funzione per generare numero casuale
function generaNum (){
  var ris = Math.floor(Math.random()* (100)+1);
  return ris;
}
// funzione per far inserire a utente 5 numeri
function inserisciNum(){
  var n;
  var cont = 0;
  // creo array per visualizzare i numeri indovinati
  var indovinati = [] ;
  for( var i = 0 ; i < 5 ;i++ ){// ciclo inserimento 5 numeri
    n = parseInt(prompt( "Inserisci il  numero" ));
    for( var  j = 0 ; j < numArrayca.length ; j++){ //ciclo per leggere i numeri gen casualmente presenti nell'array
      if( n == numArrayca[j] ){
        cont += 1;
        indovinati.push(n);
      }
    }
  }
  document.getElementById('punteggio').innerHTML = cont;
  document.getElementById('visualizza').innerHTML = indovinati;
}

setTimeout(inserisciNum, 30000);

var snd = new Audio("song.mp3");
console.log(snd);
snd.play();

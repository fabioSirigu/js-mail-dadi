/* MAIL */
// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

// il gioco non si avvia finchè non c'è il login
const game = document.querySelector ('.game');
game.style.display = 'none';
const gameButton = document.querySelector ('.genera');
gameButton.style.display = 'none';

// creo un array con le mail consentite
const mailListOk = ['approved@mail.com', 'approved2@mail.com', 'approved3@mail.com'];
console.log(mailListOk)

for (let i = 0; i < mailListOk.length; i++) {
      console.log(mailListOk[i]);

      //recupero la mail inserita dall'utente con l'event listener
      const buttonCheck = document.querySelector ('button.btn');
      
      buttonCheck.addEventListener('click', function() {
            const userMail = document.querySelector ('input.form-control').value;
            console.log(userMail);
            
            // se la mail non è corretta non puo' giocare
            if ( userMail !== mailListOk[i]) {
                  alert('La tua mail non è nella lista! Prova con un altra mail!');
            }
            // altrimenti può giocare 
            else if ( userMail === mailListOk[i]){
                  alert('Ok!');
                  game.style.display = 'flex';
                  gameButton.style.display = 'block';
            }
            alert = function () {};
      })
      

}


/* Gioco dei dadi */
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
const computerResult = document.querySelector ('.computer')
const userResult = document.querySelector ('.user')

gameButton.addEventListener('click', function(){
      
      function getRandomInt(max) {
            return Math.floor(Math.random() * max+1);
      }
      console.log(getRandomInt(6));
      
      computerResult.innerHTML = `${getRandomInt(6)}`;
      userResult.innerHTML = `${getRandomInt(6)}`;
      
      // Stabilire il vincitore, in base a chi fa il punteggio più alto.
      const result = document.querySelector ('.result')

      if (computerResult > userResult) {
            result.innerHTML = `Ha vinto il computer!`
            console.log(result + ' computer')
      } else if (computerResult < userResult) {
            result.innerHTML = `Hai vinto!`
            console.log(result + ' user');
      } else {
            result.innerHTML = `Pari!`
            console.log(result + ' pari')
      }
      
})


/* Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve?
Consigli del giorno:
scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
si ma noi cosa vogliamo fare?
torniamo a scrivere in italiano
proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
 */
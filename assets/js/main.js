/* MAIL */
// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

// il gioco non si avvia finchè non c'è il login
const game = document.querySelector ('.game');
game.style.display = 'none';
const gameButton = document.querySelector ('.genera');
gameButton.style.display = 'none';
const result = document.querySelector ('.result')
result.style.display = 'none';

// creo un array con le mail consentite
const mailListOk = ['approved@mail.com', 
'approved2@mail.com', 
'approved3@mail.com'];
console.log(mailListOk)

let outIn = 'email errata, riprova..'

for (let i = 0; i < mailListOk.length; i++) {
      console.log(mailListOk[i]);

      //recupero la mail inserita dall'utente con l'event listener
      const buttonCheck = document.querySelector ('button.btn');
      
      buttonCheck.addEventListener('click', function() {
            const userMail = document.querySelector ('input.form-control').value;
            console.log(userMail);
            
            // se la mail non è corretta non puo' giocare
            if ( userMail === mailListOk[i]) {
                  outIn = 'che vinca il migliore!'
                  game.style.display = 'flex';
                  gameButton.style.display = 'block';
                  result.style.display = 'flex';
            }
            document.getElementById('check_user').innerHTML = outIn;
            }
      )
}

/* Gioco dei dadi */
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
const computerResult = document.querySelector ('.computer');
const userResult = document.querySelector ('.user');

gameButton.addEventListener('click', function(){
      
      function getRandomInt(max) {
            return Math.floor(Math.random() * max+1);
      }
      console.log(getRandomInt(6));
      
      let computerNumber = getRandomInt(6);
      let userNumber = getRandomInt(6);

      computerResult.innerHTML = `${computerNumber}`;
      userResult.innerHTML = `${userNumber}`;
      
      
      // Stabilire il vincitore, in base a chi fa il punteggio più alto.
      
      if (computerNumber > userNumber) {
            result.innerHTML = `Ha vinto il computer!`;
            result.style.background = "rgb(255,255,255)";
            result.style.background = "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,0,0,1) 32%)";

            computerResult.style.background = "rgb(255,255,255)";
            computerResult.style.background = "radial-gradient(circle, rgba(255,255,255,1) 4%, rgba(18,255,0,1) 93%)";

            userResult.style.background = "rgb(255,255,255)";
            userResult.style.background = "radial-gradient(circle, rgba(255,255,255,1) 4%, rgba(255,0,0,1) 93%)";
      } else if (computerNumber < userNumber) {
            result.innerHTML = `Hai vinto!`;
            result.style.background = "rgb(255,255,255)";
            result.style.background = "radial-gradient(circle, rgba(255,255,255,1) 4%, rgba(18,255,0,1) 93%)";

            userResult.style.background = "rgb(255,255,255)";
            userResult.style.background = "radial-gradient(circle, rgba(255,255,255,1) 4%, rgba(18,255,0,1) 93%)";

            computerResult.style.background = "rgb(255,255,255)";
            computerResult.style.background = "radial-gradient(circle, rgba(255,255,255,1) 4%, rgba(255,0,0,1) 93%)";
      } else {
            result.innerHTML = `Pari!`
            result.style.background = "rgb(255,255,255)";
            result.style.background = "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(241,255,0,1) 86%)";

            userResult.style.background = "white";

            computerResult.style.background = "white";
      }
      
})

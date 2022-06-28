let randomNumber = parseInt((Math.random()*100)+1);
const submit = document.querySelector('#submit');
const userInput = document.querySelector('#inpt');
const guessSlot = document.querySelector('#guesses');
const remaining = document.querySelector('#lastResult');
const startOver = document.querySelector('#restart');
const lowOrHi = document.querySelector('#lowOrHi');

const p = document.createElement('p');
let previousGuesses = [];
let numGuesses = 1;
let playGame = true;
let restartBtn = $('#restart');

restartBtn.hide()

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validityGuess(guess);
    });
}

function validityGuess(guess) {
    if (isNan(guess)){
        alert('Please enter a valid number.')
    } else if(guess<1){
        alert('Please enter a number greater than 1.')
    } else if(guess>100){
        alert('Please enter a number less than 100.')
    } else {
        // Kep record of attempted guesses
        previousGuesses.push(guess);
        //check to see if game is over

        if(numGuesses === 11){
            displayGuesses(guess);
            displayMessage(`Game Over! Number was${randomNumber}`);
            endGame();
        } else {
            // display previous guesses numbers
            displayGuesses(guess);
            // check guess and display if wrong

            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    //Display clue if guess is too high or too low

    if (guess === randomNumber){
        displayMessage(`You guessed correctly!`);
        endGame();
    } else if (guess< randomNumber) {
        displayMessage (`Too low! Try Again!`);
    } else if (guess< randomNumber) {
        displayMessage (`Too low! Try Again!`);
    } 
}

function displayGuesses(guess){
    restartBtn.show()

    userInput.value = '';
    guessSlot.innerHTML += `<span class = "guesses">${guess}</span>`
    numGuesses++
    remaining.innerHTML = `${11- numGuesses}`;
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h4>${message}</h4>`;
}

function endGame() {
    //Clear user Input
    userInput.value = '';

    //Disable user input button

    userInput.setAttribute('disabled', '');

    //Display start new game

    p.classList.add('button');
    p.innerHTML = `<input type="submit" id="newGame">Start New Game</inp>`;
    startOver.appendChild(p);

    playGame = false;
    restartBtn.hide();

    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newGame');

    newGameButton.addEventListener("click", function(){
         //Pick a new random number

         randomNumber = parseInt((Math.random()*100)+1);

        previousGuesses = [];
        numGuesses = 1;
        guessSlot.innerHTML = '';
        lowOrHi.innerHTML = '';
        remaining.innerHTML = `${11 - numGuesses}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    })
};

restartBtn.addEventListener('click', function(e) {
        randomNumber = parseInt((Math.random()*100)+1);

        previousGuesses = [];
        numGuesses = 1;
        guessSlot.innerHTML = '';
        lowOrHi.innerHTML = '';
        remaining.innerHTML = `${11 - numGuesses}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
})
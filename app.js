/*
  Wheel of Success Game
*/

// Variables
const startButton = document.querySelector('.btn__reset');
const keyboard = document.getElementById("qwerty");
const phraseDiv = document.getElementById("phrase");
const letterList = phraseDiv.querySelector('ul');
const scoreboard = document.querySelector('#scoreboard');
const screen = document.getElementById('overlay');
const title = document.querySelector('.title');
const tries = document.querySelectorAll('#scoreboard .tries');
let missed = 0;
let letterFound;

// Arrays
const phrases = [
  "May the Force be with you",
  "A Dime a Dozen",
  "A Piece of Cake",
  "Show me the money",
  "My precious"
];
let randomPhrase = [];

// Functions
const getRandomPhraseAsArray = (array) => {
  randomPhrase = array[ Math.floor( Math.random() * array.length ) ];
  randomPhrase = randomPhrase.split('');
  return randomPhrase;
}

const addPhraseToDisplay = (array) => {
 
  for (var i = 0; i < array.length; i += 1) {
    let li = document.createElement('li');
    li.textContent = array[i];
    if ( li.textContent !== ' ' ) {
      li.setAttribute('class', 'letter');
    } else {
      li.setAttribute('class', 'space');
    }
    letterList.appendChild(li);
  }

}

const checkWin = () => {
  let correctLetters = document.querySelectorAll('.show').length;

  for (var i = 0; i < randomPhrase.length; i += 1) {
    let phraseLength = randomPhrase[i];
    if (phraseLength.indexOf(" ") > -1) {
      randomPhrase.splice(i, 1);
      i--;
    }
  }

  if ( correctLetters === randomPhrase.length ) {
    screen.setAttribute("class", "win");
    startButton.style = "display: none;";
    screen.style = "display: flex;";
    scoreboard.style ="display: none;";
    title.textContent = "Woohoo You Won!";
    title.style = "margin: auto;";
  } else if ( missed >= 5 ) {
    screen.setAttribute("class", "lose");
    scoreboard.style ="display: none;";
    startButton.style = "display: none;";
    screen.style = "display: flex;";
    title.textContent = "Tough Luck, You Lost!"
    title.style = "margin: auto";
  }

}

getRandomPhraseAsArray(phrases);
addPhraseToDisplay(randomPhrase);

startButton.addEventListener('click', () => {
  screen.style = "display: none;";

  const checkLetter = (key) => {
    letterFound = false;
    let letters = document.querySelectorAll('.letter');

    for (var i = 0; i < letters.length; i += 1) {
      let letter = letters[i].textContent.toLowerCase();
      if ( key.textContent.toLowerCase() === letter ) {
        let match = letters[i];
        match.setAttribute("class", "letter show");
        letterFound = true;
      }
    }

    if (letterFound == false) {
      let chanceGone = tries[missed];
      chanceGone.style = "opacity: .2;transition: opacity .5s;";
      missed += 1;
    }
    
  }

  keyboard.addEventListener('click', () => {
    if ( event.target.type === 'submit' ) {
      let button = event.target;
      button.setAttribute("class", "chosen");
      button.setAttribute("disabled", "true");
      checkLetter(button);
      checkWin();
    }
  });
});



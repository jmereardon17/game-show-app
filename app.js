/*
  Wheel of Success Game
*/

// Variables
const startButton = document.querySelector('.btn__reset');
const keyboard = document.getElementById("qwerty");
const phraseDiv = document.getElementById("phrase");
const letterList = phraseDiv.querySelector('ul');
const letters = document.getElementsByClassName('.letter');
const scoreboard = document.querySelector('#scoreboard');
const screen = document.getElementById('overlay');
const title = document.querySelector('.title');
const tries = document.querySelectorAll('#scoreboard .tries');
let missed = 0;
let letterFound;

// Arrays
const phrases = [
  "May the Force be with you",
  "I am your father",
  "A Dime a Dozen",
  "A Piece of Cake",
  "Show me the money",
  "My precious",
  "Houston we have a problem",
  "If you build it he will come",
  "Hasta la vista baby",
  "You talking to me",
  "Nobody puts Baby in a corner",
  "To infinity and beyond"
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
    let ul = phrase.firstElementChild;
    ul.appendChild(li);
  }
  if (randomPhrase.length >= 23) {
    let letters = document.querySelectorAll('.letter');
    for (let i = 0; i < letters.length; i += 1) {
      letters[i].style = "width: 45px; height: 45px; line-height: 2;";
    }
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
    winScreen();
  } else if ( missed >= 5 ) {
    screen.setAttribute("class", "lose");
    loseScreen();
  }
}

const resetPhrase = () => {
  phraseDiv.removeChild(phraseDiv.firstElementChild);
  let ul = document.createElement('ul');
  phraseDiv.appendChild(ul);
}

const resetButtons = () => {
  let buttons = document.getElementsByTagName('BUTTON');
  for (let i = 0; i < buttons.length; i += 1) {
    buttons[i].removeAttribute('disabled');
    buttons[i].removeAttribute('class');
  }
}

const resetTries = () => {
  if (missed > 0) {
    for (let i = 0; i < tries.length; i += 1) {
      tries[i].removeAttribute('style');
    }
    missed = 0;
  }
}

getRandomPhraseAsArray(phrases);
addPhraseToDisplay(randomPhrase);

startButton.addEventListener('click', () => {

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



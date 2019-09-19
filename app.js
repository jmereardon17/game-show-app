/*
  Wheel of Success Game
*/

// Create a variable to store the element with the ID of qwerty
const keyboard = document.getElementById("qwerty");

// Create a variable to store the element with the ID of phrase
const phrase = document.getElementById("phrase");

// Create a variable to store the ul element inside of phrase
const ul = phrase.querySelector('ul');

// Create a missed variable, initialized to 0, that you’ll use later to keep track of the number of guesses the player has missed (remember, if the player guesses wrong 5 times, they lose the game)
let missed = 0;

// Create a letterFound variable which you will use later to check if the player's chosen key matches a character in the phrase.
let letterFound;

// Create a variable that stores the start button element
const startButton = document.querySelector('.btn__reset');

// Create an array of phrases of at least 5 different phrases as strings. Make sure that each phrase contains only letters and spaces, so players won’t need to guess punctuation or special characters.
const phrases = [
  "May the Force be with you",
  "A Dime a Dozen",
  "A Piece of Cake",
  "Show me the money",
  "My precious"
];

// Create a variable that will store the random split phrase array
let charArray;

// Create a variable that will store the try list item elements
const tries = document.querySelectorAll('#scoreboard .tries');

// Create function to generate a random phrase with array parameter
const getRandomPhraseAsArray = (arr) => {
  // generate random phrase
  let randomPhrase = arr[ Math.floor( Math.random() * arr.length ) ];
  // split phrase into letters/characters
  charArray = randomPhrase.split('');
  // return the new character array
  return charArray;
}

// Create an addPhraseToDisplay function that loops through an array of characters
const addPhraseToDisplay = (arr) => {

  // For each character in the array create a list item.
  for (var i = 0; i < arr.length; i += 1) {
    let li = document.createElement('li');
    // Put the character inside of the list item
    li.textContent = arr[i];
    // If the value is not a whitespace, add the class "letter" to the list item.
    if ( li.textContent !== ' ' ) {
      li.setAttribute('class', 'letter');
    }
    // Append the list item to the ul in the HTML
    ul.appendChild(li);
  }
}

// Create a checkWin function that checks whether the game has been won or lost
const checkWin = () => {
  // If the number of letters with class "show" is equal to the number of letters with class "letters", Show the overlay screen with the "win" class and appropriate text
  let correctLetters = document.querySelectorAll('show');
  let phraseLength = charArray.length;
  let screen = document.getElementById('overlay');
  let title = document.querySelector('.title');
  startButton.style = "display: none;";
  if ( correctLetters === phraseLength ) {
    screen.setAttribute("class", "win");
    title.textContent = "Woohoo You Won!";
    screen.style = "display: block;";
  }
  // Otherwise, if the number of misses is equal to or greateh than 5, show the overlay screen with the "lose" class and appropriate text
  else if ( missed >= 5 ) {
    screen.setAttribute("class", "lose");
    title.textContent = "Tough Luck, You Lost!"
    screen.style = "display: block;";
  }
}

// Call the getRandomPhraseAsArray function with the phrases array as argument
getRandomPhraseAsArray(phrases);

// Call the addPhraseToDisplay function  with the charArray variable as argument
addPhraseToDisplay(charArray);

// Attach a event listener to the “Start Game” button
startButton.addEventListener('click', () => {
  // When the user clicks on the button, hide the start screen overlay
  startButton.parentElement.style = "display: none;";
  // Create a function to check letters, add a parameter for the key the player clicked on
  const checkLetter = (key) => {
    // Add an initial false value to the letterFound variable
    letterFound = false;
    // Get all list elements with the class "letter"
    let letters = document.querySelectorAll('.letter');
    // Loop over the letters
    for (var i = 0; i < letters.length; i += 1) {

      let letter = letters[i].textContent.toLowerCase();
      // Check if the letter matches the button the player clicked on
      if ( key.textContent.toLowerCase() === letter ) {
        // If there's a match, add the "show" class to the list item containing the letter
        // letter. setAttribute("class", "show");
        let match = letters[i];
        match.setAttribute("class", "letter show");
        // Update the letterFound variable to true
        letterFound = true;
      } // If a match isn't found, check the value of letterFound and create a chanceGone variable that holds the value of the tries missed. Update the chanceGone style so it hides a try and add one to the missed counter variable.
    }
    if (letterFound == false) {
      console.log(tries[missed]);
      let chanceGone = tries[missed];
      chanceGone.style = "display:none;";
      missed += 1;
    }
  }
  // Use event delegation to listen only to button events from the qwerty element (keyboard)
  keyboard.addEventListener('click', () => {
    // When a player chooses a button, add a "chosen" class to that button
    if ( event.target.type === 'submit' ) {
      let button = event.target;
      button.setAttribute("class", "chosen");
      button.setAttribute("disabled", "true");
      checkLetter(button);
      // Check the value of the letterFound variable. If the value is null, remove one try from the scoreboard.
      checkWin();
    }
  });
});



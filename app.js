/*
  Wheel of Success Game
*/

// Create a variable to get the element with the ID of qwerty
const keyboard = document.getElementById("qwerty");

// Create a variable to get the element with the ID of phrase
const phrase = document.getElementById("phrase");

// Create a missed variable, initialized to 0, that you’ll use later to keep track of the number of guesses the player has missed (remember, if the player guesses wrong 5 times, they lose the game)
let missed = 0;

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

let charArray;
const ul = document.querySelector('#phrase ul');

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
    // Get all list elements with the class "letter"
    let letters = document.querySelectorAll('.letter');
    // Loop over the letters
    for (var i = 0; i < letters.length; i += 1) {
      let letter = letters[i].toLowerCase();
      // Check if the letter matches the button the player clicked on
      if ( key.indexOf(letter) ) {
        // If there's a match, add the "show" class to the list item containing the letter
        letter.setAttribute("class", "show");
      } // If a match isn't found, return "null"
      else {
        return null;
      }
      // Use event delegation to listen only to button events from the qwerty element (keyboard)
      key.addEventListener('click', () => {
        // When a player chooses a button, add a "chosen" class to that button
        
      });

    }
  }
});



const winScreen = () => {
  // Remove any previous h3 elements from past games
  $('h3').remove();
  // Hide the start button
  $('.btn__reset').hide();
  // Fade and slide out the scoreboard
  $('#scoreboard').fadeOut(700);
  scoreboard.style = "transition: transform .5s cubic-bezier(0.950, 0.050, 0.795, 0.035); transform: translateY(100%);";
  // Fade out the letter ul element
  $('#phrase ul').delay(1000).fadeOut();
  // Fade In win screen
  $('.win').delay(1400).fadeIn(600, 'linear');
  // Update text content
  $('.title').text('You Guessed It!');
  // Add a h3 element to the page
  let h3 = document.createElement('h3');
  h3.innerText = ('Play Again?');
  screen.appendChild(h3);
  // Show the start button with updated text
  $('.btn__reset').show().text('Reset Game');
  // Add an event listener to the button to reset the game
  $('.btn__reset').click( function() {
    resetPhrase();
    resetButtons();
    resetTries();
    getRandomPhraseAsArray(phrases);
    addPhraseToDisplay(randomPhrase);
    $('#phrase').hide().delay(600).fadeIn(1500, 'linear');
    $('#phrase ul').show();
    scoreboard.style = "transform: translateX(0); opacity: 1; display: block;";
  });
}

const loseScreen = () => {
  // Remove any previous h3 elements from past games
  $('h3').remove();
  // Hide the start button
  $('.btn__reset').hide();
  // Fade and slide out the scoreboard
  $('#scoreboard').fadeOut(700);
  scoreboard.style = "transition: transform .5s cubic-bezier(0.950, 0.050, 0.795, 0.035); transform: translateY(100%);";
  // Fade out the letter ul element
  $('#phrase ul').delay(1000).fadeOut();
  // Fade in lose screen
  $('.lose').delay(1400).fadeIn(600, 'linear');
  // Update text content
  $('.title').text('Boo! Go Watch More Movies!');
  // Add a h3 element to the page
  let h3 = document.createElement('h3');
  h3.innerText = ('Dare To Give It Another Go?');
  screen.appendChild(h3);
  // Show the start button with updated text
  $('.btn__reset').show().text('Try Again');
  // Add an event listener to the button to reset the game
  $('.btn__reset').click( function() {
    resetPhrase();
    resetButtons();
    resetTries();
    getRandomPhraseAsArray(phrases);
    addPhraseToDisplay(randomPhrase);
    $('#phrase').hide().delay(600).fadeIn(1500, 'linear');
    $('#phrase ul').show();
    scoreboard.style = "transform: translateX(0); opacity: 1; display: block;";
  });
}

$('.btn__reset').click(function() {
  // Hide the Start screen overlay
  $('#overlay').fadeOut(600, 'linear');
  // Hide the phrase and fade it in
  $('#phrase').hide().delay(600).fadeIn(1500, 'linear');
});



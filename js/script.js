//Select the guessed letters
const guessedLetters = document.querySelector(".guessed-letters");
//Select the guess button
const guessButton = document.querySelector(".guess");
//Select the text input
const letterInput = document.querySelector(".letter");
//Select the word in progress paragraph
const wordInProgress = document.querySelector(".word-in-progress");
//Select the remaining guesses paragraph
const remainingGuesses = document.querySelector(".remaining");
//Select the span element
const guessesSpan = document.querySelector(".remaining span");
//Select the message paragraph
const message = document.querySelector(".message");
//Select the Play Again button
const playAgainButton = document.querySelector(".play-again");

//Create a variable for the starting word
const word = "magnolia";

//Write a Function to Add Placeholders for Each Letter
const placeholder = function(word) {
  const placeholderLetters = [];

  for (let letter of word) {
    console.log(letter);
    placeholderLetters.push("●");
  }
  wordInProgress.innerText = placeholderLetters.join("");
};
placeholder(word);

//Add an Event Listener for the Guess Button
guessButton.addEventListener("click", function(e){
  e.preventDefault();
  const guess = letterInput.value;
  console.log(guess);
  letterInput.value = "";
});

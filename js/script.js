//Select the guessed letters element
const guessedLettersElement = document.querySelector(".guessed-letters");
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
//Add a variable for Player Guesses
const guessedLetters = [];

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
  message.innerText = "";
  const guess = letterInput.value;
  const goodGuess = checkInput(guess);
  //console.log(goodGuess);

  if (goodGuess) {
    makeGuess(guess);
  }
  letterInput.value = "";
});

//Create a Function to Check Player's Input
const checkInput = function(input) {
  //Insert a regular expression
  const acceptedLetter = /[a-zA-Z]/;

  if(input.length === 0) {
    message.innerText = "Please enter a letter.";
  } else if (input.length > 1) {
    message.innerText = "Please enter a single letter.";
  } else if (!input.match(acceptedLetter)) {
    message.innerText = "Please enter a letter from A to Z.";
  } else {
    return input;
  }
};

//Create a Function to Capture Input
const makeGuess = function(guess) {
  guess = guess.toUpperCase();

  if (guessedLetters.includes(guess)){
    message.innerText = "You already guessed that letter, silly! Try again.";
  } else {
    guessedLetters.push(guess);
    console.log(guessedLetters);
    displayGuesses();
    updateWordInProgress(guessedLetters);
  }
};

//Create a Function to Show the Guessed Letters
const displayGuesses = function() {
  guessedLettersElement.innerHTML = "";

  for(let item of guessedLetters) {
    const listItem = document.createElement("li");
    listItem.innerText = item;
    guessedLettersElement.append(listItem);
  }
};

//Create a Function to Update the Word in Progress
const updateWordInProgress = function(guessedLetters) {
  const wordUpper = word.toUpperCase();
  const wordArray = wordUpper.split("");
  console.log(wordArray);
  const updatedCharacters = [];

  for (let letter of wordArray) {
    if (guessedLetters.includes(letter)) {
      updatedCharacters.push(letter.toUpperCase());
    } else {
      updatedCharacters.push("●");
    }
  }
  wordInProgress.innerText = updatedCharacters.join("");
  winner();
};

//Create a Function to Check If the Player Won
const winner = function() {
  if (word.toUpperCase() === wordInProgress.innerText) {
    message.classList.add("win");
    message.innerHTML = `<p class="highlight">You guessed correct the word! Congrats!</p>`;
  }
};

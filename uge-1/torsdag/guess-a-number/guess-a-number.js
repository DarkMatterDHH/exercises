let currentGuess = 50;
let min = 1;
let max = 100;
let guessCount = 0;
const guessDisplay = document.getElementById("guess");
const higherButton = document.getElementById("higher");
const lowerButton = document.getElementById("lower");
const correctButton = document.getElementById("correct");
const resetButton = document.getElementById("start");

function showGuess() {
  guessDisplay.textContent = `is the number ${currentGuess}?`;
  guessCount++;
  document.getElementById("result").textContent = `Guesses: ${guessCount}`;
}

showGuess();

higherButton.addEventListener("click", () => {
  min = currentGuess + 1;

  currentGuess = Math.floor((min + max) / 2);
  showGuess();
});

lowerButton.addEventListener("click", () => {
  max = currentGuess - 1;

  currentGuess = Math.floor((min + max) / 2);
  showGuess();
});

correctButton.addEventListener("click", () => {
  guessDisplay.textContent = `I guessed it! The number is ${currentGuess}.`;
  higherButton.disabled = true;
  lowerButton.disabled = true;
  correctButton.disabled = true;
  resetButton.disabled = false;
  document.getElementById("result").textContent =
    `Total guesses: ${guessCount}`;
});

resetButton.addEventListener("click", () => {
  currentGuess = 50;
  min = 1;
  max = 100;
  guessCount = -1;
  document.getElementById("result").textContent = "";
  guessDisplay.textContent = "";
  higherButton.disabled = false;
  lowerButton.disabled = false;
  correctButton.disabled = false;
  showGuess();
});

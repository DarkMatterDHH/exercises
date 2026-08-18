random = Math.round(Math.random() * 100);

function getRandomNumber() {
  console.log(random);
}

function placeNumber() {
  let number = document.querySelector("#randomNumber");
  number.textContent = random;
}

getRandomNumber();

button = document.querySelector("#generate-button");
button.addEventListener("click", placeNumber);

let counter = 0;
guessButton = document.querySelector("#guess-button");
guessButton.addEventListener("click", function () {
  counter++;
  document.querySelector("#counter").textContent = counter;
  guessInput = document.querySelector("#guess-input");
  if (guessInput.value > random) {
    document.querySelector("#randomNumber").textContent =
      "Your guess is too high!";
  } else if (guessInput.value < random) {
    document.querySelector("#randomNumber").textContent =
      "Your guess is too low!";
  } else {
    document.querySelector("#randomNumber").textContent =
      "Congratulations! You guessed the right number.";
  }
});

let countWin = 0;
let countLose = 0;
let countTie = 0;
const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
const players = document.querySelector(".player");
const buttons = document.querySelectorAll("button");

function computer() {
  let randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

async function playGame(playerChoice) {
  computer();
  let computerChoice = computer();
  let result = "";

  if (playerChoice === computerChoice) {
    result = "It's a tie!";
    countTie++;
    document.getElementById("draw").classList.remove("hidden");
    setTimeout(() => {
      document.getElementById("draw").classList.add("hidden");
    }, 3000);
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    result = "You win!";
    countWin++;
    document.getElementById("win").classList.remove("hidden");
    setTimeout(() => {
      document.getElementById("win").classList.add("hidden");
    }, 3000);
  } else {
    result = "You lose!";
    countLose++;
    document.getElementById("lose").classList.remove("hidden");
    setTimeout(() => {
      document.getElementById("lose").classList.add("hidden");
    }, 3000);
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", async () => {
    playGame(button.className);
    console.log(`Wins: ${countWin}, Losses: ${countLose}, Ties: ${countTie}`);
    player1.classList.remove("rock", "paper", "scissors");
    player2.classList.remove("rock", "paper", "scissors");
    player1.classList.add("shake");
    player2.classList.add("shake");
    setTimeout(() => {
      player1.classList.remove("shake");
      player2.classList.remove("shake");
      player1.classList.add(button.className);
      player2.classList.add(computer());
    }, 3000);
  });
});

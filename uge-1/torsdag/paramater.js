"use strict";
let computerensValg;
let brugerenssValg;

const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
const valg = ["rock", "paper", "scissors"];

const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");

rockBtn.addEventListener("click", rockClicked);
paperBtn.addEventListener("click", paperClicked);
scissorsBtn.addEventListener("click", scissorsClicked);
function rockClicked() {
  //console.log("ROCK CLICKED");
  traefferValg("rock");
}
function paperClicked() {
  //console.log("PAPER CLICKED");
  traefferValg("paper");
}
function scissorsClicked() {
  //console.log("SCISSORS CLICKED");
  traefferValg("siccors");
}

function traefferValg(choice) {
  brugerenssValg = choice;
  computerensValg = valg[Math.floor(Math.random() * valg.length)];
  nedTaelling();
}

function nedTaelling() {
  player1.classList.add("shake");
  player2.classList.add("shake");
  player1.addEventListener("animationend", visValg);
}

function visValg() {
  afgoerResultatet();
}

function afgoerResultatet() {
  console.log("brugerenssValg", brugerenssValg);
  console.log("computerensValg", computerensValg);
}

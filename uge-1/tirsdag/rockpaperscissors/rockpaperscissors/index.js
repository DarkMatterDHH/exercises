"use strict";
let computerensValg = "";
let spillerensValg = "";
const rockBtn = document.querySelector(".rock");
const scissorsBtn = document.querySelector(".scissors");
const paperBtn = document.querySelector(".paper");
const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
const valg = ["rock", "scissors", "paper"];

rockBtn.addEventListener("click", rockClicked);
scissorsBtn.addEventListener("click", scissorsClicked);
paperBtn.addEventListener("click", paperClicked);

function rockClicked() {
  spillerensValg = "rock";
  traefervalg();
  nedtelling();
}

function scissorsClicked() {
  spillerensValg = "scissors";
  traefervalg();
  nedtelling();
}

function paperClicked() {
  spillerensValg = "paper";
  traefervalg();
  nedtelling();
}

function traefervalg() {
  computerensValg = valg[Math.floor(Math.random() * valg.length)];
  visValg();
}

function nedtelling() {
  player1.classList.remove("rock", "saks", "papir");
  player2.classList.remove("rock", "saks", "papir");
  player1.classList.add("shake");
  player2.classList.add("shake");
  player1.addEventListener("animationend", visValg);
}
function visValg() {
  player1.classList.remove("shake");
  player2.classList.remove("shake");
  player1.classList.add(spillerensValg);
  player2.classList.add(computerensValg);
  console.log("Computerens valg: " + computerensValg);
  console.log("Spillerens valg: " + spillerensValg);
  setTimeout(() => {
    result();
  }, 3000);
}

function result() {
  if (spillerensValg === computerensValg) {
    console.log("Uavgjort!");
    document.getElementById("draw").classList.remove("hidden");
    setTimeout(() => {
      document.getElementById("draw").classList.add("hidden");
    }, 3000);
  } else if (
    (spillerensValg === "rock" && computerensValg === "scissors") ||
    (spillerensValg === "scissors" && computerensValg === "paper") ||
    (spillerensValg === "paper" && computerensValg === "rock")
  ) {
    console.log("Spiller 1 vinner!");
    document.getElementById("win").classList.remove("hidden");
    setTimeout(() => {
      document.getElementById("win").classList.add("hidden");
    }, 3000);
  } else if (
    (computerensValg === "rock" && spillerensValg === "scissors") ||
    (computerensValg === "scissors" && spillerensValg === "paper") ||
    (computerensValg === "paper" && spillerensValg === "rock")
  ) {
    console.log("Computer vinner!");
    document.getElementById("lose").classList.remove("hidden");
    setTimeout(() => {
      document.getElementById("lose").classList.add("hidden");
    }, 3000);
  }
}

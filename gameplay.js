"use strict";

const diceRoll = document.querySelector(".btn--roll");
const holdBtn = document.querySelector(".btn--hold");
const dice = document.querySelector(".dice");
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");

let activePlayer = 0;
let roll = 0;
let score = 0;
let playerScore = [0, 0];

// Calculates the score depending on active player
let currentPlayerScore = function (player) {
  if (player == 0) {
    score = document.getElementById("current--0").textContent;
    document.getElementById("current--0").textContent = Number(score) + roll;
    score = Number(score) + roll;
  } else {
    score = document.getElementById("current--1").textContent;
    document.getElementById("current--1").textContent = Number(score) + roll;
    score = Number(score) + roll;
  }
};

// function to switch player
const switchPlayer = function () {
  score = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer == 0 ? (activePlayer = 1) : (activePlayer = 0);
  player0.classList.toggle("player--active");
  player1.classList.toggle("player--active");
};

// functionality when roll dice btn clicked
diceRoll.addEventListener("click", function () {
  // The ~~ rounds positive numbers like Math.floor()
  let diceNum = ~~(Math.random() * 6 + 1);
  // Changes img relating to random diceNum
  dice.src = `imgs/dice-${diceNum}.png`;
  roll = diceNum;

  // Check if 1 rolled
  if (diceNum != 1) {
    currentPlayerScore(activePlayer);
  } else {
    // changes active player if 1 rolled
    switchPlayer();
  }
});

// functionality when hold button clicked
holdBtn.addEventListener("click", function () {
  playerScore[activePlayer] += score;
  document.getElementById(`score--${activePlayer}`).textContent =
    playerScore[activePlayer];
  if (playerScore[activePlayer] >= 10) {
    document.getElementById(`score--${activePlayer}`).textContent = "WINS 🎉";
    document.getElementById(`score--${activePlayer}`).style.fontSize = "6rem";

    // disables buttons once game won
    diceRoll.setAttribute("disabled", "");
    holdBtn.setAttribute("disabled", "");
  } else {
    switchPlayer();
  }
});

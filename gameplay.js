"use strict";

const diceRoll = document.querySelector(".btn--roll");
const holdBtn = document.querySelector(".btn--hold");
const newGame = document.querySelector(".btn--new");
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
  togglePlayers();
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
  if (playerScore[activePlayer] >= 100) {
    document.getElementById(`score--${activePlayer}`).textContent = "WINS 🎉";
    document.getElementById(`score--${activePlayer}`).style.fontSize = "6rem";

    // disables buttons once game won
    diceRoll.setAttribute("disabled", "");
    holdBtn.setAttribute("disabled", "");
  } else {
    switchPlayer();
  }
});

const togglePlayers = function () {
  player0.classList.toggle("player--active");
  player1.classList.toggle("player--active");
};

// resets game
const reset = function () {
  roll = 0;
  score = 0;
  playerScore = [0, 0];
  activePlayer = 0;
  document.getElementById(`score--0`).textContent = 0;
  document.getElementById(`score--1`).textContent = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  diceRoll.removeAttribute("disabled");
  holdBtn.removeAttribute("disabled");

  // toggles back to player 1
  if (player1.classList.contains("player--active")) togglePlayers();
};

// calls reset when new game clicked
newGame.addEventListener("click", reset);

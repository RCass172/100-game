"use strict";

const diceRoll = document.querySelector(".btn--roll");
const dice = document.querySelector(".dice");
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");

let activePlayer = 0;
let roll = 0;

// Calculates the score depending on active player
let currentPlayerScore = function (player) {
  if (player == 0) {
    let score = document.getElementById("current--0").textContent;
    document.getElementById("current--0").textContent = Number(score) + roll;
  } else {
    let score = document.getElementById("current--1").textContent;
    document.getElementById("current--1").textContent = Number(score) + roll;
  }
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
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer == 0 ? (activePlayer = 1) : (activePlayer = 0);
    player0.classList.toggle("player--active");
    player1.classList.toggle("player--active");
  }
});

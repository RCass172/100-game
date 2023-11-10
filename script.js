"use strict";

const btnPlay = document.querySelector(".btn--play");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

// closes name entry modal
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// opens name entry modal
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

// Functionality when play button is clicked to display names
btnPlay.addEventListener("click", function () {
  // Gets value for each input
  const playerOneName = document.querySelector(".playerOne").value;
  const playerTwoName = document.querySelector(".playerTwo").value;

  // Displays name input or default value if empty
  document.querySelector("#name--0").textContent =
    playerOneName === "" ? "🦄 Player 1" : `🦄 ${playerOneName}`;
  document.querySelector("#name--1").textContent =
    playerTwoName === "" ? "🐲 Player 2" : `🐲 ${playerTwoName}`;

  closeModal();
});

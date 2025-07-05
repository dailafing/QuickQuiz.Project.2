/*jslint browser */

import { showScreen, initGame } from "./gameManager.js";

function initEventBindings() {
  const startBtn = document.getElementById("startBtn");
  const playerNameInput = document.getElementById("playerName");
  const nameError = document.getElementById("nameError");

  playerNameInput.addEventListener("input", function () {
        if (playerNameInput.value.trim() !== "") {
            playerNameInput.classList.remove("input-invalid");
            nameError.textContent = "";
        }
  });

  startBtn.addEventListener("click", function () {
    const name = playerNameInput.value.trim();

    if (name === "") {
        playerNameInput.classList.add("input-invalid");
        nameError.textContent = "Please enter your name!"; // Criteria 1.4 — visible validation message
        playerNameInput.focus();
        return;
    }

    // Clear validation if name is present
    playerNameInput.classList.remove("input-invalid");
    nameError.textContent = "";

    // Start game
    showScreen("game-screen");
    initGame(name);
  });


}

document.addEventListener("DOMContentLoaded", initEventBindings);

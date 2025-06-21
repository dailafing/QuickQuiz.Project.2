import { showScreen, initGame } from './gameManager.js';

document.addEventListener('DOMContentLoaded', () => {
  const startBtn = document.getElementById('startBtn');
  const playerNameInput = document.getElementById('playerName');

  playerNameInput.addEventListener('input', () => {
        if (playerNameInput.value.trim() !== '') {
            playerNameInput.classList.remove('input-invalid');
            nameError.textContent = '';
        }
  });

  startBtn.addEventListener('click', () => {
    const name = playerNameInput.value.trim();
    const nameError = document.getElementById('nameError');

    if (name === '') {
        playerNameInput.classList.add('input-invalid');
        nameError.textContent = 'Please enter your name!'; // Criteria 1.4 — visible validation message
        playerNameInput.focus();
        return;
    }

    // Clear validation if name is present
    playerNameInput.classList.remove('input-invalid');
    nameError.textContent = '';

    // Start game
    showScreen('game-screen');
    initGame(name);
  });    


});

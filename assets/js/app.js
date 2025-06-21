import { showScreen, initGame } from './gameManager.js';

document.addEventListener('DOMContentLoaded', () => {
  const startBtn = document.getElementById('startBtn');
  const playerNameInput = document.getElementById('playerName');

  startBtn.addEventListener('click', () => {
    const name = playerNameInput.value.trim();

    if (name === '') {
      alert('Please enter your name!');
      playerNameInput.focus();
      return;
    }

    // Start game
    showScreen('game-screen');
    initGame(name);
  });
});

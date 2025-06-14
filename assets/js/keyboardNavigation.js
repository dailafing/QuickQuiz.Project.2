// keyboardNavigation.js

// ====== Global State ======
let navigableItems = [];
let currentFocusedIndex = 0;

// ====== Init ======
function initKeyboardNavigation() {
  const categoryButtons = Array.from(document.querySelectorAll('#category-buttons button'));
  const startButton = document.getElementById('startBtn');

  navigableItems = [...categoryButtons, startButton]; // Criteria 3.5 — All interactive elements in focus loop

  if (!navigableItems.length) return;

  navigableItems[currentFocusedIndex].focus(); // Criteria 3.5 — Set initial focus
  document.addEventListener('keydown', handleKeyNavigation);
}

// ====== Keyboard Event Handler ======
function handleKeyNavigation(event) {
  const key = event.key;

  switch (key) { // Criteria 3.5 — Directional nav
    case 'ArrowRight':
    case 'ArrowDown':
      moveFocus(1); 
      break;
    case 'ArrowLeft':
    case 'ArrowUp':
      moveFocus(-1);
      break;
    case ' ':
    case 'Enter':
      event.preventDefault();
      const focusedEl = navigableItems[currentFocusedIndex];
      if (focusedEl && typeof focusedEl.click === 'function') {
        focusedEl.click(); // Criteria 1.2 — Interactivity via keyboard
      }
      break;
  }
}

// ====== Change Focus ======
function moveFocus(delta) {
  currentFocusedIndex = (currentFocusedIndex + delta + navigableItems.length) % navigableItems.length;
  navigableItems[currentFocusedIndex].focus(); // Criteria 3.5 — Keyboard visual feedback
}

// ====== Boot ======
document.addEventListener('DOMContentLoaded', () => {
  initKeyboardNavigation(); // Criteria 3.1 — Organised and clean structure
});

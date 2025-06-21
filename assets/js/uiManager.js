// uiManager.js

// Criteria 1.2, 1.5, 3.2, 3.5 — Accessible, keyboard-friendly UI with visible category selection
(function () {
    const categoryButtons = document.querySelectorAll('#category-buttons button');
    const selectedCategoryText = document.getElementById('selectedCategoryText');
    const startBtn = document.getElementById('startBtn');
  
    let currentlySelectedButton = null;
  
    function handleCategorySelection(button) {
      // Remove 'selected' class from previous
      if (currentlySelectedButton) {
        currentlySelectedButton.classList.remove('selected');
      }
  
      // Add 'selected' class to new
      button.classList.add('selected');
      currentlySelectedButton = button;
  
      // Update visible text confirmation
      selectedCategoryText.textContent = button.textContent + " selected. Tap Start Game to play!";
      selectedCategoryText.style.display = 'block'; // Criteria 1.5 — textual feedback for accessibility

      // Enable Start button after first valid selection
      if (startBtn.disabled) {
        startBtn.disabled = false;  // Criteria 3.2 — user now in control
        startBtn.classList.remove('start-button--disabled');
      }

    }
  
    function initCategoryButtons() {
      categoryButtons.forEach(button => {
        // Mouse click handler
        button.addEventListener('click', () => handleCategorySelection(button));
  
        // Keyboard handler for Enter or Space
        button.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleCategorySelection(button);
          }
        });
      });
    }
  
    // Call immediately on load to avoid dom problems
    document.addEventListener('DOMContentLoaded', initCategoryButtons);
  })();
  
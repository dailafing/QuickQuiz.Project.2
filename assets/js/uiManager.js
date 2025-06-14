// uiManager.js

// Criteria 1.2, 1.5, 3.2, 3.5 — Accessible, keyboard-friendly UI with visible category selection
(function () {
    const categoryButtons = document.querySelectorAll('#category-buttons button');
    const selectedCategoryText = document.getElementById('selectedCategoryText');
    const selectedCategoryValue = document.getElementById('selectedCategoryValue');
  
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
      selectedCategoryValue.textContent = button.textContent;
      selectedCategoryText.style.display = 'block'; // Criteria 1.5 — textual feedback for accessibility
    }
  
    function initCategoryButtons() {
      categoryButtons.forEach(button => {
        // Mouse click handler
        button.addEventListener('click', () => handleCategorySelection(button));
  
        // Keyboard handler for Enter or Space
        button.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault(); // Prevent scroll
            handleCategorySelection(button);
          }
        });
      });
    }
  
    // Call immediately on load to avoid dom problems
    document.addEventListener('DOMContentLoaded', initCategoryButtons);
  })();
  
import { questions } from './questions.js'; // Modular content loading — Criteria 2.5(b)

export function showScreen(screenId) {
  document.querySelectorAll('.screen').forEach(section => section.classList.remove('active'));
  document.getElementById(screenId).classList.add('active');
}

export function initGame(playerName) {
  console.log(`Game started for ${playerName}`);

  currentQuestionIndex = 0;
  score = 0;

  renderQuestion();
}

let currentQuestionIndex = 0;
let score = 0;
const questionCounter = document.getElementById('question-counter');

export function renderQuestion() {
  const questionText = document.getElementById('question-text');
  const answerList = document.getElementById('answer-list');
  const feedback = document.getElementById('feedback');
  const category = document.querySelector('.selected').getAttribute('data-category');
  const q = questions[category][currentQuestionIndex];

  // Clear previous state
  feedback.textContent = '';
  answerList.innerHTML = '';

  console.log("Selected category: ", category);
  console.log(questions[category]);

  questionText.textContent = q.question;
  questionCounter.textContent = `Question ${currentQuestionIndex + 1} of ${questions[category].length}`;

  q.answers.forEach((text, index) => {
    const li = document.createElement('li');
    const btn = document.createElement('button');

    btn.className = 'answer-btn';
    btn.setAttribute('type', 'button');
    btn.setAttribute('aria-label', `Answer ${index + 1}: ${text}`);
    btn.textContent = text;

    btn.addEventListener('click', () => {
      handleAnswer(btn.textContent, index, category, q);
    });

    li.appendChild(btn);
    answerList.appendChild(li);
  });
}

function handleAnswer(answerText, selectedIndex, category, q) {
  const current = q;
  const feedback = document.getElementById('feedback');
  
  // Disable the answer buttons
  const answerButtons = document.getElementsByClassName('answer-btn');
  for (const button of answerButtons) {
    button.disabled = true;
  }

  if (selectedIndex === current.correctIndex) {
    score++;
    feedback.innerHTML = `
        <b>${answerText}</b> is correct!
        `;
  } else {
    feedback.innerHTML = `
        <b>${answerText}</b> is wrong! The correct answer was <b>${current.answers[current.correctIndex]}</b>
    `;
  }
  
  questionCounter.innerHTML+= `<button id="nextQuestionBtn" class="start-button">Next Question</button>`

  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    // setTimeout(renderQuestion, 4000);
  } else {
    // setTimeout(showResultScreen, 4000);
  }
}

function showResultScreen() {
  showScreen('result-screen');

  const resultSection = document.getElementById('result-screen');
  resultSection.innerHTML = `
    <h2>Quiz Complete!</h2>
    <p>You scored ${score} out of ${questions.length}</p>
    <button id="retryBtn" class="start-button">Try Again</button>
  `;

  document.getElementById('retryBtn').addEventListener('click', () => {
    showScreen('start-screen');
  });
}

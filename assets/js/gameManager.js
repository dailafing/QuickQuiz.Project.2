/*jslint browser */
/*global console, logToFirebase */

import {questions} from "./questions.js"; // Modular content loading — Criteria 2.5(b)

function showScreen(screenId) {
    document.querySelectorAll(".screen").forEach((section) => section.classList.remove("active"));
    document.getElementById(screenId).classList.add("active");
}

function initGame(playerName) {
    console.log(`Game started for ${playerName}`);

    currentQuestionIndex = 0;
    score = 0;

    renderQuestion();
}

let currentQuestionIndex = 0;
let score = 0;
const questionCounter = document.getElementById("question-counter");
const thePlayersName = document.getElementById("playerName");

function renderQuestion() {
    const questionText = document.getElementById("question-text");
    const answerList = document.getElementById("answer-list");
    const feedback = document.getElementById("feedback");
    const category = document.querySelector(".selected").getAttribute("data-category");
    const q = questions[category][currentQuestionIndex];

    // Clear previous state
    feedback.textContent = "";
    answerList.innerHTML = "";

    console.log("Selected category: ", category);
    console.log(questions[category]);

    questionText.textContent = q.question;
    questionCounter.textContent = `Question ${currentQuestionIndex + 1} of ${questions[category].length}`;

    q.answers.forEach(function (text, index) {
        const btn = document.createElement("button");

        btn.className = "answer-btn";
        btn.setAttribute("type", "button");
        btn.setAttribute("aria-label", `Answer ${index + 1}: ${text}`);
        btn.textContent = text;

        btn.addEventListener("click", function () {
            handleAnswer(btn.textContent, index, category, q);
        });

        answerList.appendChild(btn);
    });
    logToFirebase(`Player: <b>${thePlayersName.value}</b> chose the <b>${category}</b> category, and is presented with the question: <b>"${q.question}"</b>`);
}

function handleAnswer(answerText, selectedIndex, category, q) {
    const feedback = document.getElementById("feedback");

    // Disable the answer buttons
    const answerButtons = document.getElementsByClassName("answer-btn");

    Array.prototype.forEach.call(answerButtons, function (button) {
        button.disabled = true;
    });

    let firebaseMsg = `Player: <b>${thePlayersName.value}</b> chose <b>${q.answers[selectedIndex]}</b> for the question: <b>"${q.question}</b>."`;
    if (selectedIndex === q.correctIndex) {
        score += 1;
        feedback.innerHTML = `
            <b>${answerText}</b> is correct!
            `;
        firebaseMsg += ` <b>${thePlayersName.value}</b> was CORRECT!`;
    } else {
        feedback.innerHTML = `
          <b>${answerText}</b> is wrong! The correct answer was <b>${q.answers[q.correctIndex]}</b>
          `;
        firebaseMsg += ` <b>${thePlayersName.value}</b> was wrong :( The correct answer was <b>${q.answers[q.correctIndex]}</b>`;
    }
    logToFirebase(firebaseMsg);

    questionCounter.innerHTML += `<br><button id="nextQuestionBtn" class="start-button">Next Question</button>`;
    const nextQuestionButton = document.getElementById("nextQuestionBtn");

    currentQuestionIndex += 1;
    nextQuestionButton.addEventListener("click", function () {

        if (currentQuestionIndex < questions[category].length) {
            renderQuestion();
        } else {
            showResultScreen(category);
        }
    });

    document.querySelectorAll(".answer-btn").forEach(function (btn, i) {
        if (i === q.correctIndex) {
            btn.classList.add("correct");
        } else if (i === selectedIndex) {
            btn.classList.add("incorrect");
        }
        btn.disabled = true; // disable after answering
    });

}

function showResultScreen(category) {
    showScreen("result-screen");

    const resultSection = document.getElementById("result-screen");
    let endQuizMsg = `<b>${thePlayersName.value}</b> completed the <b>${questions[category].length}</b> questions from the <b>${category}</b> category, and scored <b>${score}</b>!`;
    logToFirebase(endQuizMsg);

    resultSection.innerHTML = `
      <h2>Quiz Complete!</h2>
      <p>Your score was ${score} out of a possible ${questions[category].length}</p>
    `;

    if (score < questions[category].length) {
        resultSection.innerHTML += `
          <p><b>You can do this ${thePlayersName.value}!<br>We believe in you! :)</b></p>
          `;
    } else {
        resultSection.innerHTML += `
          <p><b>That was fantastic ${thePlayersName.value}! 100% score!<br>We knew you could do it! :)</b></p>
        `;
    }

    resultSection.innerHTML += `
      <button id="retryBtn" class="start-button">Play Again</button>
    `;

    document.getElementById("retryBtn").addEventListener("click", function () {
        showScreen("start-screen");
    });
}

export default Object.freeze({
    initGame,
    renderQuestion,
    showScreen
});

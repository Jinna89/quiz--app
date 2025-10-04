// ✅ Use your deployed Render backend
const API_BASE_URL = "https://quiz-app-wbem.onrender.com";

let currentQuestionIndex = 0;
let questions = [];
let score = 0;

async function loadQuiz() {
  try {
    const res = await fetch(`${API_BASE_URL}/api/quiz`);
    if (!res.ok) throw new Error("Failed to fetch quiz data");

    questions = await res.json();
    showQuestion();
  } catch (err) {
    console.error("Error loading quiz:", err);
    document.getElementById("quiz-container").innerHTML =
      "<p>❌ Failed to load quiz. Please try again later.</p>";
  }
}

function showQuestion() {
  const container = document.getElementById("quiz-container");
  container.innerHTML = "";

  if (currentQuestionIndex < questions.length) {
    const q = questions[currentQuestionIndex];

    // pick correct answer key (from backend correct_answers object)
    const correctKey = Object.keys(q.correct_answers).find(
      (k) => q.correct_answers[k] === "true"
    );
    q.correctAnswerKey = correctKey ? correctKey.replace("_correct", "") : null;

    const div = document.createElement("div");
    div.className = "quiz-question";

    div.innerHTML = `
      <h3>Q${currentQuestionIndex + 1}: ${q.question}</h3>
      <ul>
        ${Object.entries(q.answers)
          .map(([key, value]) =>
            value
              ? `<li><label><input type="radio" name="answer" value="${key}"> ${value}</label></li>`
              : ""
          )
          .join("")}
      </ul>
      <button onclick="nextQuestion()">Next</button>
    `;

    container.appendChild(div);
  } else {
    showResult();
  }
}

function nextQuestion() {
  const selected = document.querySelector("input[name='answer']:checked");
  if (!selected) {
    alert("⚠️ Please select an answer!");
    return;
  }

  const answer = selected.value;
  if (questions[currentQuestionIndex].correctAnswerKey === answer) {
    score++;
  }

  currentQuestionIndex++;
  showQuestion();
}

function showResult() {
  const container = document.getElementById("quiz-container");
  container.innerHTML = `
    <h2>🎉 Quiz Completed!</h2>
    <p>Your Score: ${score} / ${questions.length}</p>
    <button onclick="restartQuiz()">Restart Quiz</button>
  `;
}

function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  showQuestion();
}

// ✅ Load quiz when page loads
window.onload = loadQuiz;

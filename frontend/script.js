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
  const questionEl = document.getElementById("question");
  const answersEl = document.getElementById("answers");
  const nextBtn = document.getElementById("next-btn");

  if (currentQuestionIndex < questions.length) {
    const q = questions[currentQuestionIndex];

    // get correct answer key
    const correctKey = Object.keys(q.correct_answers).find(
      (k) => q.correct_answers[k] === "true"
    );
    q.correctAnswerKey = correctKey ? correctKey.replace("_correct", "") : null;

    questionEl.textContent = `Q${currentQuestionIndex + 1}: ${q.question}`;

    answersEl.innerHTML = Object.entries(q.answers)
      .filter(([_, value]) => value)
      .map(
        ([key, value]) =>
          `<li><label><input type="radio" name="answer" value="${key}"> ${value}</label></li>`
      )
      .join("");

    nextBtn.style.display = "inline-block";
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
  document.getElementById("quiz-box").classList.add("hidden");
  const resultBox = document.getElementById("result-box");
  resultBox.classList.remove("hidden");
  document.getElementById("score").textContent = `Your Score: ${score} / ${questions.length}`;
}

function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  document.getElementById("quiz-box").classList.remove("hidden");
  document.getElementById("result-box").classList.add("hidden");
  showQuestion();
}

// attach event listener to the Next button
document.getElementById("next-btn").addEventListener("click", nextQuestion);

// load quiz when page loads
window.onload = loadQuiz;

let currentQuestion = 0;
let score = 0;
let quizData = [];

async function fetchQuiz() {
    try {
        const response = await fetch('https://quiz-app-wbem.onrender.com');
        quizData = await response.json();
        loadQuestion();
    } catch (error) {
        console.error("Error fetching quiz:", error);
    }
}


function loadQuestion() {
    if (currentQuestion >= quizData.length) {
        document.getElementById('quiz-box').classList.add('hidden');
        document.getElementById('result-box').classList.remove('hidden');
        document.getElementById('score').innerText = `Your score: ${score}/${quizData.length}`;
        return;
    }

    const question = quizData[currentQuestion];
    document.getElementById('question').innerText = question.question;

    const answersDiv = document.getElementById('answers');
    answersDiv.innerHTML = '';
    Object.entries(question.answers).forEach(([key, value]) => {
        if (value) {
            const btn = document.createElement('button');
            btn.innerText = value;
            btn.onclick = () => checkAnswer(key);
            answersDiv.appendChild(btn);
        }
    });
}

function checkAnswer(answer) {
    if (answer === quizData[currentQuestion].correct) {
        score++;
    }
    currentQuestion++;
    loadQuestion();
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    document.getElementById('result-box').classList.add('hidden');
    document.getElementById('quiz-box').classList.remove('hidden');
    loadQuestion();
}

document.getElementById('next-btn').addEventListener('click', () => {
    currentQuestion++;
    loadQuestion();
});

fetchQuiz();

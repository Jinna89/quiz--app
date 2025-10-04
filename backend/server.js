const express = require('express');
const cors = require('cors');

const app = express();

// ✅ Use Render's dynamic port or fallback for local
const PORT = process.env.PORT || 5020;

// ✅ Configure CORS properly
const corsOptions = {
  origin: '*', 
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
};

app.use(cors(corsOptions));
app.use(express.json());

// ✅ Your quiz data
const quizzes = [
  {
    "id": 1,
    "question": "How to delete a directory in Linux?",
    "description": "delete folder",
    "answers": {
      "answer_a": "ls",
      "answer_b": "delete",
      "answer_c": "remove",
      "answer_d": "rmdir"
    },
    "multiple_correct_answers": "false",
    "correct_answers": {
      "answer_d_correct": "true"
    },
    "explanation": "rmdir deletes an empty directory",
    "category": "linux",
    "difficulty": "Easy"
  },
  {
    "id": 2,
    "question": "Which command is used to list files in a directory?",
    "description": "list files",
    "answers": {
      "answer_a": "ls",
      "answer_b": "dir",
      "answer_c": "list",
      "answer_d": "show"
    },
    "multiple_correct_answers": "false",
    "correct_answers": {
      "answer_a_correct": "true",
      "answer_b_correct": "true"
    },
    "explanation": "Both ls (Linux) and dir (Windows) list files in a directory.",
    "category": "linux",
    "difficulty": "Easy"
  },
  {
    "id": 3,
    "question": "What does 'cd' command do in Linux?",
    "description": "change directory",
    "answers": {
      "answer_a": "Creates a new directory",
      "answer_b": "Deletes a directory",
      "answer_c": "Changes directory",
      "answer_d": "Copies files"
    },
    "multiple_correct_answers": "false",
    "correct_answers": {
      "answer_c_correct": "true"
    },
    "explanation": "The 'cd' command changes the current directory.",
    "category": "linux",
    "difficulty": "Easy"
  }
];

// ✅ API route
app.get('/api/quiz', (req, res) => {
  res.json(quizzes);
});

// ✅ Root route for Render health check
app.get('/', (req, res) => {
  res.send('✅ Quiz App Backend is Running');
});

// ✅ Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

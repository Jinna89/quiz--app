const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5020;

app.use(cors());
app.use(express.json());

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
    },
    {
      "id": 4,
      "question": "Which command is used to see the current directory in Linux?",
      "description": "print working directory",
      "answers": {
        "answer_a": "pwd",
        "answer_b": "ls",
        "answer_c": "cd",
        "answer_d": "dir"
      },
      "multiple_correct_answers": "false",
      "correct_answers": {
        "answer_a_correct": "true"
      },
      "explanation": "The 'pwd' command prints the current working directory.",
      "category": "linux",
      "difficulty": "Easy"
    },
    {
      "id": 5,
      "question": "Which command is used to create a new file in Linux?",
      "description": "create a file",
      "answers": {
        "answer_a": "touch",
        "answer_b": "create",
        "answer_c": "newfile",
        "answer_d": "make"
      },
      "multiple_correct_answers": "false",
      "correct_answers": {
        "answer_a_correct": "true"
      },
      "explanation": "The 'touch' command creates an empty file.",
      "category": "linux",
      "difficulty": "Easy"
    },
    {
      "id": 6,
      "question": "Which command is used to remove a file in Linux?",
      "description": "delete file",
      "answers": {
        "answer_a": "rm",
        "answer_b": "erase",
        "answer_c": "del",
        "answer_d": "removefile"
      },
      "multiple_correct_answers": "false",
      "correct_answers": {
        "answer_a_correct": "true"
      },
      "explanation": "The 'rm' command removes a file.",
      "category": "linux",
      "difficulty": "Easy"
    },
    {
      "id": 7,
      "question": "Which command is used to move files in Linux?",
      "description": "move files",
      "answers": {
        "answer_a": "mv",
        "answer_b": "move",
        "answer_c": "cp",
        "answer_d": "transfer"
      },
      "multiple_correct_answers": "false",
      "correct_answers": {
        "answer_a_correct": "true"
      },
      "explanation": "The 'mv' command moves files.",
      "category": "linux",
      "difficulty": "Easy"
    },
    {
      "id": 8,
      "question": "Which command is used to copy files in Linux?",
      "description": "copy files",
      "answers": {
        "answer_a": "cp",
        "answer_b": "copy",
        "answer_c": "mv",
        "answer_d": "duplicate"
      },
      "multiple_correct_answers": "false",
      "correct_answers": {
        "answer_a_correct": "true"
      },
      "explanation": "The 'cp' command copies files.",
      "category": "linux",
      "difficulty": "Easy"
    },
    {
      "id": 9,
      "question": "Which command is used to find the current user's name in Linux?",
      "description": "find user",
      "answers": {
        "answer_a": "whoami",
        "answer_b": "user",
        "answer_c": "me",
        "answer_d": "who"
      },
      "multiple_correct_answers": "false",
      "correct_answers": {
        "answer_a_correct": "true"
      },
      "explanation": "The 'whoami' command shows the current user.",
      "category": "linux",
      "difficulty": "Easy"
    }
  ];

app.get('/api/quiz', (req, res) => {
    res.json(quizzes);
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

const corsOptions = {
  origin: '*', 
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
};

app.use(cors(corsOptions));

const questionElement = document.getElementById("question");
const answerButtons = document.querySelectorAll(".answer-btn");
const scoreElement = document.getElementById("score");

const questions = [
  {
    question: "Who is the winner of OTT BB?",
    answers: ["Manisha", "Elvish", "Abhishek", "Bebika"],
    correct: 1,
  },
  {
    question: "Who win millions of hearts in OTT BB?",
    answers: ["Bebika-Pooja", "Jiya-Avinash", "Manisha-Abhishek", "Elvish-Abhishek"],
    correct: 2,
  },
  {
    question: "Which is famous K-pop brand in all over the world?",
    answers: ["Blackpink", "Seventeen", "Jeans", "BTS"],
    correct: 3,
  },
  {
    question: "Who is Kiran Thorat?",
    answers: ["Smart", "Arrogant", "Humble", "Impatience"],
    correct: 1,
  },
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  questionElement.textContent = questions[currentQuestion].question;
  questions[currentQuestion].answers.forEach((answer, index) => {
    answerButtons[index].textContent = answer;
  });
}

function checkAnswer(selected) {
  answerButtons.forEach(button => {
    button.disabled = true;
  });

  if (selected === questions[currentQuestion].correct) {
    answerButtons[selected].style.backgroundColor = "green";
    score++;
    scoreElement.textContent = `Score: ${score}`;
  } else {
    answerButtons[selected].style.backgroundColor = "red";
    answerButtons[questions[currentQuestion].correct].style.backgroundColor = "green";
  }

  setTimeout(() => {
    answerButtons.forEach(button => {
      button.style.backgroundColor = ""; // Reset background color
      button.disabled = false;
    });

    currentQuestion++;
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      questionElement.textContent = "Quiz completed!";
      answerButtons.forEach(button => {
        button.style.display = "none";
      });
    }
  }, 1000);
}

loadQuestion();

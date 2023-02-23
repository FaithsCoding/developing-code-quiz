//The questions are in a separate file to the other JS code for accessibility and readability. This makes it easier to add/take away questions from the quiz and allows for easier future development.

//VARIABLES
// Variables that are solely question related

var secondsLeft = 60;
var questionNumber = 0;
var totalScore = 0;
var questionCount = 1;

var welcome = document.querySelector("#introduction");
var introPage = document.querySelector("#intro_page");
var timeLeft = document.getElementById("timer");

var questionPage = document.querySelector("#question_page");
var askQuestion = document.querySelector("#ask_question");

var startBtn = document.querySelector("#start_button");
var reactButtons = document.querySelectorAll(".choices");
var answerBtn1 = document.querySelector("#answer_btn1");
var answerBtn2 = document.querySelector("#answer_btn2");
var answerBtn3 = document.querySelector("#answer_btn3");

//These are questions, answers and correct reasons
var questionSource = [
  {
    question: "Question 1 : What is HTML an abbreviation for?",
    choices: [
      "a.Headertext Management Language",
      "b.Hypertext Markup Language",
      "c.Hypertext Manager Language",
    ],
    answer: "b",
  },

  {
    question: "Question 2 : What does your CSS file do?",
    choices: [
      "a.Alters your webpage styling",
      "b.Changes your JavaScript",
      "c.Adds API's to your webpage",
    ],
    answer: "a",
  },

  {
    question: "Question 3 : What is the main purpose of JavaScript?",
    choices: [
      "a.Enables you to create dynamically updating content",
      "b.To create images",
      "c.To update API's",
    ],
    answer: "a",
  },

  {
    question: "Question 4 : Why are API's useful when creating websites?",
    choices: [
      "a.To manage GDPR regulated data",
      "b.To create static elements on a webpage",
      "c.To allow us to share data and execute pre-defined processes",
    ],
    answer: "c",
  },

  {
    question: "Question 5 : Where can you view locally stored data?",
    choices: [
      "a.In your terminal",
      "b.In the application tab of your developer tools",
      "c.In your GitHub repo",
    ],
    answer: "b",
  },
];

//FUNCTIONS
//This begins the countdown

function countdown() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeLeft.textContent = "Time left: " + secondsLeft + " s";

    if (secondsLeft <= 0) {
      clearInterval(timerInterval);
      timeLeft.textContent = "Time is up!";
      finish.textContent = "Time is up!";
      gameOver();
    } else if (questionCount >= questionSource.length + 1) {
      clearInterval(timerInterval);
      gameOver();
    }
  }, 1000);
}

//This functiion allows the quiz to start
function startQuiz() {
  introPage.style.display = "none";
  questionPage.style.display = "block";
  questionNumber = 0;
  countdown();
  showQuestion(questionNumber);
}

//This function shows the questions when the quiz has started
function showQuestion(n) {
  askQuestion.textContent = questionSource[n].question;
  answerBtn1.textContent = questionSource[n].choices[0];
  answerBtn2.textContent = questionSource[n].choices[1];
  answerBtn3.textContent = questionSource[n].choices[2];
  questionNumber = n;
}

//This function checks the answers and then tells the user whether their answer was correct or if it was wrong was the right one was
function checkAnswer(event) {
  event.preventDefault();
  checkLine.style.display = "block";
  setTimeout(function () {
    checkLine.style.display = "none";
  }, 1000);

  if (questionSource[questionNumber].answer == event.target.value) {
    checkLine.textContent = "Correct!";
    totalScore = totalScore + 1;
  } else {
    secondsLeft = secondsLeft - 10;
    checkLine.textContent =
      "Wrong! The correct answer is " + questionSource[questionNumber].answer;
  }

  if (questionNumber < questionSource.length - 1) {
    showQuestion(questionNumber + 1);
  } else {
    gameOver();
  }
  questionCount++;
}

//This functions shows the user what they scored, it will automatically show 0 if the timer runs out and they haven't answered any questions or if they scored 0
function gameOver() {
  questionPage.style.display = "none";
  scoreBoard.style.display = "block";
  console.log(scoreBoard);
  finalScore.textContent = "You scored " + totalScore;
  timeLeft.style.display = "none";
}

//This functions retrieves the user data from the local storage to be able to preview the highscores when the button is clicked
function getScore() {
  var currentList = localStorage.getItem("ScoreList");
  if (currentList !== null) {
    freshList = JSON.parse(currentList);
    return freshList;
  } else {
    freshList = [];
  }
  return freshList;
}

//EVENT
//This event triggers the start of the quiz, timer and therefore begins the process of questions appearing etc
startBtn.addEventListener("click", startQuiz);
reactButtons.forEach(function (click) {
  click.addEventListener("click", checkAnswer);
});

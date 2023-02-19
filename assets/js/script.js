var startBtn = document.querySelector("#startBtn");
var quizName = document.querySelector("#title");
var submitHighscoreBtn = document.querySelector("#submitHighscoreBtn");
var viewHighscoresBtn = document.querySelector("#viewHighscoresBtn");
var clearHighscoreBtn = document.querySelector("#clearHighscoreBtn");
var goBackHighscoreBtn = document.querySelector("#goBackBtn");
var answerButtonLst = document.body.querySelector("ul");
var timer = document.querySelector("#timerTag");
var timerP = document.querySelector("header").children[1];

var questionsObject = {
questions: [
    "What is HTML an anagram for?",
    "What does your CSS file do?",
    "What is the main purpose of JavaScript?",
    "Why are API's useful when creating websites?",
    "Where can you view locally stored data?",]
answers: [
  "Headertext Management Language", "correct: Hypertext Markup Language", "Hypertext Manager Language",
  "correct: Alters your webpage styling", "Changes your JavaScript", "Adds API's to your webpage",
  "correct: Enables you to create dynamically updating content", "To create images", "To update API's",
  "To manage GDPR regulated data", "To create static elements on a webpage", "correct: To allow us to share data and execute pre-defined processes",
  "In your terminal", "correct: In the application tab of your developer tools", "In your GitHub"
]
}

function gameSetUp() {
  timer.textContent = globalTimerPreset;
  timeRemaining = globalTimerPreset;

  document.querySelector(
    "#display-highscore-section"
  ).getElementsByClassName.display = "none";
  startBtn.style.display = "none";
  viewHighscoresBtn.style.display = "none";
  title.style.display = "none";

  document.querySelector("instructions").style.display = "none";

  return;
}

function startGame() {
  question = 0; //keeps track of which question number user is on for the question object

  timerP.style.display = "none";
  startBtn.style.display = "none";
  viewHighscoresBtn.style.display = "none";

  document.querySelector("#instructions").style.display = "none";

  startTimer();
  ShowQuestions(question);

  return;
}

function viewQuestions(question) {
  title.textContent = questionObj.questions[question];
  createAnswerEle(question);

  return;
}

function 

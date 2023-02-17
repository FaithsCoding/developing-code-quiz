var startBtn = document.querySelector("#startBtn");
var quizName = document.querySelector("#title");
var submitHighscoreBtn = document.querySelector("#submitHighscoreBtn");
var viewHighscoresBtn = document.querySelector("#viewHighscoresBtn");
var clearHighscoreBtn = document.querySelector("#clearHighscoreBtn");
var goBackHighscoreBtn = document.querySelector("#goBackBtn");
var answerButtonLst = document.body.querySelector("ul");
var timer = document.querySelector("#timerTag");
var timerP = document.querySelector("header").children[1];

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

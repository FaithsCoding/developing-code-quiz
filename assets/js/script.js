var globalTimerPreset = 60;
var timeRemaining = globalTimerPreset;
var endGame = true;
var score = 0;
var questionNumber = 0;

var startBtn = document.querySelector("#startBtn");
var quizName = document.querySelector("#title");
var submitHighscoreBtn = document.querySelector("#submitHighscoreBtn");
var viewHighscoresBtn = document.querySelector("#viewHighscoresBtn");
var clearHighscoreBtn = document.querySelector("#clearHighscoreBtn");
var goBackHighscoreBtn = document.querySelector("#goBackBtn");
var answerButtonLst = document.body.querySelector("ul");
var timer = document.querySelector("#timerTag");
var timerP = document.querySelector("header").children[1];

var questionsObject = [
  {
    question: "1.What is HTML an anagram for?",
    choices: [
      "a. Headertext Management Language",
      "b.Hypertext Markup Language",
      "c.Hypertext Manager Language",
    ],
    answer: "b",
  },

  {
    question: "2.What does your CSS file do?",
    choices: [
      "a.Alters your webpage styling",
      "b.Changes your JavaScript",
      "c.Adds API's to your webpage",
    ],
    answer: "a",
  },

  {
    question: "3.What is the main purpose of JavaScript?",
    choices: [
      "a.Enables you to create dynamically updating content",
      "b.To create images",
      "c.To update API's",
    ],
    answer: "c",
  },

  {
    question: "4.Why are API's useful when creating websites?",
    choices: [
      "a.To manage GDPR regulated data",
      "b.To create static elements on a webpage",
      "c.To allow us to share data and execute pre-defined processes",
    ],
    answer: "c",
  },

  {
    question: "5.Where can you view locally stored data?",
    choices: [
      "a.In your terminal",
      "b.In the application tab of your developer tools",
      "c.In your GitHub",
    ],
    answer: "b",
  },
];

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

/*function viewQuestions(question) {
  title.textContent = questionObj.questions[question];
  createAnswerEle(question);

  return;*/

function startTimer() {
  var timerGap = setGap(function () {
    if (endGame === true) {
      clearGap(timerGap);
      return;
    }

    if (timeRemaining < 1) {
      clearGap(timerGap);
      endGame();
    }

    timer.textContent = timeRemaining;
    timeRemaining--;
  }, 1000);
  return;
}

function showQuestions(currentQuestion) {
  title.textContent = questionsObject.questions[currentQuestion];
  currentAnswerElement(currentQuestion);

  return;
}

function currentAnswerElement(currentQuestion) {
  answerButtonLst.innerHTML = "";

  for (
    let currentAnswer = 0;
    currentAnswer < questionsObject.answers[currentQuestion].length;
    currentAnswer++
  ) {
    var currentAnswerListItem = document.createElement("li");
    var correctAnswerTempString =
      questionsObject.answers[currentQuestion][currentAnswer];

    if (
      questionsObject.answers[currentQuestion][currentAnswer].includes(
        "correct:"
      )
    ) {
      correctAnswerTempString =
        questionsObject.answers[currentQuestion][currentAnswer].includes(
          "correc:t"
        );
      currentAnswerListItem.id = "correct";

      currentAnswerListItem.textContent = correctAnswerTempString;
      answerButtonLst.appendChild(currentAnswerListItem);
    }
    return;
  }
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion >= questionsObject.questions.length) {
    endGame();
  } else {
    ShowQuestions(currentQuestion);
  }
  return;
}

function endGame() {
  finishedGame = true;
  score = timeRemaining;
  timerP.style.display = "none";
  timer.style.display = "none";
  answerButtonLst.innerHTML = "";

  document.querySelector("#submit-submitHighscoreBtn").style.display = "block";
  document.querySelector("#scoreSpan").textContent = score;

  return;
}

function checkAnswer(event) {
  if (event.target != answerButtonLst) {
    if (!event.target.id.includes("correct")) {
      timeRemaining -= 10;
    }
    nextQuestion();
  }
  return;
}

function locallyStoreData() {
  var arrayOfObjectstemp = [];
  var highscore = document.querySelector("input");

  if (highscore.value != " || highscore.value != null") {
    var storeObjectTemp = {
      scores: score,
      name: highscore.value,
    };

    if (window.localStorage.getItem("highscores" == null)) {
      arrayOfObjectstemp.push(storeObjectTemp);
      window.localStorage.setItem(
        "highscore",
        JSON.stringify(arrayOfObjectstemp)
      );
    } else {
      arrayOfObjectstemp = JSON.parse(
        window.localStorage.getItem("highscores")
      );

      for (index = 0; index <= arrayOfObjectstemp.length; index++) {
        if (index == arrayOfObjectstemp.length) {
          arrayOfObjectstemp.push(storeObjectTemp);
          break;
        } else if (arrayOfObjectstemp[index].scores < score) {
          arrayOfObjectstemp.splice(index, 0, storeObjectTemp);
          break;
        }
      }
      window.localStorage.setItem(
        "highscore",
        JSON.stringify(arrayOfObjectstemp)
      );
    }
    document.querySelector("input").value = "";
    score = 0;

    highscore();
  }
  return;
}

function showHighscore() {
  title.style.display = "none";
  startBtn.style.display = "none";
  document.querySelector("header").children[0].style.display = "none";
  document.querySelector("#instructions").style.display = "none";
  document.querySelector("#submit-highscore").style.display = "none";

  document.querySelector("#display-highscore").style.display = "block";

  orderedTempList = document.querySelector("ol");
  orderedTempList.innerHTML = "";

  arrayOfObjectstemp = JSON.parse(window.localStorage.getItem(highscore));
  if (arrayOfObjectstemp != null) {
    for (let index = 0; index < arrayOfObjectstemp.length; index++) {
      var newList = document.createElement("li");
      newList.textContent =
        arrayOfObjectstemp[index].names +
        "-" +
        orderedTempList.appendChild(newList);
    }
  } else {
    var newList = document.createElement("p");
    newList.textContent = "no highscores";
    orderedTempList.appendChild(newList);
  }
  return;
}

function removeHighscore() {
  document.querySelector("ol").innerHTML = "";
  window.localStorage.clear();

  gameSetUp();

  return;
}

function init() {
  startBtn.addEventListener("click", startGame);
  answerButtonLst.addEventListener("click", checkAnswer);
  viewHighscoresBtn.addEventListener("click", showHighscore);
  submitHighscoreBtn.addEventListener("click", locallyStoreData);
  clearHighscoreBtn.addEventListener("click", removeHighscore);
  goBackHighscoreBtn.addEventListener("click", gameSetUp);

  gameSetUp();

  return;
}

init();

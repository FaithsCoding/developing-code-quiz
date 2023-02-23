//VARIABLES


var submitBtn = document.querySelector("#submit_btn");
var backBtn = document.querySelector("#back_btn");
var clearBtn = document.querySelector("#clear_btn");

var checkLine = document.querySelector("#check_line");
var scoreBoard = document.querySelector("#submit_page");
var finalScore = document.querySelector("#final_score");
var userInitial = document.querySelector("#initial");

var highScorePage = document.querySelector("#highscore_page");
var scoreRecord = document.querySelector("#score_record");
var scoreCheck = document.querySelector("#score_check");
var finish = document.querySelector("#finish");

// FUNCTIONS



function renderScore() {
  scoreRecord.innerHTML = "";
  scoreRecord.style.display = "block";
  var highScores = sort();
  var topFive = highScores.slice(0, 5);

  for (var i = 0; i < topFive.length; i++) {
    var item = topFive[i];
    var li = document.createElement("li");
    li.textContent = item.user + " - " + item.score;
    li.setAttribute("data-index", i);
    scoreRecord.appendChild(li);
  }
}

function sort() {
  var unsortedList = getScore();
  if (getScore == null) {
    return;
  } else {
    unsortedList.sort(function (a, b) {
      return b.score - a.score;
    });
    return unsortedList;
  }
}

function addItem(n) {
  var addedList = getScore();
  addedList.push(n);
  localStorage.setItem("ScoreList", JSON.stringify(addedList));
}

function saveScore() {
  var scoreItem = {
    user: userInitial.value,
    score: totalScore,
  };
  addItem(scoreItem);
  renderScore();
}

// Events



submitBtn.addEventListener("click", function (event) {
  event.preventDefault();
  scoreBoard.style.display = "none";
  introPage.style.display = "none";
  highScorePage.style.display = "block";
  questionPage.style.display = "none";
  saveScore();
});

scoreCheck.addEventListener("click", function (event) {
  event.preventDefault();
  scoreBoard.style.display = "none";
  introPage.style.display = "none";
  highScorePage.style.display = "block";
  questionPage.style.display = "none";
  renderScore();
});

backBtn.addEventListener("click", function (event) {
  event.preventDefault();
  scoreBoard.style.display = "none";
  introPage.style.display = "block";
  highScorePage.style.display = "none";
  questionPage.style.display = "none";
  location.reload();
});

clearBtn.addEventListener("click", function (event) {
  event.preventDefault();
  localStorage.clear();
  renderScore();
});

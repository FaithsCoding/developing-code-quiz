//VARIABLES
//The variables are being used to pull elements from the HTML. These are called global variables as they are set outside of a function and therefore can be applied throughout all of the code.

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
// Functions are what process a set of statements and carry out a task.

//This function is providing the score data. This function is also only allowing the top 5 scores to be shown by slicing the array which is taken from the user input. This will then display the top 5 scores on the high score board for cleanliness.

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

//The sort function is sorting the high scores into the highest first.
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

//The next 2 functions are allowing the initials input from the user and the score to be pushed to the local storage and displayed.
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
// Events are what tell JS to listen out for from the user.

//This first 'click' startBtn event listener is telling JS to start the quiz once this button has been clicked and hide the different elements on the intro page.
submitBtn.addEventListener("click", function (event) {
  event.preventDefault();
  scoreBoard.style.display = "none";
  introPage.style.display = "none";
  highScorePage.style.display = "block";
  questionPage.style.display = "none";
  saveScore();
});

//This event is checking the highscore ranking
scoreCheck.addEventListener("click", function (event) {
  event.preventDefault();
  scoreBoard.style.display = "none";
  introPage.style.display = "none";
  highScorePage.style.display = "block";
  questionPage.style.display = "none";
  renderScore();
});

//This event is listening out for the back button once the user has navigated to a different page.
backBtn.addEventListener("click", function (event) {
  event.preventDefault();
  scoreBoard.style.display = "none";
  introPage.style.display = "block";
  highScorePage.style.display = "none";
  questionPage.style.display = "none";
  location.reload();
});

//This button clears any locally stored collected data.
clearBtn.addEventListener("click", function (event) {
  event.preventDefault();
  localStorage.clear();
  renderScore();
});

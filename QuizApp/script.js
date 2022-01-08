const questions = [
  {
    questionText: "Commonly used data types DO NOT include:",
    options: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
    answer: "3. alerts",
  },
  {
    questionText: "Arrays in JavaScript can be used to store ______.",
    options: [
      "1. numbers and strings",
      "2. other arrays",
      "3. booleans",
      "4. all of the above",
    ],
    answer: "4. all of the above",
  },
  {
    questionText:
      "String values must be enclosed within _____ when being assigned to variables.",
    options: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
    answer: "3. quotes",
  },
  {
    questionText:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    options: [
      "1. JavaScript",
      "2. terminal/bash",
      "3. for loops",
      "4. console.log",
    ],
    answer: "4. console.log",
  },
  {
    questionText:
      "Which of the following is a statement that can be used to terminate a loop, switch or label statement?",
    options: ["1. break", "2. stop", "3. halt", "4. exit"],
    answer: "1. break",
  },
];

var time = 50;

var sec = 0;
var stopTimer = true;
var score = 0;

var i = 0;
const timeElement = document.getElementById("time");

const start = () => {
  stopTimer = false;
  setTimer();
  document.getElementById("landingScreen").classList.add("hide");
  document.getElementById("quizScreen").classList.remove("hide");
  //   document.getElementById("quizScreen").classList.add("visible");

  // resetAll();

  setQuestions();
};

const setTimer = () => {
  if (sec >= 50) {
    timerEnd();
  }
  // console.log(sec)
  if (sec <= time && stopTimer !== true) {
    sec = parseInt(sec);
    sec = sec + 1;
    timeElement.innerText = time - sec;
    setTimeout("setTimer()", 1000);
  } else {
    timerEnd();
  }
  // timeElement.innerText=time
};

const timerEnd = () => {
  timeElement.innerText = 0;

  document.getElementById("quizScreen").classList.add("hide");
  document.getElementById("timerEnd").classList.remove("hide");
  document.getElementById("score").innerText = score;
};

const submitInitial = () => {
  const initials = document.getElementById("initials").value;
  localStorage.setItem("quiz " + initials, time);
  document.getElementById("landingScreen").classList.remove("hide");
  document.getElementById("timerEnd").classList.add("hide");
  // console.log(localStorage.saveData);
};

const setQuestions = () => {
  var question = document.getElementById("question");
  var one = document.getElementById("one");
  var two = document.getElementById("two");
  var three = document.getElementById("three");
  var four = document.getElementById("four");

  question.innerHTML = "<h2>" + questions[i].questionText + "</h2>";
  one.innerText = questions[i].options[0];
  two.innerText = questions[i].options[1];
  three.innerText = questions[i].options[2];
  four.innerText = questions[i].options[3];
  if (i == questions.length - 1) {
    stopTimer = true;
    timerEnd();
  }
};

const getElement = (e) => {
  var element = e.target || e.srcElement;
  var answer = element.innerText;
  if (answer === questions[i].answer) {
    document.getElementById("comment").classList.remove("hide");
    document.getElementById("comment").innerText = "Correct!";
    setTimeout(function () {
      document.getElementById("comment").innerText = "";
      document.getElementById("comment").classList.add("hide");
      i += 1;
      time += 1;
      score += 1;
      setQuestions();
    }, 1000);
  } else {
    document.getElementById("comment").classList.remove("hide");
    document.getElementById("comment").innerText = "Incorrect";

    time -= 10;
    // console.log("NOOOO")
  }
};

const resetAll = () => {
  time = 50;
  sec = 0;
  score = 0;
  i = 0;
  stopTimer = true;
  document.getElementById("quizScreen").classList.add("hide");
  document.getElementById("timerEnd").classList.add("hide");
};

const getData = () => {
  document.getElementById("quizScreen").classList.add("hide");
  document.getElementById("timerEnd").classList.add("hide");

  document.getElementById("highscore").innerText = "";
  document.getElementById("highScoreContainer").classList.remove("hide");
  document.getElementById("landingScreen").classList.add("hide");
  const allScores = localStorage;
  const element = document.getElementById("highscore");
  if (allScores.length === 0) {
    const element = document.getElementById("highscore");
    element.innerText = "No highscores found !";
  }
  for (var j = 0; j < allScores.length; j++) {
    const name = allScores.key(j).split(" ")[1];
    const time = allScores.getItem(allScores.key(j));
    var li = document.createElement("li");
    li.innerHTML = name + " - " + time;
    element.appendChild(li);
  }
};

const clearHighscore = () => {
  localStorage.clear();
};

const backBtn = () => {
  document.getElementById("highScoreContainer").classList.add("hide");
  document.getElementById("landingScreen").classList.remove("hide");
};

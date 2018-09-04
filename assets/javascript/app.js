/*
Trivia Game Pseudocode:

1. Press Start to Begin the Game
	- create start button
    - on click, reveal first question and choices and start timer
    
2. Question 1 begins
	- timer starts at 30 seconds and counts down
	- question posed above answers
	- create buttons below with each question
    - set value of buttons to either correct/incorrect to trigger next page
    
3. If incorrect:
	- have frozen time left remaining
	- the text "Incorrect!"
	- Reveal correct answer
	- possible image in content
    - add to incorrect counter to keep track
    
4. If correct:
	- have frozen time left remaining
	- the text "Correct!"
	- Reveal correct answer
	- possible image in content
    - add to correct counter to keep track
    
5. If time runs out:
	- have "Time remaining 0 seconds"
	- the text "Time's Up!"
	- Reveal correct answer
	- possible image in content
    - add to unanswered counter to keep track
    
6. Have hidden timer to switch to next question

7. At end of the game:
	- Have time remaining printed
	- Have "All done, heres how you did!" printed
	- scores for correct, incorrect, and unanswered
    - a start over button
    
8. Reset button will completely reset the game
	- reset the timer
	- reset correct/incorrect
    - reset questions
    */

//Variables

var time = 20;
var intervalID = "";
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var arrayFinder = 0;

var question01 = {
  question: "What continent is Tokyo located on?",
  answers: ["Canada", "Africa", "Prussia", "Asia"],
  values: ["incorrect", "incorrect", "incorrect", "correct"],
  image: "./assets/images/Japan.gif"
};
var question02 = {
  question:
    "What only foreign language is taught is taught in Japanese public schools?",
  answers: ["English", "Chinese", "Japanese", "Korean"],
  values: ["correct", "incorrect", "incorrect", "incorrect"],
  image: "./assets/images/english.jpg"
};
var question03 = {
  question:
    "What activity is illegal (after midnight) without a special license?",
  answers: ["Prositution", "Eating", "Fishing", "Dancing"],
  values: ["incorrect", "incorrect", "incorrect", "correct"],
  image: "./assets/images/dance.jpg"
};
var question04 = {
  question: "Japan and what other country has not abolished the death penalty?",
  answers: ["Canada", "Africa", "Prussia", "USA"],
  values: ["incorrect", "incorrect", "incorrect", "correct"],
  image: "./assets/images/usa.jpg"
};
var question05 = {
  question: "What is the largest gang in Japan?",
  answers: ["Dragons", "Yakuza", "Dowa", "Buraku"],
  values: ["incorrect", "correct", "incorrect", "correct"],
  image: "./assets/images/yakuza.jpg"
};
var question06 = {
  question: "What type of raw meat is considered a <em>rare</em> deliacy?",
  answers: ["Ham", "Steak", "Fish", "Horse"],
  values: ["incorrect", "incorrect", "incorrect", "correct"],
  image: "./assets/images/horse.jpg"
};
var question07 = {
  question: "What color cat is considered good luck?",
  answers: ["Grey", "Albino", "White", "Black"],
  values: ["incorrect", "incorrect", "incorrect", "correct"],
  image: "./assets/images/blackcat.jpg"
};
var question08 = {
  question:
    "What movie monster woke from the depths of the sea to attack Tokyo?",
  answers: ["Voltron", "Trump", "Mothra", "Godzilla"],
  values: ["incorrect", "incorrect", "incorrect", "correct"],
  image: "./assets/images/godzilla.jpg"
};
var question09 = {
  question: "What restaurant chain in Japan is the largest outside of the US?",
  answers: ["Arby's", "KFC", "Burger King", "Mc'Donalds"],
  values: ["incorrect", "incorrect", "incorrect", "correct"],
  image: "./assets/images/mcdonalds.jpg"
};
var question10 = {
  question: "Japan is composed of over how many islands?",
  answers: ["1,000", "3,000", "5,000", "7,000"],
  values: ["incorrect", "incorrect", "incorrect", "correct"],
  image: "./assets/images/island.jpg"
};

var questionsArray = [
  question01,
  question02,
  question03,
  question04,
  question05,
  question06,
  question07,
  question08,
  question09,
  question10
];

// functions

function start() {
  $(".content-div").empty();
  var startButton = $("<button");
  startButton.text("Start");
  startButton.addClass("start btn btn-default answerBtn");
  $(".content-div").append(startButton);
}

function run() {
  intervalID = setInterval(decodeURIComponent, 1000);
}

function decrement() {
  time--;
  $(".timer-div").html("Time Remaining: " + time + " Seconds");
  if (time == 0) {
    if (arrayFinder < questionsArray.length - 1) {
      setTimeout(function() {
        questionWrite(questionsArray[arrayFinder]);
      }, 2000);
      solutionWrite(questionArray[arrayFinder]);
      $(".question-div").html("Incorrect!");
      stop();
      unanswered++;
    }
  }
}

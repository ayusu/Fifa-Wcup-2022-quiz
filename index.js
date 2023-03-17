var readlineSync = require('readline-sync')
var userName = readlineSync.question("What is your name? ")
console.log("Welcome " + userName +" let's play fifa worldcup 2022 quiz .")

var score = 0

var questions = [{
  question: "Who was the youngest manager in Qatar worldcup? ",
  answer: "Lionel Scaloni"
},{
  question: "What is the name of the 2022 World Cup official song? ",
  answer: "Hayya Hayya"
},{
  question: "Who was the only player to score two goals in two different games? ",
  answer: "Kylian Mbappe"
},{
  question: "Who won the player of the tournament award? ",
  answer: "Lionel Messi"
},{
  question: "Which team won a game in which they had 18% of possession?",
  answer: "Japan"
}]
  
function play(question, answer) {
  var userAnswer = readlineSync.question(question)

  if (userAnswer === answer) { 
    console.log("right!")
    score = score + 1  
  } else {
    console.log("wrong!")
    score = score - 1   
  }

  console.log("current score: ", score)
}
function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
    
  }
}

game()
console.log("Your final score for the quiz is ", score)
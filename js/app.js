function initialize(state) {
  userScore = 0
  botScore = 0
  userScoreDisplay.innerHTML = userScore
  botScoreDisplay.innerHTML = botScore
  if (state === 'start') {
    start_button.innerHTML = "Start"
    turnText.innerHTML = "Your Turn!"
    playing = false
  } else {
    start_button.innerHTML = "Play Again"
    playing = true
  }
  title.style.color = "white"
  title.innerHTML = "Rock Paper Scissors"
}


function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1) {
    botChoice = 'rock'
  }
  if (randomNumber === 2) {
    botChoice = 'scissor'
  }
  if (randomNumber === 3) {
    botChoice = 'paper'
  }
  turnText.innerHTML = "Computer Chose " + botChoice
}


function calculateScore() {
  if (botChoice === userChoice) {

  }
  if (botChoice === 'rock' && userChoice ==='paper') {
    userScore = userScore + 1
  }
  if (botChoice === 'rock' && userChoice ==='scissor') {
    botScore = botScore +1
  }
  if (botChoice === 'paper' && userChoice ==='rock') {
    botScore = botScore + 1
  }
  if (botChoice === 'paper' && userChoice ==='scissor') {
    userScore = userScore + 1
  }
  if (botChoice === 'scissor' && userChoice ==='paper') {
    botScore = botScore + 1
  }
  if (botChoice === 'scissor' && userChoice ==='rock') {
    userScore = userScore + 1
  }

  userScoreDisplay.innerHTML = userScore
  botScoreDisplay.innerHTML = botScore

  if (userScore === 3) {
    playing = false
    title.style.color = "green"
    title.innerHTML = "You Win!"
  }
  if (botScore === 3) {
    playing = false
    title.style.color = "red"
    title.innerHTML = "You Lost!"
  }

}




let possibleChoices = document.querySelectorAll('button');
let start_button = document.getElementById('start')
let title = document.getElementById('title')
let turnText = document.getElementById('turn')
let playing = false
let userScore
let botScore
let userScoreDisplay = document.getElementById('userScore');
let botScoreDisplay = document.getElementById('botScore');
let userChoice
let botChoice
initialize('start')


possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    if (e.target.id === 'start') {
      initialize('replay')
    }
    else {
      if (playing===true) {
        userChoice = e.target.id;
        generateComputerChoice();
        calculateScore()
      }
    }

}));



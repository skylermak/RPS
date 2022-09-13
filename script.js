let playerScore = 0
let computerScore = 0
const buttons = document.querySelectorAll('input')

function computerPlay() {
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}

function playRound(playerSelection) {
    let computerSelection = computerPlay()
    let result = ""
    
    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock')) {
        
        playerScore += 1
        result = "you win"
        
        if (playerScore == 5) {
            result = "you win the game"
        }    
    }
    
    else if (playerSelection == computerSelection) {
        result = "tie"
    }

    else {
        computerScore += 1
        result = "computer wins"
        
        if (playerScore == 5) {
            result = "you lost the game"
        }    
    }
    document.getElementById('result').innerHTML = result
    return
}

buttons.forEach(button =>{
    button.addEventListener('click', function(){
        playRound(button.value)
    })
})
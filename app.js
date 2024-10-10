let userScore = 0
let computerScore = 0

let msg = document.getElementById('msg')
let userScoreBoard = document.getElementById('user-score')
let computerScoreBoard = document.getElementById('comp-score')


const choices = document.querySelectorAll('.choice')
choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute('id')
        playGame(userChoice)
    })
})


const generateComputerChoice = () => {
    const options = ['rock', 'paper', 'scissors']
    const ranind = Math.floor(Math.random() * 3)
    return options[ranind]
}


const drawGame = () => {
    msg.innerText = 'Game draw..? play again'
    msg.style.backgroundColor = '#081b31'

}


const showWinner = (userWin, userChoice, computerChoice) => {
    if (userWin) {
        userScore++
        userScoreBoard.innerText = userScore
        msg.innerText = `You Win! your ${userChoice} beats ${computerChoice}`
        msg.style.backgroundColor = 'green'
    } else {
        computerScore++
        computerScoreBoard.innerText = computerScore
        msg.innerText = `You lose! ${computerChoice} beats your ${userChoice}`
        msg.style.backgroundColor = 'red'

    }

}


const playGame = (userChoice) => {

    // generate computer choice
    const computerChoice = generateComputerChoice()

    if (userChoice === computerChoice) {
        drawGame()
    } else {
        let userWin = false

        // Define user win conditions
        if (
            (userChoice === 'rock' && computerChoice === 'scissors') ||
            (userChoice === 'paper' && computerChoice === 'rock') ||
            (userChoice === 'scissors' && computerChoice === 'paper')
        ) {
            userWin = true
        }

        showWinner(userWin, userChoice, computerChoice)
    }
}

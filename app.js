let userScore = 0
let computerScore = 0

let msg = document.getElementById('msg')

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
    msg.innerText = 'Game draw'
    msg.style.backgroundColor = '#081b31'
    console.log('Game draw');

}
const showWinner = (userWin) => {
    if (userWin) {
        msg.innerText = 'You Win'
        msg.style.backgroundColor = 'green'
        console.log('You win');
    } else {
        msg.innerText = 'You lose'
        msg.style.backgroundColor = 'red'

    }

}
const playGame = (userChoice) => {
    console.log('user choice = ', userChoice);

    // generate computer choice
    const computerChoice = generateComputerChoice()
    console.log('computer choice = ', computerChoice);

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

        showWinner(userWin)
    }
}

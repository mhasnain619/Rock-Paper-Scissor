let userScore = 0
let computerScore = 0

const choices = document.querySelectorAll('.choice')
const generateComputerChoice = () => {
    const options = ['rock', 'paper', 'scissors']
    const ranind = Math.floor(Math.random() * 3)
    return options[ranind]
}
const drawGame = () => {
    console.log('Game draw');

}
const playGame = (userChoice) => {
    console.log('user choice = ', userChoice);

    // generete computer choice
    const computerChioce = generateComputerChoice()
    console.log('computer choice = ', computerChioce);

    if (userChoice === computerChioce) {
        drawGame()
    } else {
        let userWin = true
        if (userChoice === 'rock') {
            userWin = userChoice === 'paper' ? false : true
        }

    }
    choices.forEach((choice) => {
        choice.addEventListener('click', () => {
            const userChoice = choice.getAttribute('id')
            playGame(userChoice)
        })
    })
}
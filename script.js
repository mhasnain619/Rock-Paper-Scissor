let yourScore = 0
let compScore = 0

let msg = document.getElementById('msg')
let userScoreBoard = document.getElementById('user-score')
let computerScoreBoard = document.getElementById('comp-score')

const choices = document.querySelectorAll('.choice')


choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        let userChoice = choice.getAttribute('id')
        playGame(userChoice)
    })
})

const showWinner = (userWin, userChoice, computer) => {
    if (userWin) {
        msg.textContent = 'You Win!'
        yourScore++
        userScoreBoard.innerText = yourScore
        msg.innerText = `You Win! your ${userChoice} beats ${computer}`
        msg.style.backgroundColor = 'green'
    } else {
        compScore++
        computerScoreBoard.innerText = compScore
        msg.innerText = `You lose! ${computer} beats your ${userChoice}`
        msg.style.backgroundColor = 'red'
    }
}

const matchDraw = () => {
    msg.innerText = 'Game draw..? play again'
    msg.style.backgroundColor = '#081b31'
}

const compChoice = () => {
    let options = ['rock', 'paper', 'scissors']
    let copmChoice = Math.floor(Math.random() * 3)
    return options[copmChoice]

}

const playGame = (userChoice) => {
    let computer = compChoice()

    if (userChoice === computer) {
        matchDraw()
    } else {
        let userWin = false
        if (userChoice === 'rock' && computer === 'scissors') {
            userWin = true
        } else if (userChoice === 'paper' && computer === 'rock') {
            userWin = true
        } else if (userChoice === 'scissors' && computer === 'paper') {
            userWin = true
        } else {
            console.log('computer wins');
        }
        showWinner(userWin, userChoice, computer)
    }

}

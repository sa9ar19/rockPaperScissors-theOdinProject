const playerScoreCard = document.querySelector(".player-score")
const computerScoreCard = document.querySelector(".computer-score")
const scoreText = document.querySelector(".score-text")
let playerScore = 0
let computerScore = 0

const compArray = ["rock","paper","scissors"]

function getComputerChoice() {
    return compArray[Math.floor(Math.random() * compArray.length)]
}

const options = document.querySelectorAll(".option")

options.forEach(option => 
        option.addEventListener("click", () => {
            let playerChoice = option.textContent
            let computerChoice = getComputerChoice()
            console.log(playerChoice)
            console.log(computerChoice)

            function playRound() {
                if(computerChoice == "rock") {
                    if (playerChoice == "rock") {
                        console.log("It's a draw")
                        scoreText.innerHTML = "Its a draw"
                    }
                    else if (playerChoice == "paper") {
                        console.log("You Win")
                        scoreText.innerHTML = "You Win"
                        playerScore ++
                    }
                    else if (playerChoice == "scissors") {
                        console.log("You Loose")
                        scoreText.innerHTML = "You Loose"
                        computerScore ++
                    }
                }
                else if(computerChoice == "paper") {
                    if (playerChoice == "rock") {
                        console.log("You Loose")
                        scoreText.innerHTML = "You Loose"
                        computerScore ++
                    }
                    else if (playerChoice == "paper") {
                        console.log("It's a Draw")
                        scoreText.innerHTML = "Its a draw"
                    }
                    else if (playerChoice == "scissors") {
                        console.log("You Win")
                        scoreText.innerHTML = "You Win"
                        playerScore ++
                    }
                }
                else if(computerChoice == "scissors") {
                    if (playerChoice == "rock") {
                        console.log("You Win")
                        scoreText.innerHTML = "You Win"
                        playerScore ++
                    }
                    else if (playerChoice == "paper") {
                        console.log("You Loose")
                        scoreText.innerHTML = "You Loose"
                        computerScore ++
                    }
                    else if (playerChoice == "scissors") {
                        console.log("It's a draw")
                        scoreText.innerHTML = "Its a draw"
                    }
                }
            } 
            playRound(computerChoice, playerChoice)

            playerScoreCard.innerText = playerScore
            computerScoreCard.innerHTML = computerScore

            if(playerScore > 3){
                alert("You WON")
                newGame()
            }
            else if (computerScore > 3){
                alert("You Lost")
                newGame()
            }
        } 
        )
    )

function newGame () {
    playerScore = 0
    computerScore = 0
    playerScoreCard.innerText = 0
    computerScoreCard.innerHTML = 0
}






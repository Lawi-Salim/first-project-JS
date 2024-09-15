                    

/*                     Game ROCK - PAPER - SCISSORS                          */



// Write the logic to get the computer choice

function getComputerChoice() {
    const choiceGame = ["rock", "paper", "scissors"]
    const randomChoice = Math.floor(Math.random() * choiceGame.length)
    const randomShow = choiceGame[randomChoice]
    console.log("Computer has chosen : " + randomShow + "\n")
    return randomShow
}


// Write the logic to get the human choice

function getHumanChoice() {
    const choiceGame = ["rock", "paper", "scissors"]
    const choice = prompt("What is your choice : rock, paper ou scissors ?").toLowerCase()
    while(!choiceGame.includes(choice)) {
        console.log(`Please write "rock", "paper" ou "scissors".`)
        choice = prompt("What is your choice : rock, paper ou scissors ?").toLowerCase()
    }
    console.log("User has chosen : " + choice + "\n")
    return choice
}

// Write the logic to play the entire game

function playGame(rounds) {

    // Score variable declarations
    
    let humanScore = 0
    let computerScore = 0

    
    // Write the logic to play a single round
    
    function playRound(humanChoice, computerChoice) {
    
        if (humanChoice === computerChoice) {
            console.log(`Equality !!!!`)
        }else if(
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            console.log(`${humanChoice} beats ${computerChoice}.`)
            console.log("User won !!!!!\n")
            humanScore++
        } else {
            console.log(`${computerChoice} beats ${humanChoice}.`)
            console.log("Computer won !!!!!\n")
            computerScore++
        }
    
        console.log(`Score : User ${humanScore} - Computer ${computerScore}`)
    }
    
    for (let round = 1; round <= rounds; round++) {
        console.log(`\nRound ${round}`)
        const humanSelection = getHumanChoice()
        const computerSelection = getComputerChoice()
        playRound(humanSelection, computerSelection)
        console.log()
    }
    console.log(`\nScore : User ${humanScore} - Computer ${computerScore}`)

}

playGame(5)
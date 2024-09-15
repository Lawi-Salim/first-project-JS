                    

/*                     Game PIERRE - FEUILLE - CISEAUX                          */



// Logique for choice Computer

function getComputerChoice() {
    const choiceGame = ["rock", "paper", "scissors"]
    const randomChoice = Math.floor(Math.random() * choiceGame.length)
    const randomShow = choiceGame[randomChoice]
    console.log("Computer has chosen : " + randomShow + "\n")
    return randomShow
}



// Logique for choice Human

function getHumanChoice() {
    const choiceGame = ["rock", "paper", "scissors"]
    const choice = prompt("What is your choice : rock, paper ou scissors ?").toLowerCase()
    while(!choiceGame.includes(choice)) {
        console.log(`Please write "pierre", "papier" ou "ciseaux".`)
        choice = prompt("What is your choice : rock, paper ou scissors ?").toLowerCase()
    }
    console.log("User has chosen : " + choice + "\n")
    return choice
}


function playGame(rounds) {
    // Score variable declarations
    
    let humanScore = 0
    let computerScore = 0
    
    
    // Logic for a single turn
    
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

playGame(3)
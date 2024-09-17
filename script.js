const buttons = [
    document.querySelector("#btn1"),
    document.querySelector("#btn2"),
    document.querySelector("#btn3")
]
const libelle = ["Rock", "Paper", "Scissors"]
const images = ["img/pierre.png", "img/papier.png", "img/ciseaux.png"]

const userLibelle = document.querySelector("#userLibelle")
const computerLibelle = document.querySelector("#computerLibelle")

const userImage = document.querySelector("#userImage")
const computerImage = document.querySelector("#computerImage")

function playGame(rounds) {
    let scoreUser = 0;
    let scoreComputer = 0;
    let round = 0;

    // Function to manage each round
    function playRound(userChoice, computerChoice) {
        if (userChoice === computerChoice) {
            document.getElementById("messageBox").innerText = "EQUALITY!";
        } else if (
            (userChoice === "Rock" && computerChoice === "Scissors") ||
            (userChoice === "Paper" && computerChoice === "Rock") ||
            (userChoice === "Scissors" && computerChoice === "Paper")
        ) {
            document.getElementById("messageBox").innerText = "You've won!";
            scoreUser++;
        } else {
            document.getElementById("messageBox").innerText = "The computer won!";
            scoreComputer++;
        }

        document.getElementById("userScore").innerText = `${scoreUser}`;
        document.getElementById("computerScore").innerText = `${scoreComputer}`;
    }

    // Manage user and computer choices on click
    buttons.forEach((button, index) => {
        button.addEventListener("click", () => {
            if (round < rounds) {
                round++;

                // User choice
                const userChoiceText = libelle[index];
                userLibelle.innerHTML = userChoiceText;
                userImage.src = images[index];
                userImage.alt = userChoiceText;

                // Choice of computer
                const choixIndex = Math.trunc(Math.random() * libelle.length);
                const choixComputerText = libelle[choixIndex];
                computerLibelle.innerHTML = choixComputerText;
                computerImage.src = images[choixIndex];
                computerImage.alt = choixComputerText;

                // Comparison of choices
                playRound(userChoiceText, choixComputerText);

                // Check whether the specified number of revolutions has been reached
                if (round === rounds) {
                    if (scoreUser > scoreComputer) {
                        document.getElementById("messageBox").innerText = "User won !";
                    } else if (scoreUser < scoreComputer) {
                        document.getElementById("messageBox").innerText = "Computer won !";
                    } else {
                        document.getElementById("messageBox").innerText = "The game is EQUAL!";
                    }

                    document.getElementById("scoreFinale").innerText = scoreUser + " - " + scoreComputer;

                    // Disable buttons at the end of the game
                    buttons.forEach(button => {
                        button.disabled = true;
                    });

                    // Display a message to replay or reset
                    document.getElementById("messageBox1").innerText = "Game over! Click on 'Reset' to play again.";
                }
            }
        });
    });

    // Reset button for restarting the game
    const resetButton = document.getElementById("resetButton");
    resetButton.addEventListener("click", () => {
        round = 0;
        scoreUser = 0;
        scoreComputer = 0;

        // Reset text and images
        document.getElementById("userScore").innerText = `0`;
        document.getElementById("computerScore").innerText = `0`;
        document.getElementById("scoreFinale").innerText = "";
        document.getElementById("messageBox").innerText = "";
        document.getElementById("messageBox1").innerText = "";

        userLibelle.innerHTML = "";
        computerLibelle.innerHTML = "";
        userImage.src = "";
        computerImage.src = "";


        userLibelle.innerHTML = "";
        computerLibelle.innerHTML = "";

        // Reset images and ensure correct dimensions
        userImage.src = "img/blue.png";

        computerImage.src = "img/blue.png";

        // Reactivate buttons
        buttons.forEach(button => {
            button.disabled = false;
        });
    });
}

playGame(5);

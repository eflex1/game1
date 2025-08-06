function getComputerChoice() {
    let cnumber = Math.floor(Math.random() * 3) + 1;
    if (cnumber === 1) {
        return "Rock";
    } else if (cnumber === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function getHumanChoice() {
    let input = prompt("Choose one:\n1. Rock\n2. Paper\n3. Scissors");

    if (input == 1) {
        return "Rock";
    } else if (input == 2) {
        return "Paper";
    } else if (input == 3) {
        return "Scissors";
    } else {
        alert("Invalid choice");
        return getHumanChoice();
    }
}

let humanScore = 0;
let computerScore = 0;

function playGame() {

    function playRound(humanChoice, computerChoice) {
        alert(`You chose: ${humanChoice}\nComputer chose: ${computerChoice}`);

        if (humanChoice === computerChoice) {
            alert("It's a tie!");
        } else if (
            (humanChoice === "Rock" && computerChoice === "Scissors") ||
            (humanChoice === "Paper" && computerChoice === "Rock") ||
            (humanChoice === "Scissors" && computerChoice === "Paper")
        ) {
            humanScore++;
            alert(`You win! ${humanChoice} beats ${computerChoice}`);
        } else {
            computerScore++;
            alert(`You lose! ${computerChoice} beats ${humanChoice}`);
        }
    }

for(let i=0; i<5; i++){
    playRound(getHumanChoice(), getComputerChoice());
}

    

    alert(`Final Scores:\nYou: ${humanScore}\nComputer: ${computerScore}`);

    if (humanScore > computerScore) {
        alert("Yayyyyy You won the game!");
    } else if (computerScore > humanScore) {
        alert("You lost the game!");
    } else {
        alert("It's a draw!");
    }
}

// Start the game
playGame();
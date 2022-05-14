// randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’
function computerPlay() {
    val = ["scissor", "paper", "rock"];
    return val[Math.floor(Math.random() * 3)]
}


// plays a round of scissor paper rock
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection == "scissor") {
        if (computerSelection == "paper") {
            return "You win! Scissor beats Paper";
        } else if (computerSelection == "rock") {
            return "You lose! Rock beats Scissor";
        } else {
            return "Draw! Scissor vs Scissor";
        }

    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            return "You win! Paper beats Rock";
        } else if (computerSelection == "scissor") {
            return "You lose! Scissor beats Paper";
        } else {
            return "Draw! Paper vs Paper";
        }

    } else {
        if (computerSelection == "scissor") {
            return "You win! Rock beats Scissor";
        } else if (computerSelection == "paper") {
            return "You lose! Paper beats rock";
        } else {
            return "Draw! Rock vs Rock";
        }
    }
}


function game() {

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Enter your bet: scissor, paper or rock  ");
        let computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
}
game();




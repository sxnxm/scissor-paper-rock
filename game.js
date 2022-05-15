
// randomly returns either ‘Rock’, ‘Paper’ or ‘Scissors’
function computerPlay() {
    val = ["scissor", "paper", "rock"];
    return val[Math.floor(Math.random() * 3)]
}


// plays a round of scissor paper rock
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection == "scissor") {
        if (computerSelection == "paper") {
            console.log("You win! Scissor beats Paper");
            return "WIN";
        } else if (computerSelection == "rock") {
            console.log("You lose! Rock beats Scissor");
            return "LOSE";
        } else {
            console.log("Draw! Scissor vs Scissor");
            return "DRAW";
        }

    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            console.log("You win! Paper beats Rock");
            return "WIN";
        } else if (computerSelection == "scissor") {
            console.log("You lose! Scissor beats Paper");
            return "LOSE";
        } else {
            console.log("Draw! Paper vs Paper");
            return "DRAW";
        }

    } else {
        if (computerSelection == "scissor") {
            console.log("You win! Rock beats Scissor");
            return "WIN";
        } else if (computerSelection == "paper") {
            console.log("You lose! Paper beats rock");
            return "LOSE";
        } else {
            console.log("Draw! Rock vs Rock");
            return "DRAW";
        }
    }
}


function game() {
    let winner = "";
    let loser = "";
    let stalematers = "";

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Enter your bet: scissor, paper or rock  ");
        let computerSelection = computerPlay();
        let findWinner = playRound(playerSelection, computerSelection);

        // stores the data of each round
        if (findWinner == "WIN") {
            winner++
        } else if (findWinner == "LOSE") {
            loser++
        } else {
            stalematers++
        }
    }
    // decides the winner 
    if (winner > loser) {
        console.log("You won the match");

    } else if (loser > winner) {
        console.log("You lost the match");

    } else {
        console.log("Draw!");
    }
}

game();

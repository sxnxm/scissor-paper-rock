
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
            return "win";
        } else if (computerSelection == "rock") {
            console.log("You lose! Rock beats Scissor");
            return "lose";
        } else {
            console.log("Draw! Scissor vs Scissor");
            return "draw";
        }

    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            console.log("You win! Paper beats Rock");
            return "win";
        } else if (computerSelection == "scissor") {
            console.log("You lose! Scissor beats Paper");
            return "lose";
        } else {
            console.log("Draw! Paper vs Paper");
            return "draw";
        }

    } else {
        if (computerSelection == "scissor") {
            console.log("You win! Rock beats Scissor");
            return "win";
        } else if (computerSelection == "paper") {
            console.log("You lose! Paper beats rock");
            return "lose";
        } else {
            console.log("Draw! Rock vs Rock");
            return "draw";
        }
    }
}


function game() {
    let win = "";
    let lose = "";
    let draw = "";

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Enter your bet: scissor, paper or rock  ");
        let computerSelection = computerPlay();
        let findWinner = playRound(playerSelection, computerSelection);

        // stores the data of each round
        if (findWinner == "win") {
            win++
        } else if (findWinner == "lose") {
            lose++
        } else {
            draw++
        }
    }
    // decides the winner 
    if (win > lose) {
        console.log("You won");

    } else if (lose > win) {
        console.log("You lose");

    } else {
        console.log("draw");
    }
}

game();

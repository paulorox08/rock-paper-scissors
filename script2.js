// This works

function playerPlay() {
    return prompt("Choose between rock, paper, and scissors");
}

function computerPlay() {
    let options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * options.length)];
}

let playerSelection = playerPlay()
let computerSelection = computerPlay()

function singleRound(playerSelection, computerSelection) {


    if (computerSelection === "rock" && playerSelection === "scissors") {
        return ("You lost! " + computerSelection + " beats " + playerSelection);
    }
    else if (computerSelection === "rock" && playerSelection === "paper" ) {
        return ("You win! " + playerSelection + " beats " + computerSelection);
    }
    else if (computerSelection === "scissors" && playerSelection === "paper" ) {
        return ("You lost! " + computerSelection + " beats " + playerSelection);
    }
    else if (computerSelection === "scissors" && playerSelection === "rock" ) {
        return ("You win! " + playerSelection + " beats " + computerSelection);
    }
    else if (computerSelection === "paper" && playerSelection === "rock" ) {
        return ("You lost! " + computerSelection + " beats " + playerSelection);
    }
    else if (computerSelection === "paper" && playerSelection === "scissors" ) {
        return ("You win! " + playerSelection + " beats " + computerSelection);
    }
    else {
        return ("It is a tie! You both chose " + playerSelection);
    }
}


for (let i = 0; i < 5; i ++) {
    let playerSelection = playerPlay()
    let computerSelection = computerPlay()
    console.log(singleRound(playerSelection, computerSelection))
}



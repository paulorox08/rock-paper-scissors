const results = document.querySelector("#results");

const cScore = document.querySelector('#computerScore');

let computerScore = document.createElement('div');
computerScore.classList.add('compScore');
computerScore.textContent = (0);

cScore.appendChild(computerScore)

const pScore = document.querySelector('#playerScore');

let playerScore = document.createElement('div');
playerScore.classList.add('playaScore');
playerScore.textContent = (0);

pScore.appendChild(playerScore)

function computerPlay() {
    let options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * options.length)];
};

function singleRound(playerSelection, computerSelection) {

    if (computerSelection === "rock" && playerSelection === "scissors") {
        computerScore.textContent ++;
        cScore.appendChild(computerScore)
        return ("You lost! " + computerSelection + " beats " + playerSelection);
    }
    else if (computerSelection === "rock" && playerSelection === "paper" ) {
        playerScore.textContent ++;
        pScore.appendChild(playerScore)
        return ("You win! " + playerSelection + " beats " + computerSelection);
    }
    else if (computerSelection === "scissors" && playerSelection === "paper" ) {
        computerScore.textContent ++;
        cScore.appendChild(computerScore)
        return ("You lost! " + computerSelection + " beats " + playerSelection);
    }
    else if (computerSelection === "scissors" && playerSelection === "rock" ) {
        playerScore.textContent ++;
        pScore.appendChild(playerScore)
        return ("You win! " + playerSelection + " beats " + computerSelection);
    }
    else if (computerSelection === "paper" && playerSelection === "rock" ) {
        computerScore.textContent ++;
        cScore.appendChild(computerScore)
        return ("You lost! " + computerSelection + " beats " + playerSelection);
    }
    else if (computerSelection === "paper" && playerSelection === "scissors" ) {
        playerScore.textContent ++;
        pScore.appendChild(playerScore)
        return ("You win! " + playerSelection + " beats " + computerSelection);
    }
    else {
        return ("It is a tie! You both chose " + playerSelection);
    }
}

function buttonOperation() {
    const rockButton = document.querySelector("#rock");
    rockButton.addEventListener('click', () => {
        let computerSelection = computerPlay();
        const result = document.createElement('div');
        result.textContent = singleRound("rock", computerSelection);

        results.appendChild(result);
        gameOver();
    });

    const paperButton = document.querySelector("#paper");
    paperButton.addEventListener('click', () => {
        let computerSelection = computerPlay();
        const result = document.createElement('div');
        result.textContent = singleRound("paper", computerSelection);

        results.appendChild(result);
        gameOver();
    });

    const scissorsButton = document.querySelector('#scissors');
    scissorsButton.addEventListener('click', () => {
        let computerSelection = computerPlay();
        const result = document.createElement('div');
        result.textContent = singleRound("scissors", computerSelection);

        results.appendChild(result);
        gameOver();
    });

};

buttonOperation();

function gameOver() {
    let compRead = document.querySelector('.compScore').textContent;

    let playaRead = document.querySelector('.playaScore').textContent;

    if (compRead == 5) {
         alert("You lost! The computer beat your ass!");
         while (results.lastElementChild) {
             results.removeChild(results.lastElementChild);
         }
        computerScore.textContent = (0);
        cScore.appendChild(computerScore);

        playerScore.textContent = (0);
        pScore.appendChild(playerScore);
    }
    else if (playaRead == 5) {
        alert("You won! You beat the computer's ass!");
        while (results.lastElementChild) {
            results.removeChild(results.lastElementChild);
        }
       computerScore.textContent = (0);
       cScore.appendChild(computerScore);

       playerScore.textContent = (0);
       pScore.appendChild(playerScore);
    }
};



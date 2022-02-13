const results = document.querySelector("#resultsMessage");

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

const refresh = document.querySelector('#refresh');
refresh.addEventListener('click', () => {
    window.location.reload()
});

function incPlayerScore() {
    playerScore.textContent ++;
    pScore.appendChild(playerScore);
}

function incCompScore() {
    computerScore.textContent ++;
    cScore.appendChild(computerScore)
}

function computerPlay() {
    let options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * options.length)];
};

function singleRound(playerSelection, computerSelection) {

    if (computerSelection === "rock" && playerSelection === "scissors") {
        incCompScore();
        return ("You lost! " + computerSelection + " beats " + playerSelection);
    }
    else if (computerSelection === "rock" && playerSelection === "paper" ) {
        incPlayerScore();
        return ("You win! " + playerSelection + " beats " + computerSelection);
    }
    else if (computerSelection === "scissors" && playerSelection === "paper" ) {
        incCompScore();
        return ("You lost! " + computerSelection + " beats " + playerSelection);
    }
    else if (computerSelection === "scissors" && playerSelection === "rock" ) {
        incPlayerScore();
        return ("You win! " + playerSelection + " beats " + computerSelection);
    }
    else if (computerSelection === "paper" && playerSelection === "rock" ) {
        incCompScore();
        return ("You lost! " + computerSelection + " beats " + playerSelection);
    }
    else if (computerSelection === "paper" && playerSelection === "scissors" ) {
        incPlayerScore();
        return ("You win! " + playerSelection + " beats " + computerSelection);
    }
    else {
        return ("It is a tie! You both chose " + playerSelection);
    }
}

gameOver();

function buttonOperation() {
    const result = document.createElement('div');

    const rockButton = document.querySelector("#rock");
    rockButton.addEventListener('click', () => {
        let computerSelection = computerPlay();
        result.textContent = "";
        result.textContent = singleRound("rock", computerSelection);
        results.appendChild(result);
        gameOver();
    });

    const paperButton = document.querySelector("#paper");
    paperButton.addEventListener('click', () => {
        let computerSelection = computerPlay();
        result.textContent = "";
        result.textContent = singleRound("paper", computerSelection);
        results.appendChild(result);
        gameOver();
    });

    const scissorsButton = document.querySelector('#scissors');
    scissorsButton.addEventListener('click', () => {
        let computerSelection = computerPlay(); //computer chooses rps
        result.textContent = "";
        result.textContent = singleRound("scissors", computerSelection);
        results.appendChild(result);
        gameOver();
    });
};

buttonOperation();

function disableButtons() {
    const rocker = document.querySelector('#rock');
    rocker.disabled = true;
    rocker.style.opacity = '0.7';
    rocker.style.cursor = 'not-allowed';
    rocker.style.pointerEvents = 'none';

    const paperer = document.querySelector('#paper');
    paperer.disabled = true;
    paperer.style.opacity = '0.7';
    paperer.style.cursor = 'not-allowed';
    paperer.style.pointerEvents = 'none';

    const scissorser = document.querySelector('#scissors');
    scissorser.disabled = true;
    scissorser.style.opacity = '0.7';
    scissorser.style.cursor = 'not-allowed';
    scissorser.style.pointerEvents = 'none';

};

// function gameOver() {
//     let compRead = document.querySelector('.compScore').textContent;

//     let playaRead = document.querySelector('.playaScore').textContent;

//     if (compRead == 5) {
//          const finalMessage = document.createElement('div');
//          finalMessage.textContent = ("You lost! The computer beat your ass.");

//          disableButtons();

//          while (results.lastElementChild) {
//              results.removeChild(results.lastElementChild);
//          }
//          results.appendChild(finalMessage);
//     }
//     else if (playaRead == 5) {
//         const finalMessage = document.createElement('div');
//         finalMessage.textContent = ("You won! You beat the computer's ass.");

//         disableButtons();

//         while (results.lastElementChild) {
//             results.removeChild(results.lastElementChild);
//         }
//         results.appendChild(finalMessage);
//     }
// };

const modal = document.querySelector('#myModal');
const modalContent = document.querySelector('.modal-content');

function gameOver() {

    let compRead = document.querySelector('.compScore').textContent;
    let playaRead = document.querySelector('.playaScore').textContent;

    if (compRead == 5) {
         const finalMessage = document.createElement('div');
         finalMessage.textContent = ("You lost! The computer beat your ass.");

         disableButtons();

         modalContent.appendChild(finalMessage);

         modal.style.display = 'block';
    }
    else if (playaRead == 5) {
        const finalMessage = document.createElement('div');
        finalMessage.textContent = ("You won! You beat the computer's ass.");

        disableButtons();

        modalContent.appendChild(finalMessage);

        modal.style.display = 'block';
    }
};
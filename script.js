const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const resultDiv = document.createElement('div');
document.body.appendChild(resultDiv);
const roundDiv = document.createElement('div');
document.body.appendChild(roundDiv);
let humanChoice;
let roundsPlayed = 0;

function getComputerChoice() {
    let compChNum = (Math.floor(Math.random() * 3) + 1);
    let compCh;
    switch (compChNum) {
        case 1:
            compCh = "rock";
            break;
        case 2:
            compCh = "paper";
            break; 
        case 3:
            compCh = "scissors";
            break;
    }
    return compCh;   
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
        roundDiv.textContent = "It's a tie. No one wins. Or loses."
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        roundDiv.textContent = "Paper covers Rock. You win!";
        humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        roundDiv.textContent = "Scissors cuts Paper. You win!";
        humanScore++;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        roundDiv.textContent = "Rock smashes Scissors. You win!";
        humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        roundDiv.textContent = "Rock smashes Scissors. You lose.";
         computerScore++;
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        roundDiv.textContent = "Paper covers Rock. You lose.";
        computerScore++;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        roundDiv.textContent = "Scissors cuts Paper. You lose.";
        computerScore++;
    }
roundsPlayed++;
resultDiv.textContent = `Current Human Score: ${humanScore} and Current Computer Score: ${computerScore}`;

if (humanScore === 5 || computerScore === 5) {
if (humanScore > computerScore) {
    resultDiv.textContent = `Your score is ${humanScore} and you defeated the computer's score [${computerScore}]`;
    humanScore = 0;
    computerScore = 0;
} else if (computerScore > humanScore) {
    resultDiv.textContent = `Your score of ${humanScore} was not enough to beat the computer's score [${computerScore}]`;
    humanScore = 0;
    computerScore = 0;
}};
}

rockBtn.addEventListener('click', () => {
humanChoice = "rock";
const computerChoice = getComputerChoice();
playRound(humanChoice, computerChoice);
})

paperBtn.addEventListener('click', () => {
humanChoice = "paper";
const computerChoice = getComputerChoice();
playRound(humanChoice, computerChoice);
})

scissorsBtn.addEventListener('click', () => {
humanChoice = "scissors";
const computerChoice = getComputerChoice();
playRound(humanChoice, computerChoice);
})



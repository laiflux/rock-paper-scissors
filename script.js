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

console.log(getComputerChoice())

function getHumanChoice() {
   let humChNum = +prompt("Choose your fighter:\n1. Rock\n2.Paper\n3.Scissors", "type a number here")
    let humCh;
   switch (humChNum) {
    case 1:
        humCh = "rock";
        break;
    case 2:
        humCh = "paper";
        break;
    case 3:
        humCh = "scissors";
        break;
    }
    return humCh;
}

console.log(getHumanChoice())


function playGame() {
let humanScore = 0;
let computerScore = 0;

for (let i = 0; i < 5; i++) {

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie. No one wins. Or loses.")
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("Paper covers Rock. You win!");
        humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("Scissors cuts Paper. You win!");
        humanScore++;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("Rock smashes Scissors. You win!");
        humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
         console.log("Rock smashes Scissors. You lose.");
         computerScore++;
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("Paper covers Rock. You lose.");
        computerScore++;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("Scissors cuts Paper. You lose.");
        computerScore++;
    }
}
playRound(humanChoice, computerChoice);
console.log(`Current Human Score: ${humanScore}`)
console.log(`Current Computer Score: ${computerScore}`);
}
console.log(`Final Human Score: ${humanScore}`);
console.log(`Final Computer Score: ${computerScore}`);
}

playGame()
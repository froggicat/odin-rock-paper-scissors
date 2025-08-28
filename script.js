
/*

function playGame() {
    console.log("Your score: " + humanScore.toString());
    console.log("Computer score: " + compScore.toString());

    if (humanScore > compScore) {
        console.log("You win!")
    } else if (compScore > humanScore) {
        console.log("You lose :(");
    } else {
        console.log("Draw!")
    }
}
*/

function getComputerChoice() {
    let compChoice = undefined;
    let compNumber = Math.floor(Math.random() * 3) + 1;
    if (compNumber === 1) {
        compChoice = "rock";
    } else if (compNumber === 2) {
        compChoice = "paper";
    } else {
        compChoice = "scissors";
    }
    return compChoice;
}

let humanScore = 0;
let compScore = 0;

function updateScore() {
    yourScore.textContent = `Your Score : ${humanScore}`;
    computerScore.textContent = `Computer Score : ${compScore}`;
}

function playRound(humanChoice, compChoice) {

    if (humanChoice == "rock" && compChoice == "paper") {
        compScore++;
        alert("You lose! Paper beats rock.");
    } else if (humanChoice == "paper" && compChoice == "scissors") {
        compScore++;
        alert("You lose! Scissors beats paper.");
    } else if (humanChoice == "scissors" && compChoice == "rock") {
        compScore++;
        alert("You lose! Rock beats scissors.");
    } else if (humanChoice == "scissors" && compChoice == "paper") {
        humanScore++;
        alert("You Win! Scissors beats paper.");
    } else if (humanChoice == "paper" && compChoice == "rock") {
        humanScore++;
        alert("You Win! Paper beats rock."); 
    } else if (humanChoice == "rock" && compChoice == "scissors") {
        humanScore++;
        alert("You Win! Rock beats scissors."); 
    } else {
        alert("Draw!")
    }

    updateScore();
};

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", () => {
    playRound("rock", getComputerChoice())
});

paper.addEventListener("click", () => {
    playRound("paper", getComputerChoice())
});

scissors.addEventListener("click", () => {
    playRound("scissors", getComputerChoice())
});

const results = document.querySelector("#results")

const yourScore = document.querySelector("#yourScore")
yourScore.textContent = `Your Score : ${humanScore}`
const computerScore = document.querySelector("#computerScore")
computerScore.textContent = `Computer Score : ${compScore}`
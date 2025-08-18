

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

function getHumanChoice() {
    let humanChoice = prompt("Rock, paper, or scissors? ").toLowerCase();
    return humanChoice;
}


function playGame() {
    let humanScore = 0;
    let compScore = 0;

    let humanChoice = "";
    let compChoice = "";

//    let humanChoice = getHumanChoice();
//    let compChoice = getComputerChoice();

    function playRound(humanChoice, compChoice) {

        humanChoice = getHumanChoice();
        compChoice = getComputerChoice();

        if (humanChoice == "rock" && compChoice == "paper") {
            compScore++;
            console.log("You lose! Paper beats rock.");
        } else if (humanChoice == "paper" && compChoice == "scissors") {
            compScore++;
            console.log("You lose! Scissors beats paper.");
        } else if (humanChoice == "scissors" && compChoice == "rock") {
            compScore++;
            console.log("You lose! Rock beats scissors.");
        } else if (humanChoice == "scissors" && compChoice == "paper") {
            humanScore++;
            console.log("You Win! Scissors beats paper.");
        } else if (humanChoice == "paper" && compChoice == "rock") {
            humanScore++;
            console.log("You Win! Paper beats rock."); 
        } else if (humanChoice == "rock" && compChoice == "scissors") {
            humanScore++;
            console.log("You Win! Rock beats scissors."); 
        } else {
            console.log("Draw! No one scores any points!"); }
        }

    playRound(humanChoice, compChoice);
    playRound(humanChoice, compChoice);
    playRound(humanChoice, compChoice);
    playRound(humanChoice, compChoice);
    playRound(humanChoice, compChoice);

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

playGame();
let hasPlayerChosen = false;
let playerChoice;
let computerChoice;
let playerScore = 0;
let computerScore = 0;


function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()*3)+1;
    console.log(randomNumber);
    if (randomNumber === 1) {
        return "rock";
    } else if (randomNumber === 2) {
        return "paper";
    } else if (randomNumber === 3) {
        return "scissors";
    } else {
        alert("something went wrong in getComputerChoice!");
    }
}

function getPlayerChoice() {
    let playerChoice = prompt("Choose between rock, paper, scissors:");
    playerChoice = playerChoice.toLowerCase();
    if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {
        console.log(playerChoice);
        hasPlayerChosen = true;
        return playerChoice;
    } else if (playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissors") {
        alert("You didn't enter a correct choice, try again!");
        console.log("Wrong player choice! it was: " + playerChoice);
    } else {
        alert("something went wrong in getPlayerChoice!");
    }
}

function compareChoice() {
    if (playerChoice === "rock" && computerChoice === "paper" ||
        playerChoice === "scissors" && computerChoice === "rock" ||
        playerChoice === "paper" && computerChoice === "scissors") {

        console.log("Computer wins!");
        computerScore++;
    } else if (playerChoice === "rock" && computerChoice === "scissors" ||
        playerChoice === "scissors" && computerChoice === "paper" ||
        playerChoice === "paper" && computerChoice === "rock") {

        console.log("Player wins!");
        playerScore++;
    } else if (computerChoice === playerChoice) {
        console.log("It's a draw! No points to anyone!");
    } else {
        alert("Something went wrong when playing the round!");
        }
}

function getChoices() {
    computerChoice = getComputerChoice();

    while (hasPlayerChosen === false) {
        playerChoice = getPlayerChoice();
    }
}

function playRound() {
    getChoices();
    compareChoice();
}

function playGame(rounds) {
    for (let i = 0; i < rounds; i++) {
        playRound();
    }
}

playGame(3);





/* some debug stuff goes here for the time being */
console.log("The computers choice is: " + computerChoice);
console.log("The players choice is: " + playerChoice);
console.log("Player score: " + playerScore);
console.log("Computer score: " + computerScore);
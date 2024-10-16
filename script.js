let hasPlayerChosen = false;
let playerChoice;
let computerChoice;
let playerScore = 0;
let computerScore = 0;

/* ---- REMOVE THIS WHEN DOING THE CSS VERSION ---- */
let debugTexter = document.querySelector(".debuggy");

//We need a random computer choice that's new each round
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()*3)+1;
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

//We need a new player choice each round, that is a correct entry and case insensitive
function getPlayerChoice() {
    let playerChoice = prompt("Choose between rock, paper, scissors:");
    playerChoice = playerChoice.toLowerCase();
    if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {
        hasPlayerChosen = true;
        return playerChoice;
    } else if (playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissors") {
        alert("You didn't enter a correct choice, try again!");
        console.log("Wrong player choice! it was: " + playerChoice);
    } else {
        alert("something went wrong in getPlayerChoice!");
    }
}

// We need to see who won, or if it was a draw
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

//I'm not sure if splitting get Choices and play round actually makes sense, but "a function should only do one thing"
function getChoices() {
    computerChoice = getComputerChoice();
    
    //We need to see if the player has chosen a correct value and not misspelled anything
    while (hasPlayerChosen === false) {
        playerChoice = getPlayerChoice();
    }
}

//we need to be able to play a full round!
function playRound() {
    getChoices();
    compareChoice();
}

// we need to be able to play a full game of multiple rounds and select a winner!
function playGame(rounds) {
    for (let i = 1; i <= rounds; i++) {
        console.log("---- NEW ROUND ----");
        playRound();
        /* some debug stuff goes here for the time being */
        console.log("The computers choice is: " + computerChoice);
        console.log("The players choice is: " + playerChoice);
        console.log("Player score: " + playerScore);
        console.log("Computer score: " + computerScore);
        console.log("Rounds played: " + i);
        hasPlayerChosen = false;
    }
    compareScore();
}

// We need to adequately celebrate the winner
function compareScore() {
    if (playerScore > computerScore) {
        console.log("THE PLAYER WON THE GAME!");
        /* ---- REMOVE THIS WHEN DOING THE CSS VERSION ---- */
        debugTexter.innerHTML = "YOU WON!";
    } else if (playerScore < computerScore) {
        console.log("The COMPUTER won the game");
        /* ---- REMOVE THIS WHEN DOING THE CSS VERSION ---- */
        debugTexter.innerHTML = "YOU LOST! :(";
    } else if (playerScore === computerScore) {
        console.log("it was a draw");
        /* ---- REMOVE THIS WHEN DOING THE CSS VERSION ---- */
        debugTexter.innerHTML = "DRAW";
    } else {
        alert("something went wrong with the final compareScore of the game");
    }

}

playGame(5);




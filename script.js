console.log("tjena tjena");
let hasPlayerChosen = false;
let playerChoice;

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


let computerChoice = getComputerChoice();

while (hasPlayerChosen === false) {
    playerChoice = getPlayerChoice();
}

console.log("The computers choice is: " + computerChoice);
console.log("The players choice is: " + playerChoice);




// This is the function for the computer's output
let computerPlay = () => {
    let options = ["bomb", "cockroach", "foot"];
    let arrayValue = 0;
    let randomNumber = Math.random();

    if (randomNumber >= 0.66) {
        arrayValue = 2;
    } else if (randomNumber >= 0.33 && randomNumber < 0.66) {
        arrayValue = 1;
    } else if (randomNumber < 0.33) {
        arrayValue = 0;
    }

    return options[arrayValue];
}

// This is the prompt for the player to select their weapon
let playerChoice = prompt("Select either Bomb, Cockroach, or Foot");

// This is the function that players a single round
let playGame = (playerSelection, computerSelection) => {
    let playerOption = playerSelection.toLowerCase();

    if (playerSelection ==! "bomb"||playerSelection ==! "cockroach"||playerSelection ==! "foot") {
        Notification("Please select either Bomb, Cockroach, or Foot");
    }

    if (playerOption === computerSelection) {
        console.log("Draw!");
    } else if (playerOption === "bomb") {
        computerSelection === "cockroach" ? console.log("You Lose! || Player: %s Computer: %s", playerOption, computerSelection) : 
        console.log("You Win! || Player: %s Computer: %s", playerOption, computerSelection);
    } else if (playerOption === "cockroach") {
        computerSelection === "bomb" ? console.log("You Win! || Player: %s Computer: %s", playerOption, computerSelection) : 
        console.log("You Lose! || Player: %s Computer: %s", playerOption, computerSelection);
    } else if (playerOption === "foot") {
        computerSelection === "bomb" ? console.log("You Lose!|| Player: %s Computer: %s", playerOption, computerSelection) : 
        console.log("You Win! || Player: %s Computer: %s", playerOption, computerSelection);
    }
}

for (let i=0; i<=5; i++) {
    playGame(playerChoice, computerPlay());
}

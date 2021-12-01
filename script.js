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

// This is a global variable for the score of the game
let playerScore = 0;
let computerScore = 0;

// This is the function that players a single round
let playGame = (playerSelection, computerSelection) => {
    let playerOption = playerSelection.toLowerCase();

    if (playerOption === computerSelection) {
        console.log("Draw!");
        return 0
    } else if (playerOption === "bomb") {
        if (computerSelection === "cockroach") {
            console.log("You Lose! || Player: %s Computer: %s", playerOption, computerSelection);
            return -1
        } else {
            console.log("You Win! || Player: %s Computer: %s", playerOption, computerSelection);
            return 1
        }
    } else if (playerOption === "cockroach") {
        if (computerSelection === "bomb") {
            console.log("You Win! || Player: %s Computer: %s", playerOption, computerSelection);
            return 1
        } else {
            console.log("You Lose! || Player: %s Computer: %s", playerOption, computerSelection);
            return -1
        }
    } else if (playerOption === "foot") {
        if (computerSelection === "bomb") {
            console.log("You Win! || Player: %s Computer: %s", playerOption, computerSelection);
            return 1
        } else {
            console.log("You Lose! || Player: %s Computer: %s", playerOption, computerSelection);
            return -1
        }
    }
}

// Listeners
const dog = document.querySelector("#bomb");
dog.addEventListener("click", () => {
    playGame("rock");
});

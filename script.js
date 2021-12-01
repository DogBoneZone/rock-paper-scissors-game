// Listeners
const bomb = document.querySelector("#bomb");
const foot = document.querySelector("#foot");
const cockroach = document.querySelector("#cockroach");

bomb.addEventListener("click", () => {
    playGame("bomb", computerPlay());
    statsCalc();
});

foot.addEventListener("click", () => {
    playGame("foot", computerPlay());
    statsCalc();
});

cockroach.addEventListener("click", () => {
    playGame("cockroach", computerPlay());
    statsCalc();
});

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

// These are global variables
let playerScore = 0;
let computerScore = 0;
let roundCounter = 0;
const pScoreValue = document.querySelector("#playerScore");
const cScoreValue = document.querySelector("#computerScore");
const roundValue = document.querySelector("#roundCounter");
const resultValue = document.querySelector("#result");

let cockroachScore = 0;
let bombScore = 0;
let footScore = 0;

let cockroachPop = 0;
let footPop = 0;
let bombPop = 0;

const winnerValues =  [
    "Winner... yay...",
    "You're not as stupid as you look.",
    "So you beat a computer, whatever.",
    "Are you tired of clicking yet?",
    "How exciting... you won.",
    "Your mother was a sewer rat.",
    "One night in Bangkok makes a hard man crumble.",
    "Journey was an OK band.",
    "Name as many 'That 70's Show' characters as you can.",
    "Your father sucks eggs at night.",
    "We all wear masks, metaphorically speaking.",
    "Yeah, yeah don't let it get to your head."
];
const loserValues = [
    "Hahahahahahaha!",
    "How embarassing...",
    "Wow, you really suck.",
    "The guy who made this can barely code and you're still losing haha",
    "Tell me you suck without telling me you suck",
    "You're actually trying, right?",
    "Don't quit your day job.",
    "If you listen real hard at night, you can hear the wind say you suck.",
    "You're probably the worst person to play this game.",
    "I'll give you another shot since you seem to have a disability.",
    "Did you hit your head recently or something?",
    "Just stop man... go home."
];

// This is the function that players a single round
let playGame = (playerSelection, computerSelection) => {
    roundCounter++;
    roundValue.querySelector("div").textContent = roundCounter;
    let index = Math.floor(Math.random() * 11 + 1);
    let winner;

    if (playerSelection === computerSelection) {
        console.log("Draw!");
        resultValue.textContent = "DRAW!";
        winner = "None";
    } else if (playerSelection === "bomb") {
        if (computerSelection === "cockroach") {
            console.log("You Lose! || Player: %s Computer: %s", playerSelection, computerSelection);
            resultValue.textContent = `${loserValues[index]}`;
            computerScore++;
            winner = computerSelection;
        } else {
            console.log("You Win! || Player: %s Computer: %s", playerSelection, computerSelection);
            resultValue.textContent = `${winnerValues[index]}`;
            playerScore++;
            winner = playerSelection;
        }
    } else if (playerSelection === "cockroach") {
        if (computerSelection === "bomb") {
            console.log("You Win! || Player: %s Computer: %s", playerSelection, computerSelection);
            resultValue.textContent = `${winnerValues[index]}`;
            playerScore++;
            winner = playerSelection;
        } else {
            console.log("You Lose! || Player: %s Computer: %s", playerSelection, computerSelection);
            resultValue.textContent = `${loserValues[index]}`;
            computerScore++;
            winner = computerSelection;
        }
    } else if (playerSelection === "foot") {
        if (computerSelection === "cockroach") {
            console.log("You Win! || Player: %s Computer: %s", playerSelection, computerSelection);
            resultValue.textContent = `${winnerValues[index]}`;
            playerScore++;
            winner = playerSelection;
        } else {
            console.log("You Lose! || Player: %s Computer: %s", playerSelection, computerSelection);
            resultValue.textContent = `${loserValues[index]}`;
            computerScore++;
            winner = computerSelection;
        }
    }

    pScoreValue.querySelector("div").textContent = playerScore;
    cScoreValue.querySelector("div").textContent = computerScore;

    if (winner !== "None") {
        let construct = (`${winner}` + "Score");
        assignScore(construct)
        console.log(cockroachScore);
        console.log(bombScore);
        console.log(footScore);
    };
}


const assignScore = (string) => {
    if (string === "bombScore") {
        bombScore++;
    } else if (string === "cockroachScore") {
        cockroachScore++;
    } else if (string === "footScore") {
        footScore++;
    }
}

// Calculate Stats
const statsCalc = () => {
    const cockroachStats = document.querySelector("#cockroachStats");
    const bombStats = document.querySelector("#bombStats");
    const footStats = document.querySelector("#footStats");

    // Win Rate
    let cockroachWinRate = ((cockroachScore/roundCounter) * 100).toFixed(2) + "%";
    let bombWinRate = ((bombScore/roundCounter) * 100).toFixed(2) + "%";
    let footWinRate = ((footScore/roundCounter) * 100).toFixed(2) + "%";

    //
    
}

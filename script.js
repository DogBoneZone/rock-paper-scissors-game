// These are global variables
let playerScore = 5;
let computerScore = 5;
let roundCounter = 0;
const pScoreValue = document.querySelector("#playerScore");
const cScoreValue = document.querySelector("#computerScore");
const roundValue = document.querySelector("#roundCounter");
const resultValue = document.querySelector("#result");
const container = document.querySelector("#container");

// End Game Page
const pageContent = document.querySelector("body");
let endGamePage;
let gameEnd = false;

// Scores and Taunt Arrays
let swordScore = 0;
let whipScore = 0;
let shieldScore = 0;

const winnerValues =  [
    'Commodus: "You have struck me..."',
    'Maximus: "You bleed this day."',
    'Commodus: "Do not harm me again, slave. I need to have sex with my sister afterwards."',
    'Maximus: "I have wounded you. How will you have sex with your sister now?"',
    'Commodus: "Ahhh! I am wounded! Having sex with my sister will have to wait until I am done with you."',
    'Maximus: "When you are dead, I will spit on your corpse and let your sister know she can no longer have sex with you."',
    'Commodus: "Ouch! I am exhausted and slow from recently having sex with my sister."',
    'Maximus: "Let my blade sink deeper into you, as you similarly do to your sister."',
    'Commodus: "The gods have abandoned me on this day! I must have sex with my sister!"',
    'Maximus: "I nearly took your head just then. Perhaps you need to have sex with your sister less."',
    'Commodus: "This wound will not stop me from having sex with my sister!"',
    'Maximus: "May the wounds I inflict upon you persist as long as the sex with your sister."'
];
const loserValues = [
    'Commodus: "HA! I have struck you! This calls for some sex with my sister."',
    'Maximus: "Ahh, you have struck me... you must be energized from having sex with your sister."',
    'Commodus: "After I kill you, I need to go have sex with my sister."',
    'Maximus: "These wounds inhibit my combat prowess... do your wounds inhibit the sex with your sister?"',
    'Commodus: "The sight of your blood drives me into a frenzy, much like when I have sex with my sister."',
    'Maximus: "The pain you have caused me is worsened every time you have sex with your sister."',
    'Commodus: "I revel in your pain, almost as much as I revel in ecstasy when I have sex with my sister."',
    'Maximus: "I shall let this pain drive my fury. You shall regret having sex with your sister on this day."',
    'Commodus: "I will have sex with my sister immediately after I kill you."',
    'Maximus: "If I die today, know that I shall join my family. Speaking of family, dont you have sex with your sister?"',
    'Commodus: "The crowd watches you bleed today, Maximus. And afterwards, they will watch me have sex with my sister."',
    'Maximus: "Sex. With. My. Sister."'
];

// This is the function for the computer's output
let computerPlay = () => {
    let options = ["whip", "sword", "shield"];
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
    } else if (playerSelection === "whip") {
        if (computerSelection === "sword") {
            console.log("You Lose! || Player: %s Computer: %s", playerSelection, computerSelection);
            resultValue.textContent = `${loserValues[index]}`;
            playerScore--;
            winner = computerSelection;
        } else {
            console.log("You Win! || Player: %s Computer: %s", playerSelection, computerSelection);
            resultValue.textContent = `${winnerValues[index]}`;
            computerScore--;
            winner = computerSelection;
        }
    } else if (playerSelection === "shield") {
        if (computerSelection === "sword") {
            console.log("You Win! || Player: %s Computer: %s", playerSelection, computerSelection);
            resultValue.textContent = `${winnerValues[index]}`;
            computerScore--;
            winner = playerSelection;
        } else {
            console.log("You Lose! || Player: %s Computer: %s", playerSelection, computerSelection);
            resultValue.textContent = `${loserValues[index]}`;
            playerScore--;
            winner = computerSelection;
        }
    } else if (playerSelection === "sword") {
        if (computerSelection === "whip") {
            console.log("You Win! || Player %s Computer: %s", playerSelection, computerSelection);
            resultValue.textContent = `${winnerValues[index]}`;
            computerScore--;
            winner = playerSelection;
        }
    }

    pScoreValue.querySelector("div").textContent = `${playerScore} HP`;
    cScoreValue.querySelector("div").textContent = `${computerScore} HP`;

    // Assign Score Function
    if (winner !== "None") {
        let construct = (`${winner}` + "Score");
        assignScore(construct)
    };

    // Check for End of Game
    if (playerScore <= 0) {
        gameEnd = true;
        endGamePage = `<div id="endGamePage">
                            <div>
                                <img src="images/joaquinPhoenix.jpeg" alt="joaquinPhoenix img">
                            </div>
                            <div>
                                "In what world could you have ever defeated me? Such a place does not exist."
                            </div>
                            <div id="reset">
                                <button>Fight Again</button>
                            </div>
                        </div>`
        pageContent.innerHTML = endGamePage;
        const reset = document.querySelector("#reset");
        reset.addEventListener("click", () => {
            location.reload();
        });
        
    } else if (computerScore <= 0) {
        gameEnd = true;
        endGamePage = `<div id="endGamePage">
                            <div>
                                <img src="images/maximus.jpeg" alt="maximus img">
                            </div>
                            <div>
                                You have won... but you will succumb to your wounds soon... your family awaits.
                            </div>
                            <div id="reset">
                                <button>Fight Again</button>
                            </div>
                        </div>`
        pageContent.innerHTML = endGamePage;

        const reset = document.querySelector("#reset");
        reset.addEventListener("click", () => {
            location.reload();
        }); 
    }
}


const assignScore = (string) => {
    if (string === "whipScore") {
        whipScore++;
    } else if (string === "swordScore") {
        swordScore++;
    } else if (string === "shieldScore") {
        shieldScore++;
    }
}

// Listeners
const whip = document.querySelector("#whip");
const shield = document.querySelector("#shield");
const sword = document.querySelector("#sword");


whip.addEventListener("click", () => {
    playGame("whip", computerPlay());
});

shield.addEventListener("click", () => {
    playGame("shield", computerPlay());
});

sword.addEventListener("click", () => {
    playGame("sword", computerPlay());
});

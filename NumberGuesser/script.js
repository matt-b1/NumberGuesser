let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor(Math.random() * 10);

const compareGuesses = (human, computer, target) => getAbsoluteDistance(human, target) <= getAbsoluteDistance(computer, target) ? true : false;

function updateScore(winner) {
    if (winner === 'human') {
        humanScore += 1;
    }
    else {
        computerScore += 1;
    }
}

function advanceRound() {
    currentRoundNumber += 1;
}

const getAbsoluteDistance = (guess, target) => (Math.abs(guess - target));




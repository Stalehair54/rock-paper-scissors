// Make a function that randomly spits out [rock,paper,scisssors]
// Make a function that takes player input and AI data a gives a winner 
// Write game function that plays 5 rounds and spits winner (use loops for this!)

//Making an array of data for the ai to choose from 

const computerOptions = [
    "rock", "paper", "scissors"
];

// making a function that calls a random string

function computerPlay(){
    return computerOptions[Math.floor(Math.random()*computerOptions.length)]
};

let computerSelection = computerPlay()
console.log(computerSelection)

// Geting player input 

let playerSelection = prompt('Rock, Paper, Scissors').toLowerCase()

// Base function of the game

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'rock') {
        return "tie game"  
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'You Lose'
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You Win'
    }

    if (playerSelection === 'paper' && computerSelection === 'rock') {
        return "You Win"
    }
    else if (playerSelection === 'paper' && computerSelection === 'paper') {
        return 'tie game'
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'You Lose'
    }

    if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return "You Lose"
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You Win'
    }
    else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        return 'tie game'
    }
    else {
        return 'You have to make a choice'
    }
};

console.log(playRound(playerSelection, computerSelection));
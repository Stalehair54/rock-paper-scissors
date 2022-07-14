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
      let playerScore = 0 
        let computerScore= 0


function playRound(playerSelection, computerSelection) {
    let result = ""
    if (playerSelection === 'rock' && computerSelection === 'rock') {
       return result = "tie game";
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper') {
       result = 'You Lose',
        computerScore++ 
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        result = 'You Win';
        playerScore++;
    }

    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        result = 'You Win';
        playerScore++;
    }
    else if (playerSelection === 'paper' && computerSelection === 'paper') {
        result = "tie game";
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        result = 'You Lose';
        computerScore++
    }

    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        result = 'You Lose';
        computerScore++
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        result = 'You Win';
        playerScore++;
    }
    else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        result = "tie game";
    }
    else {
        return 'You have to make a choice'
    }
};

 // console.log(playRound(playerSelection, computerSelection));

// Making the 5 round game

//Getting the score 

// function needs to take in score and add to either the player or the computer then after 5 turns return a winner

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Rock, Paper, Scissors').toLowerCase()
        const computerSelection = computerPlay()
        console.log(computerSelection)
        playRound(playerSelection,computerSelection)
        console.log(playRound(playerSelection,computerSelection))
    }
    if (playerScore > computerScore) {
        return "you win"
    } else {
        return 'you lose'
    }
}

console.log(game())

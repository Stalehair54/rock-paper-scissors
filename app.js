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

 
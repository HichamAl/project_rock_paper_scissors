function getComputerChoice () {
    let randomNumber = Math.floor(Math.random()*3);

    if (randomNumber === 0) {
        let computerChoice = "rock";
        return computerChoice;
    } else if (randomNumber === 1) {
        let computerChoice = "paper";
        return computerChoice;
    } else {
        let computerChoice = "scissors";
        return computerChoice;
    }    
}

function getHumanChoice () {
    let getChoice = prompt("Enter a choice: rock, paper or scissors");
    let choiceLowercase = getChoice.toLowerCase();

    if (choiceLowercase === "rock") {
        let userChoice = "rock";
        return userChoice;
    } else if (choiceLowercase === "paper") {
        let userChoice = "paper";
        return userChoice;
    } else if (choiceLowercase === "scissors"){
        let userChoice = "scissors";
        return userChoice;
    }
}

function playRound (humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "rock") {
        console.log(`It's a draw, ${humanChoice} against ${computerChoice}.`)
    } else if (humanChoice === "paper" && computerChoice === "paper") {
        console.log(`It's a draw, ${humanChoice} against ${computerChoice}.`)
    } else if (humanChoice === "scissors" && computerChoice === "scissors") { 
        console.log(`It's a draw, ${humanChoice} against ${computerChoice}.`)
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log(`You win, ${humanChoice} beats ${computerChoice}.`) 
        return `user wins`
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log(`You lose, ${computerChoice} beats ${humanChoice}.`)
        return `computer wins`
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log(`You win, ${humanChoice} beats ${computerChoice}.`)
        return `user wins`
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log(`You lose, ${computerChoice} beats ${humanChoice}.`)
        return `computer wins`
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log(`You win, ${humanChoice} beats ${computerChoice}.`)
        return `user wins`
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log(`You lose, ${computerChoice} beats ${humanChoice}.`)
        return `computer wins`
    }
}

let humanScore = 0;
let computerScore = 0;

// Round One
let computerChoiceRoundOne = getComputerChoice();
let humanChoiceRoundOne = getHumanChoice();
let winnerRoundOne = playRound(humanChoiceRoundOne, computerChoiceRoundOne);
if (winnerRoundOne === "user wins") {
    humanScore++;
} else if (winnerRoundOne === "computer wins") {
    computerScore++;
} 
console.log(`The score is: ${humanScore} (You) ${computerScore} (computer).`);

// Round Two
let computerChoiceRoundTwo = getComputerChoice();
let humanChoiceRoundTwo = getHumanChoice();
let winnerRoundTwo = playRound(humanChoiceRoundTwo, computerChoiceRoundTwo);
if (winnerRoundTwo === "user wins") {
    humanScore++;
} else if (winnerRoundTwo === "computer wins") {
    computerScore++;
}
console.log(`The score is: ${humanScore} (You) ${computerScore} (computer).`);

// Round Three
let computerChoiceRoundThree = getComputerChoice();
let humanChoiceRoundThree = getHumanChoice();
let winnerRoundThree = playRound(humanChoiceRoundThree, computerChoiceRoundThree);
if (winnerRoundThree === "user wins") {
    humanScore++;
} else if (winnerRoundThree === "computer wins") {
    computerScore++;
}
console.log(`The score is: ${humanScore} (You) ${computerScore} (computer).`);

// Round Four
let computerChoiceRoundFour = getComputerChoice();
let humanChoiceRoundFour = getHumanChoice();
let winnerRoundFour = playRound(humanChoiceRoundFour, computerChoiceRoundFour);
if (winnerRoundFour === "user wins") {
    humanScore++;
} else if (winnerRoundFour === "computer wins") {
    computerScore++;
}
console.log(`The score is: ${humanScore} (You) ${computerScore} (computer).`);

// Round Five
let computerChoiceRoundFive = getComputerChoice();
let humanChoiceRoundFive = getHumanChoice();
let winnerRoundFive = playRound(humanChoiceRoundFive, computerChoiceRoundFive);
if (winnerRoundFive === "user wins") {
    humanScore++;
} else if (winnerRoundFive === "computer wins") {
    computerScore++;
}
console.log(`The score is: ${humanScore} (You) ${computerScore} (computer).`);






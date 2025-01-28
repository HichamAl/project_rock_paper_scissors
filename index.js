function getComputerChoice () {
    let randomNumber = Math.floor(Math.random()*3);

    if (randomNumber == 0) {
        let computerChoice = "rock";
        return computerChoice;
    } else if (randomNumber == 1) {
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

    if (choiceLowercase == "rock") {
        let userChoice = "rock";
        return userChoice;
    } else if (choiceLowercase == "paper") {
        let userChoice = "paper";
        return userChoice;
    } else if (choiceLowercase == "scissors"){
        let userChoice = "scissors";
        return userChoice;
    }
}

function playGame(){

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice){
        if (humanChoice == computerChoice){
            console.log("It's a draw..");
        } else if (
            (humanChoice == "rock" && computerChoice == "scissors") ||
            (humanChoice == "paper" && computerChoice == "rock")||
            (humanChoice == "scissors" && computerChoice == "paper")) {
                console.log(`You win! ${humanChoice} beats ${computerChoice}`);
                ++humanScore;
            }
            else {
                console.log(`You lost, ${computerChoice} beats ${humanChoice}`);
                ++computerScore;
            }
    }

    // for (let i = 0; i < 5; ++i){
    //     const humanChoice = getHumanChoice();
    //     const computerChoice = getComputerChoice();
    //     playRound(humanChoice, computerChoice);
    //     console.log(`humanscore: ${humanScore} computerscore: ${computerScore}`);
    // }

    // ctrl + k + c comment geselecteerde text
     
    if (humanScore == computerScore){
        console.log(`The game is a draw`);
    } else if (humanScore > computerScore){
        console.log(`You win the game`);
    } else {console.log(`You lose the game`);

    }
    
}

// playGame();














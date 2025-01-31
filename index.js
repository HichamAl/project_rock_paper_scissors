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
        return computerChoice;}    
};

let humanScore = 0;
let computerScore = 0;  

// get winner
const getwinnerdiv = document.querySelector("#winner");
let winner = document.createElement("p");
getwinnerdiv.appendChild(winner);

// score 
const scorediv = document.querySelector("#score");
let score = document.createElement("p");
scorediv.appendChild(score);

// round result
const results = document.querySelector("#results");
const roundresult = document.createElement("p");
results.appendChild(roundresult);

function playRound(cpuchoice, humchoice){
    if (humchoice == cpuchoice){
        roundresult.textContent = `It's a draw.. your ${humchoice} vs cpu's ${cpuchoice}`} 
        else if (
            (humchoice == "rock" && cpuchoice == "scissors") ||
            (humchoice == "paper" && cpuchoice == "rock")||
            (humchoice == "scissors" && cpuchoice == "paper")) {
                roundresult.textContent = `You win! Your ${humchoice} beats cpu's ${cpuchoice}`;
                ++humanScore;}
            else {
                roundresult.textContent = `You lost, cpu chose ${cpuchoice} which beats your ${humchoice}`;
                ++computerScore;}
        score.textContent = `Human score ${humanScore} - Cpu score ${computerScore}`;

        if (humanScore == 5){
            winner.textContent = `Congrats you won!`;
        }
            else if (computerScore == 5){
                winner.textContent = `Commiserations you lost against the CPU.`;
            };    
    }

    const rock = document.querySelector("#rock");
    rock.addEventListener("click", () => {
        const cpuchoice = getComputerChoice();
        const humchoice = "rock";
        playRound(cpuchoice, humchoice);
      });
    
    const paper = document.querySelector("#paper");
    paper.addEventListener("click", () => {
        const cpuchoice = getComputerChoice();
        const humchoice = "paper";
        playRound(cpuchoice, humchoice);
      });
    
    const scissors = document.querySelector("#scissors");
    scissors.addEventListener("click", () => {
        const cpuchoice = getComputerChoice();
        const humchoice = "scissors";
        playRound(cpuchoice, humchoice);
      });














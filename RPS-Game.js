const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
let playerEl = document.getElementById("player-el");
let computerEl = document.getElementById("computer-el");
const choices = ["r","p","s"];
let humanChoice;
let humanPoint = 0;
let cpmtPoint = 0;

function rock(){
    humanChoice ="r";
    console.log(humanChoice);
    playSingleRound();
    
}
function paper(){
    humanChoice = "p";
    console.log(humanChoice);
    playSingleRound();
}
function scissors(){
    humanChoice = "s";
    console.log(humanChoice);
    playSingleRound();
}





function getComputerChoice(){
    return choices[Math.floor(Math.random()* choices.length)];
}


function playSingleRound(){
    let computerChoice = getComputerChoice();
    console.log(humanChoice+computerChoice)
    switch(humanChoice+computerChoice){
        case "rs":
        case "pr":
        case "sp":
             humanPoint++;
             playerEl.textContent = humanPoint;
             computerEl.textContent = cpmtPoint;
            break;
        case "rp":
        case "ps":
        case "sr":
            cpmtPoint++;
            playerEl.textContent = humanPoint;
            computerEl.textContent = cpmtPoint;
            break;
        case "rr":
        case "pp":
        case "ss":
            return"Its a draw";
            break;
    }
}


























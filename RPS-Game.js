const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const inf = document.getElementById("inf");
let playerEl = document.getElementById("player-el");
let computerEl = document.getElementById("computer-el");
const choices = ["r","p","s"];
let humanChoice;
let humanPoint = 0;
let cpmtPoint = 0;

let messagesWin = {
    rock: "You Won!!  Rock beats scissor",
    paper:"You Won!!  Paper beats rock",
    scissor: "You Won!!  Scissor beats paper",
    
}

let messagesLose = {
    rock: "You Lost :( Paper beats rock",
    paper: "You Lost :( Scissor beats paper",
    scissors: "You Lost :( Rock beats scissor"
}



function changeBackground(element,color){
    document.getElementById(element).style.backgroundColor = color;
 
}

function rock(){
    humanChoice ="r";
    console.log(humanChoice);
    playSingleRound("rock");
    
    
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


function playSingleRound(element){
    let computerChoice = getComputerChoice();
    console.log(humanChoice+computerChoice)
    switch(humanChoice+computerChoice){
        case "rs": inf.textContent = messagesWin.rock;
            humanPoint++;
             playerEl.textContent = humanPoint;
             computerEl.textContent = cpmtPoint;
             break;
        case "pr": inf.textContent = messagesWin.paper;
        humanPoint++;
             playerEl.textContent = humanPoint;
             computerEl.textContent = cpmtPoint;
             break;
        case "sp": inf.textContent = messagesWin.scissor;
            humanPoint++;
             playerEl.textContent = humanPoint;
             computerEl.textContent = cpmtPoint;
             break;
             
             
             
            
        case "rp": inf.textContent = messagesLose.rock;
        cpmtPoint++;
            playerEl.textContent = humanPoint;
            computerEl.textContent = cpmtPoint;
            break;
        case "ps": inf.textContent = messagesLose.paper;
        cpmtPoint++;
            playerEl.textContent = humanPoint;
            computerEl.textContent = cpmtPoint;
            break;
        case "sr":inf.textContent = messagesLose.scissors;
            cpmtPoint++;
            playerEl.textContent = humanPoint;
            computerEl.textContent = cpmtPoint;
            break;
        case "rr":
        case "pp":
        case "ss":
            inf.textContent  = " It's a draw!!! "
            break;
    }


    
}




























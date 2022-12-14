
const rulesPara = document.getElementById("rules");
const instruct = document.getElementById("instruct");
const startBtn = document.getElementById("start");
const gameContainer = document.getElementById("game-container");

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");

const playerPoints = document.getElementById("player-points");
const computerPoints = document.getElementById("computer-points");

const computerTool = document.getElementById("computer-tool");
const playerTool = document.getElementById("player-tool")

const result = document.getElementById("result");
const replay = document.getElementById("replay");


let playerSelection;
let computerSelection;

let count1 = 0;
let count2 = 0;

let start = false;

function startGame(){
    console.log("game started");
    startBtn.style.display= "none";
    rulesPara.style.display= "block";
    setTimeout(gameContainerDisplay, 5000);
    start = true;
}

function gameContainerDisplay(){
    rulesPara.style.display="none";
    setTimeout(() => {
        gameContainer.style.display="block"
    }, 500); 
}

function getComputerChoice(){
    let num = Math.floor(Math.random()*3)+1
    if(num === 1){
        return "rock"
    }else if (num === 2){
        return "paper"
    } else if (num === 3){
        return "scissor"
    }
}

function gameReplay(){
    instruct.style.display="block";
    replay.style.display = "none";
    count1 = 0;
    count2 = 0;
    computerPoints.innerHTML = count1;
    playerPoints.innerHTML = count2;
    result.innerHTML = "Game Status";
    start = true;
    computerTool.innerHTML = ""
    playerTool.innerHTML = ""

}

function Comparison(){
    console.log("this is comparison function")
    if(computerSelection === playerSelection){
        computerTool.innerHTML = `<img class="tool" src="./images/${computerSelection}.jpg">`
        playerTool.innerHTML = `<img class="tool" src="./images/${playerSelection}.jpg">`
        result.innerHTML = "game-tie"
    }else if((computerSelection === "rock" && playerSelection === "scissor") || (computerSelection === "paper" && playerSelection === "rock") || (computerSelection === "scissor" && playerSelection === "paper")){
        console.log("computer won")
        count1++
        computerPoints.innerHTML = count1;
        computerTool.innerHTML = `<img class="tool" src="./images/${computerSelection}.jpg">`
        playerTool.innerHTML = `<img class="tool" src="./images/${playerSelection}.jpg">`
        result.innerHTML = "computer won";

        if(count1 === 5){
            start = false;
            instruct.style.display = "none";
            replay.style.display ="block";
            result.innerHTML = "Sorry! You have lost the battle."
        }
    }else if((computerSelection === "rock" && playerSelection === "paper") || (computerSelection === "paper" && playerSelection === "scissor") || (computerSelection === "scissor" && playerSelection === "rock")){
        console.log("player won")
        count2++
        playerPoints.innerHTML = count2;
        computerTool.innerHTML = `<img class="tool" src="./images/${computerSelection}.jpg">`
        playerTool.innerHTML = `<img class="tool" src="./images/${playerSelection}.jpg">`
        result.innerHTML = "player won"
        if(count2 === 5){
            start = false;
            instruct.style.display = "none";
            replay.style.display ="block";
            result.innerHTML = "congragulation! you have won the battle."
        }
    }
}

rock.addEventListener('click', ()=>{
    if(start){
        playerSelection = "rock";
        computerSelection = getComputerChoice();
        Comparison();
    }
    
});

paper.addEventListener('click', ()=>{
    if(start){
        playerSelection = "paper";
        computerSelection = getComputerChoice();
        Comparison();
    }
});
    
scissor.addEventListener('click', ()=>{
    if(start){
        playerSelection = "scissor";
        computerSelection = getComputerChoice();
        Comparison();
    }
});






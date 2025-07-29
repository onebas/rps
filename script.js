function getComputerChoice(){
    let num = Math.floor(Math.random()*3);
    let compChoice;
    if(num==0){
        compChoice="rock";
    }
    else if(num==1){
        compChoice="paper";
    }
    else{
        compChoice="scissor";
    }
    console.log(compChoice);
    return compChoice;

}

function getHumanChoice(){
    let userInput = prompt("Input your choice: ");
    return userInput
}

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    if(humanChoice=="rock"){
        if(computerChoice=="rock"){
            console.log(`${humanChoice} vs ${computerChoice}  Its a draw`);
        }
        else if(computerChoice=="paper"){
            console.log(`${humanChoice} vs ${computerChoice}  Comp Wins`);
            compScore++;
        }
        else{
            console.log(`${humanChoice} vs ${computerChoice}  You win`);
            humanScore++;
        }
    }
    else if(humanChoice=="paper"){
        if(computerChoice=="rock"){
            console.log(`${humanChoice} vs ${computerChoice}  You win`);
            humanScore++;
        }
        else if(computerChoice=="paper"){
            console.log(`${humanChoice} vs ${computerChoice}  Its a draw`);
        }
        else{
            console.log(`${humanChoice} vs ${computerChoice}  Comp win`);
            compScore++;
        }
    }
    else if(humanChoice=="scissor"){
        if(computerChoice=="rock"){
            console.log(`${humanChoice} vs ${computerChoice}  You lose`);
            compScore++;
        }
        else if(computerChoice=="paper"){
            console.log(`${humanChoice} vs ${computerChoice}  You win`);
            humanChoice++;
        }
        else{
            console.log(`${humanChoice} vs ${computerChoice}  Its a draw`);
        }
    }


}

function playGame(){
    for(let i=0;i<5;i++){
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    if(humanScore<compScore){
        console.log("Computer Won");
    }
    else{
        console.log("You win");
    }
}


let humanScore = 0, compScore = 0;
playGame();
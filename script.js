

// // function getHumanChoice(){
// //     let userInput = prompt("Input your choice: ");
// //     return userInput
// // }





let humanScore = 0, compScore = 0;
const result = document.querySelector(".result");
const buttons = document.querySelector(".buttons");
const humanscore = document.querySelector(".humanscore");
const compscore = document.querySelector(".compscore");
buttons.addEventListener("click", clicked);


function updateImage(humanSelection, computerSelection){
    const playerImg = document.querySelector(".playerImg");
    const compImg = document.querySelector(".compImg");

    switch(humanSelection){
        case "rock":
            playerImg.setAttribute("src", "./assets/rock.png");
            break;
        case "paper":
            playerImg.setAttribute("src", "./assets/paper.png");
            break;
        case "scissor":
            playerImg.setAttribute("src", "./assets/scissor.png");
            break;
    }

    switch(computerSelection){
        case "rock":
            compImg.setAttribute("src", "./assets/rock.png");
            break;
        case "paper":
            compImg.setAttribute("src", "./assets/paper.png");
            break;
        case "scissor":
            compImg.setAttribute("src", "./assets/scissor.png");
            break;
    }
}

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    if(humanChoice=="rock"){
        if(computerChoice=="rock"){
            result.textContent = `Its a draw`;
        }
        else if(computerChoice=="paper"){
            result.textContent = `Comp Wins`;
            compScore++;
        }
        else{
            result.textContent = `You win`;
            humanScore++;
        }
    }
    else if(humanChoice=="paper"){
        if(computerChoice=="rock"){
            result.textContent = `You win`;
            humanScore++;
        }
        else if(computerChoice=="paper"){
            result.textContent = `Its a draw`;
        }
        else{
            result.textContent = `Comp win`;
            compScore++;
        }
    }
    else if(humanChoice=="scissor"){
        if(computerChoice=="rock"){
            result.textContent = `Comp Wins`;
            compScore++;
        }
        else if(computerChoice=="paper"){
            result.textContent = `You win`;
            humanScore++;
        }
        else{
            result.textContent = `Its a draw`;
        }
    }
}

function updateScore(humanScore, compScore){
    humanscore.textContent = humanScore;
    compscore.textContent = compScore;

}

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
    result.textContent = (compChoice);
    return compChoice;
}

function playGame(humanSelection){
    let computerSelection = getComputerChoice();
    updateImage(humanSelection.toLowerCase(), computerSelection);
    playRound(humanSelection, computerSelection);
    updateScore(humanScore, compScore)
    if(humanScore==5){
        result.textContent = "You won the game";
        buttons.removeEventListener("click", clicked);

    }
    else if(compScore==5){
        result.textContent = "Comp won the game";
        buttons.removeEventListener("click", clicked);
    }
}

function clicked(e){
    playGame(String(e.target.id));       
}

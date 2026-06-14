let humanscore= 0;
let computerscore= 0;
let gameover = false;
function getComputerChoice(){
    let choice=Math.floor(Math.random()*3);
    if(choice==0)return "rock";
    else if(choice==1)return "paper";
    else return "scissors";
}

    const finalhscore = document.createElement("div");
    const finalcscore = document.createElement("div");
    const result = document.createElement("div");

function updateDisplay(roundResult) {
    result.textContent = roundResult;
    finalhscore.textContent = "You: " + humanscore;
    finalcscore.textContent = "Computer: " + computerscore;
    if (humanscore === 5) {
        result.textContent = "You win the game!";
        gameover = true;
    } else if (computerscore === 5) {
        result.textContent = "Computer wins the game!";
        gameover = true;
    }
}

function playRound(humanChoice){
    if(gameover)return;
    let computerChoice = getComputerChoice();
    if(humanChoice == computerChoice)updateDisplay("It's a TIE!!");
    else if(humanChoice == "rock" && computerChoice == "scissors" ||
       humanChoice == "paper" && computerChoice == "rock" ||
       humanChoice == "scissors" && computerChoice == "paper") {humanscore++; updateDisplay("You WIN!! " + humanChoice + " beats " + computerChoice)}
    else { computerscore++; updateDisplay("You LOSE!! " + computerChoice + " beats " + humanChoice)};
}
    const rockbtn = document.createElement("button");
    rockbtn.textContent = "Rock";
    rockbtn.addEventListener('click', function(){
        let humanChoice = "rock";
        playRound(humanChoice);
    });

     const paperbtn = document.createElement("button");
    paperbtn.textContent = "Paper";
    paperbtn.addEventListener('click', function(){
        let humanChoice = "paper";
        playRound(humanChoice);
    });

    const scissorsbtn = document.createElement("button");
    scissorsbtn.textContent = "Scissors";
    scissorsbtn.addEventListener('click', function(){
        let humanChoice = "scissors";
        playRound(humanChoice);
    });

document.body.appendChild(rockbtn);
document.body.appendChild(paperbtn);
document.body.appendChild(scissorsbtn);
document.body.appendChild(finalhscore);
document.body.appendChild(finalcscore);
document.body.appendChild(result);

updateDisplay("Pick your choice!");
    
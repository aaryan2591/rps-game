function getComputerChoice(){
    let choice=Math.floor(Math.random()*3);
    if(choice==0)return "rock";
    else if(choice==1)return "paper";
    else return "scissors";
}
function getHumanChoice(){
    let choice2=prompt("Enter your choice(rock/paper/scissors)");
    choice2=choice2.toLowerCase();
    return choice2;
}
let humanscore= 0;
let computerscore= 0;
function playRound(humanChoice,computerChoice){
    humanChoice=humanChoice.toLowerCase();
    if(humanChoice==computerChoice ){
        console.log("It's a TIE!! Same choice.");
    }
    else if(humanChoice=="rock" && computerChoice=="scissors"||
            humanChoice=="paper" && computerChoice=="rock"||
            humanChoice=="scissors" && computerChoice=="paper"
    ){
        console.log("You WIN!!"+humanChoice+" beats "+computerChoice);
        humanscore++;
    }
    else{
        console.log("You LOSE!!"+computerChoice+" beats "+humanChoice);
        computerscore++;
    }
}
function playGame(){
    for(let i=0;i<5;i++){
        let humanSelection=getHumanChoice();
        let computerSelection=getComputerChoice();

        playRound(humanSelection,computerSelection);
    }
    console.log("Your score: "+humanscore);
    console.log("Computer score: "+ computerscore);
    if(humanscore==computerscore)console.log("Both scores are tied");
    else if(humanscore>computerscore)console.log("You are the overall winner!!");
    else console.log("You lose!! Computer wins");
}
playGame();

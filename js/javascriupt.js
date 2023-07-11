function getComputerChoice() {
const choice=Math.floor(Math.random()*2);
switch (choice){
  case 0: 
    return "rock";
  case 1:
    return "paper";
  case 2:
    return "scissors";
}
}

function enterChoice(){
  let playerChoice=prompt("Enter a choice","");
  playerChoice=playerChoice.toLowerCase();
  while (playerChoice!="rock" && playerChoice!="paper" && playerChoice!="scissors" ){

    alert("Invalid input please try again");
    playerChoice=prompt("Enter a choice"," ").toLowerCase();
  }
  return playerChoice;
}
function Playfivetimes (){
  for (let attempts=5; attempts>0;--attempts){
    const computerChoice=getComputerChoice();
    if (attempts==1){
      alert(`Last attempt good luck`);
    }
    const choice=enterChoice();

    if (choice==computerChoice)
    alert(`Its a tie no winners today \nPlayer score: ${playerScore}  Computer score: ${ComputerScore}`);

    else if (choice=="rock" && computerChoice=="scissors" || choice=="scissors" && computerChoice=="paper" || choice=="paper" && computerChoice=="rock"){
      ++playerScore;
      alert(`You won this round good job the computer chose ${computerChoice} \nPlayer score: ${playerScore}  Computer score: ${ComputerScore}`);
    }
    else{
      ++ComputerScore;
      alert(`You lost this round better luck next time the computer chose ${computerChoice} \nPlayer score: ${playerScore}  Computer score: ${ComputerScore}`);
    }   
  }

}

function game(){
  alert("Try to beat the computer in a best of five.");
  Playfivetimes();
  if (playerScore>ComputerScore)
      alert(`Congratulations You won the game \nPlayer score: ${playerScore}  Computer score: ${ComputerScore}`);
  else if (playerScore==ComputerScore)
      alert(`It ended in a tie no one won the game \nPlayer score: ${playerScore}  Computer score: ${ComputerScore}`);
  else 
      alert(`Sorry you lost GAME OVER! \nPlayer score: ${playerScore}  Computer score: ${ComputerScore}`);
 }

let playerScore=0;
let ComputerScore=0;
const button=document.querySelector("button");
button.addEventListener("click",gamerun);


function gamerun(){
  while (true){
    game();
    if(!confirm("Would you like to play again?")){
      alert("Thanks for playing see you next time");
      break;
    }
    playerScore=0;
    ComputerScore=0;
  }
}


 



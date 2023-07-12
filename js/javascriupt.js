function getComputerChoice() {
  const computerchoice=Math.floor(Math.random()*3);
  switch (computerchoice){
    case 0: 
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
}
}

function getPlayerChoice(){
  let playerChoice=prompt("Enter a choice or choose cancel to exit","");
  playerChoice=playerChoice.toLowerCase();
  while (playerChoice!="rock" && playerChoice!="paper" && playerChoice!="scissors" ){
    alert("Invalid input please try again");
    playerChoice=prompt("Enter a choice"," ").toLowerCase();
  }
  return playerChoice;
}

function playFiveTimes (){
  for (let attempts=5; attempts>0;--attempts){
    const computerChoice=getComputerChoice();
    if (attempts==1){
      alert(`Last attempt good luck`);
    }
    const playerChoice=getPlayerChoice();

    if (playerChoice==computerChoice)
    alert(`Its a tie no winners today \n
    Player score: ${playerScore} Computer score: ${ComputerScore}`);

    else if (playerChoice=="rock" && computerChoice=="scissors" ||
             playerChoice=="scissors" && computerChoice=="paper" ||
             playerChoice=="paper" && computerChoice=="rock"){
               ++playerScore;
               alert(`You won this round good job the computer chose ${computerChoice} \n
               Player score: ${playerScore}  Computer score: ${ComputerScore}`);
    }
    else{
      ++ComputerScore;
      alert(`You lost this round better luck next time the computer chose ${computerChoice} \n
      Player score: ${playerScore}  Computer score: ${ComputerScore}`);
    }   
  }
}

function runGame(){
  alert("Try to beat the computer in a best of five.");
  playFiveTimes();
  if (playerScore>ComputerScore)
      alert(`Congratulations You won the game \n
      Player score: ${playerScore}  Computer score: ${ComputerScore}`);
  else if (playerScore==ComputerScore)
      alert(`It ended in a tie no one won the game \n
      Player score: ${playerScore}  Computer score: ${ComputerScore}`);
  else 
      alert(`Sorry you lost GAME OVER! \n
      Player score: ${playerScore}  Computer score: ${ComputerScore}`);
 }

function askToRepeatGame(){
  while (true){
    runGame();
    if(!confirm("Would you like to play again?")){
      alert("Thanks for playing see you next time");
      break;
    }
    playerScore=0;
    ComputerScore=0;
  }
}

let playerScore=0;
let ComputerScore=0;
const button=document.querySelector("button");
button.addEventListener("click",askToRepeatGame);

/* setTimeout is used to help delay the execution of the main game giving the page and its
   elements time to load */
window.onload= function () {setTimeout(function(){askToRepeatGame();},100);} 




 



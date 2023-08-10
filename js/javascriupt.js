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

function playGame (icon){
  const computerChoice=getComputerChoice();
  document.querySelector(".CPU img").setAttribute("src", document.querySelector(`[alt=${computerChoice}]`).getAttribute("src"))
  const playerChoice=icon.firstElementChild.getAttribute("alt");
  document.querySelector(".player img").setAttribute("src", document.querySelector(`[alt=${playerChoice}]`).getAttribute("src"))
  const result=document.querySelector(".result");
  const outcome=document.querySelector(".outcome");
    if (playerChoice==computerChoice){
      result.textContent=`! Its a tie ! `;
      outcome.textContent="No winners today";
    }
 
    else if (playerChoice=="rock" && computerChoice=="scissors" ||
             playerChoice=="scissors" && computerChoice=="paper" ||
             playerChoice=="paper" && computerChoice=="rock"){
               ++playerScore;
               pscore.textContent=`Player: ${playerScore}`
               result.textContent=`! You Won ! `;
               outcome.textContent=`Well done ${playerChoice} beats ${computerChoice} `;
  
    }
    else{
      ++ComputerScore;
      cscore.textContent=`CPU: ${ComputerScore}`
      result.textContent=`! You Lost ! `;
      outcome.textContent=`Better luck next time ${playerChoice} beats ${computerChoice}`;
    }   
  }


function runGame(){
  attempt++;
  playGame(this);
  if (attempt==5){
    let result="";
    if (playerScore>ComputerScore)
    result=`Congratulations You won the game`;
    else if (playerScore==ComputerScore)
    result=`It ended in a tie no one won the game`;
    else 
    result=`Sorry you lost GAME OVER`;

  // create and alocate the replay screen
  const background=document.querySelector(".back");
  const popup=document.createElement("div");
  const message=document.createElement("p");
  const reset=document.createElement("button");

  background.classList.add("active");
  message.classList.add("message");
  popup.classList.add("popup", "active");

  message.textContent=result;
  reset.textContent="Play again";

  popup.appendChild(message);
  reset.addEventListener("click",function(){window.location.reload()});
  popup.appendChild(reset);
  document.querySelector("body").appendChild(popup);
}
  }

let playerScore=0;
let ComputerScore=0;
const pscore=document.querySelector(".player h1");
const cscore=document.querySelector(".CPU h1")
let attempt=0;
const game=document.querySelectorAll(".image");
game.forEach(function(element){element.addEventListener("click", runGame)});




 



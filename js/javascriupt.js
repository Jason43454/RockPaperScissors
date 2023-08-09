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
    if (playerChoice==computerChoice){
      document.querySelector(".result").textContent=`! Its a tie ! `;
      document.querySelector(".outcome").textContent="No winners today";
    }
 
    else if (playerChoice=="rock" && computerChoice=="scissors" ||
             playerChoice=="scissors" && computerChoice=="paper" ||
             playerChoice=="paper" && computerChoice=="rock"){
               ++playerScore;
               pscore.textContent=`Player: ${playerScore}`
               document.querySelector(".result").textContent=`! You Won ! `;
               document.querySelector(".outcome").textContent=`Well done ${playerChoice} beats ${computerChoice} `;
  
    }
    else{
      ++ComputerScore;
      cscore.textContent=`CPU: ${ComputerScore}`
      document.querySelector(".result").textContent=`! You Lost ! `;
      document.querySelector(".outcome").textContent=`Better luck next time ${playerChoice} beats ${computerChoice}`;
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

  const background=document.querySelector(".back");
  background.classList.add("active");
  const popup=document.createElement("div");
  const message=document.createElement("p");
  message.textContent=result;
  message.classList.add("message");
  popup.appendChild(message);
  const reset=document.createElement("button");
  reset.addEventListener("click",function(){window.location.reload()});
  reset.textContent="Play again";
  popup.appendChild(reset);
  popup.classList.add("popup", "active");
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




 



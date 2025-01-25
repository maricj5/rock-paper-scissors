const userChoiceDisplay = document.getElementById("user-choice"); 
const computerChoiceDisplay = document.getElementById("computer-choice"); 
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChoice;
let computerChoice;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) => {
  userChoice = e.target.id;
  userChoiceDisplay.innerHTML = userChoice;
  generateComputerChoices();
  const gameResult = result();
  resultDisplay.innerHTML = gameResult;
}));

function generateComputerChoices(){
  const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;
  if (randomNumber === 1){
    computerChoice = "rock";
  };
  if (randomNumber === 2){
    computerChoice = "paper";
  };
  if (randomNumber === 3){
    computerChoice = "scissors";
  };
  computerChoiceDisplay.innerHTML = computerChoice;
};

function result(){
  if (userChoice === computerChoice){
    return "Draw";
  };
  if (
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ){
    return "User win!";
  }
  return "Computer wins!";
};
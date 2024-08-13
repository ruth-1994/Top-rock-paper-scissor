let btn1 = document.querySelector("#rock");
let btn2 = document.querySelector("#paper");
let btn3 = document.querySelector("#scissor");
let announce=document.querySelector('#result');

btn1.addEventListener("click", play);
btn2.addEventListener("click", play);
btn3.addEventListener("click", play);

function play(event) {
  let playerChoice = event.target.id;
  let computerChoice = computerSelection();
  let result = determineResult(playerChoice, computerChoice);
  displayResult(result,playerChoice,computerChoice)
}
function computerSelection() {
  let choices = ["rock", "paper", "scissor"];
  let randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function determineResult(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) return "tie!";
  else if (
    (playerChoice === "rock" && computerChoice === "scissor") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissor" && computerChoice == "paper")
  ) {
    return "you win!";
  } else {
    return "you lose";
  }
}
function displayResult(result,playerChoice,computerChoice)
{
announce.textContent=`you chose ${playerChoice} and computer chose ${computerChoice} so ${result}`
}
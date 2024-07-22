function playGame() {
    let humanScore = 0;
    let computerScore = 0;
  
    function getHumansChoice() {
      let choice = prompt(
        "Choose one: 'Rock', 'Paper', or 'Scissors'"
      ).toLowerCase(); // Normalize input to lowercase
  
      if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice;
      } else {
        alert("Wrong choice! Choose another.");
        return getHumansChoice(); // Correctly call the function recursively
      }
    }
  
    function getComputerChoice() {
      const choices = ["rock", "paper", "scissors"];
      const randomIndex = Math.floor(Math.random() * choices.length);
      return choices[randomIndex];
    }
  
    function playRound() {
      const humanChoice = getHumansChoice();
      const computerChoice = getComputerChoice();
      alert("Computer chose: " + computerChoice);
  
      if (humanChoice === computerChoice) {
        alert("DRAW!");
      } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
      ) {
        alert("You WIN!");
        humanScore++;
      } else {
        alert("You LOSE!");
        computerScore++;
      }
    }
  
    for (let i = 0; i < 5; i++)//to play the game in five round {
      playRound();
    }
  
    if (humanScore > computerScore) {
      alert(`You win the game! Final Score: Human ${humanScore} - Computer ${computerScore}`);
    } else if (computerScore > humanScore) {
      alert(`Computer wins the game! Final Score: Human ${humanScore} - Computer ${computerScore}`);
    } else {
      alert(`The game is a draw! Final Score: Human ${humanScore} - Computer ${computerScore}`);
    }
  }
  
  playGame();
  
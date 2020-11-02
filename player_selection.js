function playRound (computerSelection)



function checkSelection (playerSelection, computerSelection) {
     if (playerSelection == "rock" && computerSelection == "rock") {
        {
            return "It is a Draw! Rock vs Rock";
        } else if (playerSelection == "rock" && computerSelection == "paper") {
            return "You lose! Paper beats Rock";
        } else if  (playerSelection == "rock" && computerSelection == "scissors") {
            return "You win! Rock beats Scissors";
        } else if (playerSelection == "paper" && computerSelection == "rock") {
            return "You win! Paper beats rock";
        } else if (playerSelection == "paper" && computerSelection == "scissors") {
            return "Scissors beats Paper";
        } else if (playerSelection == "paper" && computerSelection == "paper") {
            return "A Draw is a Draw! Try Again!";
        } else if (playerSelection == "scissors" && computerSelection == "rock") {
            return "You lose! Rock beats Scissors";
        } else if (playerSelection == "scissors" && computerSelection == "paper") {
            return "You win! Scissors beats paper";
        } else if (playerSelection == "scissors" && computerSelection == "scissors") {
            return "A Draw is a Draw! Try Again!";
        }
    };
}
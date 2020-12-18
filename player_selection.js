function singleRound (playerSelection, computerSelection) {
     if (playerSelection == "rock" && computerSelection == "rock") 
        {
            return "Whoa There Partner! It's a Draw! Rock vs Rock";
        } else if (playerSelection == "rock" && computerSelection == "paper") {
            return "There's No Crying in this Game! Paper beats Rock";
        } else if  (playerSelection == "rock" && computerSelection == "scissors") {
            return "Winner, Winner, Chicken Dinner! Rock beats Scissors";
        } else if (playerSelection == "paper" && computerSelection == "rock") {
            return "Winning Feels Good! Paper beats Rock";
        } else if (playerSelection == "paper" && computerSelection == "scissors") {
            return "Ouch. I Bet This Cuts Deep. Scissors beats Paper";
        } else if (playerSelection == "paper" && computerSelection == "paper") {
            return "Whoa There Partner! It's a Draw!";
        } else if (playerSelection == "scissors" && computerSelection == "rock") {
            return "Serving Up a Fresh Hot L! Rock beats Scissors";
        } else if (playerSelection == "scissors" && computerSelection == "paper") {
            return "Welcome to the Winners Circle! Scissors beats Paper";
        } else if (playerSelection == "scissors" && computerSelection == "scissors") {
            return "Whoa There Partner! It's a Draw!";
        }
        break;
};
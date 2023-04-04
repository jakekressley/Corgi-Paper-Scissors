function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return 'Rock';
    } else if (randomNumber === 1) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

function getPlayerChoice() {
    const playerSelection = prompt("Please enter your choice: ");
    return playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
}

function playRound(playerSelection, computerSelection) {    
    if ((playerSelection == 'Rock' && computerSelection == 'Scissors')
    || (playerSelection == 'Paper' && computerSelection == 'Rock')
    || (playerSelection == 'Scissors' && computerSelection == 'Paper'))
        return "You Win! " + playerSelection + " beats " + computerSelection + "!";
    
    else if ((computerSelection == 'Rock' && playerSelection == 'Scissors')
    || (computerSelection == 'Paper' && playerSelection == 'Rock')
    || (computerSelection == 'Scissors' && playerSelection == 'Paper'))
        return "You Lose! " + computerSelection + " beats " + playerSelection + "!";
    
    else
        return "It's a tie";
}

function helperResults (playerSelection, computerSelection) {
    console.log("You chose: " + playerSelection);
    console.log("Computer chose: " + computerSelection);
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    while (playerScore < 5 && computerScore < 5) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        
        helperResults(playerSelection, computerSelection);

        result = playRound(playerSelection, computerSelection);
        console.log(result)
        if (result.slice(0, 7) == "You Win")
            playerScore++;
        else if (result.slice(0, 8) == "You Lose")
            computerScore++;
        else
            continue;
        
        console.log("Your score: " + playerScore);
        console.log("Computer score: " + computerScore);
    }
    if (playerScore == 5) console.log("Congratulations! You have beaten the computer");
    if (computerScore == 5) console.log("Im sorry. You have lost to the computer");
}

const playButton = document.querySelector('.play-button');
playButton.addEventListener('click', () => {
    console.log(game());
});
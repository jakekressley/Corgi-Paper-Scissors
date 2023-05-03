let playerScore = 0;
let computerScore = 0;
const scoreboard = document.querySelector('#current-score');

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

const rockButton = document.querySelector('#rock-button');
const paperButton = document.querySelector('#paper-button');
const scissorsButton = document.querySelector('#scissors-button');
let playerChoice;
let choiceMade = false;

const playerChoices = document.querySelectorAll('.player-btns')

playerChoices.forEach((choice) => {
    choice.addEventListener('click', () => {
        playerChoice = choice.textContent;
        const computerChoice = getComputerChoice()
        game(playerChoice, computerChoice);
    })
})

const handResult = document.querySelector('#hand-result');
handResult.classList.add('hand-result');

function playRound(playerSelection, computerSelection) {  
    
    if ((playerSelection == 'Rock' && computerSelection == 'Scissors')
    || (playerSelection == 'Paper' && computerSelection == 'Rock')
    || (playerSelection == 'Scissors' && computerSelection == 'Paper')) {
        
            handResult.textContent = `You chose ${playerSelection} and Gerald chose ${computerSelection}. You won this hand.`
            playerScore++;
            scoreboard.textContent = `${playerScore} - ${computerScore}`;
    }
    
    else if ((computerSelection == 'Rock' && playerSelection == 'Scissors')
    || (computerSelection == 'Paper' && playerSelection == 'Rock')
    || (computerSelection == 'Scissors' && playerSelection == 'Paper')) {

            handResult.textContent = `You chose ${playerSelection} and Gerald chose ${computerSelection}. You won this hand.`

            computerScore++;    
            scoreboard.textContent = `${playerScore} - ${computerScore}`;
    }

}

function game(playerChoice, computerChoice) {
        playRound(playerChoice, computerChoice)

    const resultContainer = document.querySelector('#text-container');
    if (playerScore == 5) {
        const playerWins = document.createElement('p');
        playerWins.classList.add('player-wins');
        playerWins.textContent = "I guess you beat me this time.";
        resultContainer.append(playerWins);
        reset();
    }
    if (computerScore == 5) {
        const computerWins = document.createElement('p');
        computerWins.classList.add('computer-wins');
        computerWins.textContent = "I win hehehe.";
        resultContainer.append(computerWins);
        reset();
    }

}

function reset() {
    computerScore = 0;
    playerScore = 0;

}

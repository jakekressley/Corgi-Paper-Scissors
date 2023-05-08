let playerScore = 0;
let computerScore = 0;
const display = document.querySelector('.game');
const scoreboard = document.querySelector('#current-score');
const playButton = document.querySelector('#play-button');
const taunt = document.querySelector('#taunt');
const instructions = document.querySelector('#instructions');
const geraldDialogue = document.querySelector('#gerald-dialogue');

playButton.addEventListener('click', start)

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

const geraldLossTaunts = ['I gave you that one.', "I'm not even trying.", "So what? that's only one point.", "Lucky guess.", "You're still not as smart as me."]
const geraldWinTaunts = ["You're so predictable.", "I can read your every move.", "I'm used to winning.", "This game is so simple.", "You'll never beat me."]

function playRound(playerSelection, computerSelection) {  
    
    if ((playerSelection == 'Rock' && computerSelection == 'Scissors')
    || (playerSelection == 'Paper' && computerSelection == 'Rock')
    || (playerSelection == 'Scissors' && computerSelection == 'Paper')) {
        
            handResult.textContent = `You chose ${playerSelection.toLowerCase()} and Gerald chose ${computerSelection.toLowerCase()}. You won this hand.`
            geraldDialogue.textContent = geraldLossTaunts[Math.floor(Math.random() * geraldLossTaunts.length)];
            playerScore++;
            scoreboard.textContent = `${playerScore} - ${computerScore}`;
    }
    
    else if ((computerSelection == 'Rock' && playerSelection == 'Scissors')
    || (computerSelection == 'Paper' && playerSelection == 'Rock')
    || (computerSelection == 'Scissors' && playerSelection == 'Paper')) {

            handResult.textContent = `You chose ${playerSelection.toLowerCase()} and Gerald chose ${computerSelection.toLowerCase()}. You lost this hand.`;
            geraldDialogue.textContent = geraldWinTaunts[Math.floor(Math.random() * geraldLossTaunts.length)];
            computerScore++;    
            scoreboard.textContent = `${playerScore} - ${computerScore}`;
    }
    else
    {
        handResult.textContent = `You and Gerald both chose ${computerSelection.toLowerCase()}. It's a tie! Please reselect.`;
        geraldDialogue.textContent = 'Ties are lame.'
    }


}

const resultContainer = document.querySelector('#result-container');
const playAgain = document.querySelector('#play-again');
const playerSection = document.querySelector('#player-section');
const computerOptions = document.querySelector('.computer-options')

playAgain.addEventListener('click', reset);

function game(playerChoice, computerChoice) {
    playRound(playerChoice, computerChoice)

    if (playerScore == 5) {
        const playerWins = document.createElement('p');
        playerWins.classList.add('player-wins');
        playerWins.textContent = "You Win!";
        resultContainer.append(playerWins);
        resultContainer.style.display = 'block';
        playAgain.style.visibility = "visible"
        playerSection.style.display = 'none';
        geraldDialogue.textContent = 'Whatever, this game is stupid anyway.';
        instructions.style.display = 'none';
        handResult.style.display = 'none';
    }
    if (computerScore == 5) {
        const computerWins = document.createElement('p');
        computerWins.classList.add('computer-wins');
        computerWins.textContent = "You Lost!";
        resultContainer.append(computerWins);
        resultContainer.style.display = 'block';
        playAgain.style.visibility = "visible"
        playerSection.style.display = 'none';
        geraldDialogue.textContent = 'Hehehehehe I win!';
        instructions.style.display = 'none';
        handResult.style.display = 'none';
    }

}

function reset() {
    computerScore = 0;
    playerScore = 0;
    scoreboard.textContent = `${playerScore} - ${computerScore}`;
    handResult.style.display = 'block';
    handResult.textContent = '';
    resultContainer.textContent = '';
    resultContainer.style.display = 'none'; 
    playerSection.style.display = 'flex';
    start();
}

function start() {
    display.style.visibility = 'visible';
    playButton.style.display = 'none';
    taunt.style.display = 'none';
    instructions.style.display = 'flex';
    playAgain.style.visibility = '';
    geraldDialogue.textContent = "I hope you're ready";
    scoreboard.style.visibility = 'visible';
    resultContainer.style.display = 'none';
}

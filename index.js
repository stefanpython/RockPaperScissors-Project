function getComputerChoice() {

    let items = [
        'Rock',
        'Paper',
        'Scissors'
    ];

    let randomItem = items[Math.floor(Math.random() * items.length)];

    return randomItem;
}

function playRound(playerSelection, computerSelection) {
    

    if (playerSelection === 'rock'.toUpperCase() && computerSelection === 'Rock') {
        return "It`s a tie"
    }else if (playerSelection === 'rock'.toUpperCase() && computerSelection === 'Paper') {
         return "You lose! Paper beats Rock"
    } else if (playerSelection === 'rock'.toUpperCase() && computerSelection === 'Scissors'){
        return "You win! Rock beats Paper"
    } else if (playerSelection === 'paper'.toUpperCase() && computerSelection === 'Rock') {
        return "You win! Paper beats Rock"
    } else if (playerSelection === 'paper'.toUpperCase() && computerSelection === 'Paper') {
        return "It`s a tie"
    } else if (playerSelection === 'paper'.toUpperCase() && computerSelection === 'Scissors') {
        return "You lose! Scissors beats Paper"
    } else if (playerSelection === 'scissors'.toUpperCase() && computerSelection === 'Rock') {
        return "You lose! Rock beats Scissors"
    } else if (playerSelection === 'scissors'.toUpperCase() && computerSelection === 'Paper') {
        return "You win! Scissors beats Paper"
    } else if (playerSelection === 'scissors'.toUpperCase() && computerSelection === 'Scissors') {
        return "It`s a tie"
     } else {
        return 'Something`s wrong'
    }
}


const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));

function game() {
    let player = 0;
    let computer = 0;

    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Rock, Paper or Scrissors?").toUpperCase();
        if (playRound(playerSelection, computerSelection).slice(0, 8) == 'You win!') {
            player += 1;
            
        } else if (playRound(playerSelection, computerSelection).slice(0, 8) == 'You lose') {
            computer += 1;
    
        } else {
            playRound(playerSelection, computerSelection);
        }
        
    }
    if (player > computer) {
        return "You won the game!"
    } else if (player < computer) {
        return "You lost the game!"
    } else {
        return "It`s a tie."
    }
    
}

game();
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
    let roundWinner='';

    if (playerSelection == 'rock'.toUpperCase() && computerSelection == 'Rock') {
        roundWinner = "It`s a tie"
    }else if (playerSelection == 'rock'.toUpperCase() && computerSelection == 'Paper') {
         rroundWinner = "You lose! Paper beats Rock"
    } else if (playerSelection == 'rock'.toUpperCase() && computerSelection == 'Scissors'){
        roundWinner = "You win! Rock beats Paper"
    } else if (playerSelection == 'paper'.toUpperCase() && computerSelection == 'Rock') {
        roundWinner = "You win! Paper beats Rock"
    } else if (playerSelection == 'paper'.toUpperCase() && computerSelection == 'Paper') {
        roundWinner = "It`s a tie"
    } else if (playerSelection == 'paper'.toUpperCase() && computerSelection == 'Scissors') {
        roundWinner = "You lose! Scissors beats Paper"
    } else if (playerSelection == 'scissors'.toUpperCase() && computerSelection == 'Rock') {
        roundWinner = "You lose! Rock beats Scissors"
    } else if (playerSelection == 'scissors'.toUpperCase() && computerSelection == 'Paper') {
        roundWinner = "You win! Scissors beats Paper"
    } else if (playerSelection == 'scissors'.toUpperCase() && computerSelection == 'Scissors') {
        roundWinner = "It`s a tie"
     } 
     return roundWinner;
}



// playerSelection = prompt("Rock, Paper or Scrissors?").toUpperCase();


function game() {
    let player = 0;
    let computer = 0;
    let roundResult = '';
   

    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Rock, Paper or Scrissors?").toUpperCase();
        computerSelection = getComputerChoice();
        roundResult = playRound(playerSelection, computerSelection);

        if (roundResult.slice(0, 8) === 'You win!') {
            player += 1;
            console.log("You won this round!" + " -- Score: " + "Player: " + player + " - " + "Computer: " + computer)
        } else if (roundResult.slice(0, 8) === 'You lose') {
            computer += 1;
            console.log("You lost this round!" + " -- Score: " + player + " - " + computer)
        } else {
            console.log("It`s a tie!")
            i -= 1;
        }
        
    }
    
    if (player > computer) {
        console.log("You won the game!")
    } else {
        console.log("You lost the game!")
    } 

}

game();
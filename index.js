function getComputerChoice() {

    let items = [
        'ROCK',
        'PAPER',
        'SCISSORS'
    ];

    let randomItem = items[Math.floor(Math.random() * items.length)];

    return randomItem;
}


function playRound(playerSelection, computerSelection) {
    let roundWinner='';

    if (playerSelection == 'rock'.toUpperCase() && computerSelection == 'ROCK') {
        return "It`s a tie"
    }else if (playerSelection == 'rock'.toUpperCase() && computerSelection == 'PAPER') {
        return "You lose! Paper beats Rock"
    } else if (playerSelection == 'rock'.toUpperCase() && computerSelection == 'SCISSORS'){
        return "You win! Rock beats Paper"
    } else if (playerSelection == 'paper'.toUpperCase() && computerSelection == 'ROCK') {
        return "You win! Paper beats Rock"
    } else if (playerSelection == 'paper'.toUpperCase() && computerSelection == 'PAPER') {
        return "It`s a tie"
    } else if (playerSelection == 'paper'.toUpperCase() && computerSelection == 'SCISSORS') {
        return "You lose! Scissors beats Paper"
    } else if (playerSelection == 'scissors'.toUpperCase() && computerSelection == 'ROCK') {
        return "You lose! Rock beats Scissors"
    } else if (playerSelection == 'scissors'.toUpperCase() && computerSelection == 'PAPER') {
        return "You win! Scissors beats Paper"
    } else if (playerSelection == 'scissors'.toUpperCase() && computerSelection == 'SCISSORS') {
        return "It`s a tie"
     } 
    return roundWinner;
    
}

const button = document.querySelectorAll('button');
const score = document.querySelector(".score");
const winner = document.querySelector(".winner");
score.textContent = "Chose your weapon below:";

// Div with all buttons
const btns = document.querySelector(".btn");

// Try again button image
const replay = document.querySelector('.img');
replay.style.visibility = 'hidden';

function game() {
    let player = 0;
    let computer = 0;
    let roundResult = '';
    let i = 0;
    
    
    
    button.forEach((button) => {
              button.addEventListener('click', () => {
              let playerSelection = button.id
              computerSelection = getComputerChoice();
              roundResult = playRound(playerSelection, computerSelection);
              console.log(roundResult);

            
                
              if (roundResult.slice(0, 8) === 'You win!') {
                player += 1;
                score.textContent = "Score: " + "Player: " + player + "  -  " + "Computer: " + computer
            } else if (roundResult.slice(0, 8) === 'You lose') {
                computer += 1;
                score.textContent = "Score: " + "Player: " + player + "  -  "  + "Computer: " + computer
            } else {
                player = player;
                computer = computer;
                score.textContent = "It`s a tie!";
                
            }

            

            if (player === 5) {
                score.textContent = 'You are the WINNER!';
                btns.remove();
                replay.style.visibility = 'visible';
            } else if (computer === 5) {
                score.textContent = 'You Lost the game!';
                btns.remove()
                replay.style.visibility = 'visible';
            }
              })
              
        })

        replay.addEventListener('click', () => {
            location.reload();
        })
       
    }

game();
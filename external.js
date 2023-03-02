const computerSelection = getComputerChoice();
let playerSelection = prompt;

let player = 0
let playerScore = 0;
let computer = 0
let computerScore = 0;

function getComputerChoice(){
    let choice = ['rock', 'paper', 'scissors'];
let computerSelection = choice[Math.floor(Math.random() * (choice.length))];
        return computerSelection;
       
}

function playGame() {
        for (let i = 0; i < 5; i++) {
        playRound(playerSelection, computerSelection);   
        
        }
   }
playGame();

function playRound(playerSelection, computerSelection) {
    computerSelection;
    console.log(computerSelection);

    playerSelection = prompt ("Choose your weapon");
    if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper') {
        computerScore++;
        console.log('Computer Score:' + computerScore);
        console.log('Player Score:' + playerScore);
        return ('You lose! Paper beats rock.');
    }else if
        (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors') {
            playerScore++;
            console.log('Computer Score:' + computerScore);
        console.log('Player Score:' + playerScore);
            return ('You win! Rock beats scissors.');
    }else if
        (playerSelection.toLowerCase() === 'rock' && computerSelection === 'rock') {
            console.log('Computer Score:' + computerScore);
        console.log('Player Score:' + playerScore);
            return ('It is a tie!'); 
    }else if 
        (playerSelection.toLowerCase() === 'paper' && computerSelection === 'paper') {
            console.log('Computer Score:' + computerScore);
            console.log('Player Score:' + playerScore);
            return ('It is a tie!');
    }else if
         (playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors') {
            computerScore++;
            console.log('Computer Score:' + computerScore);
        console.log('Player Score:' + playerScore);
            return ('You lose! Scissors beats paper.');
    }else if
        (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock') {
            playerScore++;
            console.log('Computer Score:' + computerScore);
        console.log('Player Score:' + playerScore);
            return ('You win! Paper beats rock.') 
    }else if 
        (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'scissors') {
            console.log('Computer Score:' + computerScore);
        console.log('Player Score:' + playerScore);
            return ('It is a tie!');
    }else if
        (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper') {
            playerScore++;
            console.log('Computer Score:' + computerScore);
        console.log('Player Score:' + playerScore);
            return ('You win! Scissors beats paper.');
    }else if
        (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock') {
            computerScore++
            console.log('Computer Score:' + computerScore);
        console.log('Player Score:' + playerScore);
            return ('You lose! Rock beats scissors.'); 
        }else{
            return ("That is not a vaild choice.");
        }
 
        
  }
 
function endGame() {
    if (playerScore > computerScore) {
        return ('Player Wins the Game!')
    }
    else if (playerScore < computerScore) {
        return ('Computer Wins the Game!')
    }
    else{ (playerScore === computerScore) 
        return ('Draw')
    
    }
}

console.log(endGame());
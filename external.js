function getComputerChoice(){
    return randomComputerSelection;
    
}

const choice = ['rock', 'paper', 'scissors'];
const randomComputerSelection = choice[Math.floor(Math.random() * (choice.length))];
console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {
     playerSelection = prompt ("Choose your weapon");
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'You lose! Paper beats rock.';
    }else if
        (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You win! Rock beats scissors.';
    }else if
        (playerSelection === 'rock' && computerSelection === 'rock') {
         return 'It is a tie!'; 
    }else if 
        (playerSelection === 'paper' && computerSelection === 'paper') {
        return 'It is a tie!';
    }else if
         (playerSelection === 'paper' && computerSelection === 'scissors') {
          return 'You lose! Scissors beats paper.';
    }else if
        (playerSelection === 'paper' && computerSelection === 'rock') {
         return 'You win! Paper beats rock.'; 
    }else if 
        (playerSelection === 'scissors' && computerSelection === 'scissors') {
        return 'It is a tie!';
    }else if
        (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You lose! Paper beats scissors.';
    }else if
        (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'You win! Scissors beats rock.'; 
    
    }
    
}
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

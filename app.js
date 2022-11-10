real = document.querySelector('.real');
 
const player = document.createElement('p');
player.textContent = 'Player Selected: ';
real.appendChild(player);
 
fake = document.querySelector('.fake');

comp = document.createElement('p');
comp.textContent = 'Computer Selected: ';
fake.appendChild(comp);

let playerChoice = document.createElement('p');
let compChoice = document.createElement('p');

 //Grabs elements by ID, displays player choice
const rock = document.getElementById('Rock').onclick = function rockSel() {
    playerChoice.textContent = 'Rock';
    real.appendChild(playerChoice);
    
}
const paper = document.getElementById('Paper').onclick = function rockSel() {
    playerChoice.textContent = 'Paper';
    real.appendChild(playerChoice);
}
const scissors = document.getElementById('Scissors').onclick = function rockSel() {
    playerChoice.textContent = 'Scissors';
    real.appendChild(playerChoice);
}


function compPlay(e) {
 for (let i = 0; i < 5; i++) {
    // Comp Selector
    function getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

compChoice.textContent = getComputerChoice()
fake.appendChild(compChoice);   
}


}


let game = document.querySelector('.game');
game.addEventListener('click', compPlay )





/*let playerScore = 0;
let compScore= 0;
let player = "";


document.getElementById("Rock").onclick = function rockSel() {
            player = "Rock";
        }
        
document.getElementById('paper').onclick = function paperSel() {
            player = "Paper";
        }
        
document.getElementById('scissors').onclick = function scissorsSel() {
            player = "Scissors";
        }

function getComputerChoice() {
            let choices = ['Rock', 'Paper', 'Scissors'];
            return choices[Math.floor(Math.random() * choices.lenth)];
        }



function playRound(playerSelection, computerSelection) {
            if((playerSelection == "Rock" && computerSelection == "Scissors") ||
                (playerSelection == "Paper" && computerSelection == "Rock") ||
                (playerSelection == "Scissors" && computerSelection == "Paper")) {
                    console.log("Player Wins!");
                    playerScore++;
                } 
            else if((playerSelection == "Rock" && computerSelection == "Paper") ||
                (playerSelection == "Paper" && computerSelection == "Scissors") ||
                (playerSelection == "Scissors" && computerSelection == "Rock")) {
                    console.log("Computer Wins!");
                    compScore++;
                }
            else if (playerSelection == computerSelection) {
                console.log("Tie!");
            }
        }



function game() {

        playRound(player, getComputerChoice()); 
    
    if (playerScore == 5) {
        console.log("Winner: Player!");
    }
    else if (compScore == 5){
        console.log("Winner: Computer!")
    }

}
 
game(); */
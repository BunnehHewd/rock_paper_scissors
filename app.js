let playerScore = 0;
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
 
game();
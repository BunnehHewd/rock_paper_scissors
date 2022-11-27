let playScore = 0;
let compScore = 0;

// Grabs to show player/comp selections
pSelect = document.querySelector('.pSelect');
cSelect = document.querySelector('.cSelect');

//Grabs elements by ID, displays player choice
const rock = document.getElementById('Rock').onclick = function rockSel() {
    pSelect.textContent = 'Rock';
    document.querySelector('.output').style.display = "flex";
}
const paper = document.getElementById('Paper').onclick = function rockSel() {
    pSelect.textContent = 'Paper';
    document.querySelector('.output').style.display = "flex";
}
const scissors = document.getElementById('Scissors').onclick = function rockSel() {
    pSelect.textContent = 'Scissors';
    document.querySelector('.output').style.display = "flex";
}

// Comp selection generator
function compPlay() {
    function getComputerChoice() {
        let choices = ['Rock', 'Paper', 'Scissors'];
        return choices[Math.floor(Math.random() * choices.length)];
    }
    cSelect.textContent = getComputerChoice();
}


//Selection Display
real = document.querySelector(".real");
fake = document.querySelector(".fake");

//Scoring
statement = document.querySelector('.statement');
pScore = document.querySelector('.ps');
cScore = document.querySelector('.cs');

function playRound() {
    compPlay();
    if ((pSelect.textContent == 'Rock' && cSelect.textContent == 'Scissors') ||
        (pSelect.textContent == 'Paper' && cSelect.textContent == 'Rock') ||
        (pSelect.textContent == 'Scissors' && cSelect.textContent == 'Paper')) {
        statement.textContent = "Player Wins!";
        playScore++;
        pScore.innerText = playScore; 
    } else if (pSelect.textContent == cSelect.textContent) {
        statement.textContent = "TIE!";
    } else {
        statement.textContent = "Computer Wins!";
        compScore++;
        cScore.textContent = compScore;
    }


    if (playScore == 5 || compScore == 5) {
        hide();
        if (playScore == 5) {
            statement.textContent = "PLAYER WINS!!!! WOW!"
        } else {
            statement.textContent = "COMPUTER WINS! WHOMP WHOMP"
        }
    }
    
}

let game = document.querySelector('.game');
game.addEventListener('click', playRound);


function hide() {
    real.style.display = "none";
    fake.style.display = "none";
    game.removeEventListener('click', playRound);
}









/*let playerScore = 0;
let compScore= 0;
let player = "";





function playRound(playerSelection, computerSelection) {
            if((playerChoice == "Rock" && compChoice == "Scissors") ||
                (playerChoice == "Paper" && compChoice == "Rock") ||
                (playerChoice == "Scissors" && compChoice == "Paper")) {
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
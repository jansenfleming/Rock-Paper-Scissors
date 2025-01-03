

function playGame(userChoice) {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    
    console.log(`You chose: ${userChoice}`);
    console.log(`Computer chose: ${computerChoice}`);
    
    if (userChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log("You win!");
    } else {
        console.log("You lose!");
    }
}


const userChoice = prompt("Enter rock, paper, or scissors:").toLowerCase();
if (["rock", "paper", "scissors"].includes(userChoice)) {
    playGame(userChoice);
} else {
    console.log("Invalid answer.");
}





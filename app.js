let userScore = 0;
let compScore = 0;
const winMsg = document.querySelector(".msg");
const userScorePara = document.querySelector(".user-point");
const compScorePara = document.querySelector(".computer-point");
const choices = document.querySelectorAll(".choice");

const drawChoice = () => {
    console.log("Game was a draw");
    winMsg.innerText = "Game was a draw";
    winMsg.style.backgroundColor = "#E3DFFF";
};

const showWin = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        winMsg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
        winMsg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        winMsg.innerText = `You Lose. Computer ${compChoice} beats ${userChoice}`;
        winMsg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    console.log("User choice =", userChoice);
    const compChoice = genCompChoice();
    console.log("Computer choice =", compChoice);

    if (userChoice === compChoice) {
        drawChoice();
    } else {
        let userWin = false;
        if (userChoice === "rock") {
            userWin = compChoice === "scissors";
        } else if (userChoice === "paper") {
            userWin = compChoice === "rock";
        } else if (userChoice === "scissors") {
            userWin = compChoice === "paper";
        }

        showWin(userWin, userChoice, compChoice);
    }
};

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

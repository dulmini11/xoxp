const EGameStatus = {
    NOT_STARTED : "NOT_STARTED",
    IN_PROGRESS : "IN_PROGRESS",
    FINISHED_WITH_WINNER : "FINISHED_WITH_WINNER",
    FINISHED_WITH_TIE : "FINISHED_WITH_TIE",
};

let gameStatus = EGameStatus.NOT_STARTED;
let currentPlayer = "X"
const cells = document.querySelectorAll(".cell");
const resetButton = document.getElementById("reset-button");
const gameMessage = document.querySelector(".game-message")

updateGameMessage();
resetButton.addEventListener("click", reset);
cells.forEach((cell, index)=> cell.addEventListener("click",()=> handleCellClick(index)));


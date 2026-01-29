document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".button");
  const result = document.querySelector(".result");

  let board = Array(9).fill("");
  let isXTurn = true;
  let gameOver = false;

  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  
  result.textContent = "  : X's Turn";

  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      if (board[index] !== "" || gameOver) return;

      const currentPlayer = isXTurn ? "X" : "O";

      
      board[index] = currentPlayer;
      button.textContent = currentPlayer;

      
      if (checkWinner(currentPlayer)) {
        result.textContent = ` | ${currentPlayer} Wins `;
        gameOver = true;
        return;
      }

      
      if (board.every(cell => cell !== "")) {
        result.textContent = " | Draw ";
        gameOver = true;
        return;
      }

      
      isXTurn = !isXTurn;
      result.textContent = ` | ${isXTurn ? "X" : "O"}'s Turn`;
    });
  });

  function checkWinner(player) {
    return winPatterns.some(pattern =>
      pattern.every(index => board[index] === player)
    );
  }
});




















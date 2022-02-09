/* --- VARIABLES --- */
const choices = ["✊", "🤚", "✌️"];
const winningNumber = 3;

let p1Score = 0;
const player1 = document.getElementById("player-1");
const player1wins = document.getElementById("p1wins");

/* 1a. */
let p2Score = 0;
const player2 = document.getElementById("player-2");
const player2wins = document.getElementById("p2wins");

/* 1b. */
const resultArea = document.getElementById("result-area");

/* 1c. */
const playBtn = document.getElementById("play-btn");

/* This will help check your results */
console.log(player1wins, player2wins);

/* ----------------------------------------------- */

/* --- FUNCTIONS --- */

const generateChoice = () => {
  let r = Math.floor(Math.random() * 3);
  return choices[r];
};

const insertHTML = (choice1, choice2, result) => {
  player1.innerHTML = choice1;
  player2.innerHTML = choice2;
  player1wins.innerHTML = p1Score;
  player2wins.innerHTML = p2Score;

  resultArea.innerHTML = result;
};

const decideWinner = (a, b) => {
  if ((a === "✊" && b === "✊") || (a === "🤚" && b === "🤚") || (a === "✌️" && b === "✌️")) {
    /* 3a. */ return "It's a draw!";
  } else if ((a === "✊" && b === "✌️") || (a === "🤚" && b === "✊") || (a === "✌️" && b === "🤚")) {
    p1Score++;
    /* 3b. */ return "Player 1 wins!";
  } else {
    p2Score++;
    /* 3c. */ return "PLayer 2 wins!";
  }
};

const play = () => {
  let choice1 = generateChoice();
  let choice2 = generateChoice();
  let result = decideWinner(choice1, choice2);

  // assume 1: 2, 2: 2
  checkWinner();
  insertHTML(choice1, choice2, result);
};

const restartGame = () => {
  p1Score = 0;
  p2Score = 0;
};

/**
 * Check if anyone has won the game yet
 */
const checkWinner = () => {
  if (p1Score === 3) {
    alert("Player 1 has won the game!");
    restartGame();
  } else if (p2Score === 3) {
    alert("Player 2 has won the game!");
    restartGame();
  }
};

/* ----------------------------------------------- */

/* --- EVENT LISTENERS --- */

/* 2. */
playBtn.addEventListener("click", play);

/* ------------------------------- */

"use strict";

const body = document.querySelector("body");
const message = document.querySelector(".message");
const guessNumber = document.querySelector(".guess__number");
const check = document.querySelector(".check");
const number = document.querySelector(".number-box");
const high_score = document.querySelector(".highScore__label");
const currentScore = document.querySelector(".currentScore");
const again = document.querySelector(".again");

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = (mes) => (message.textContent = mes);

check.addEventListener("click", function () {
  const guess = Number(guessNumber.value);

  if (!guess) {
    displayMessage("⛔️ No number!");
  }
  if (guess === secretNumber) {
    displayMessage("🎉 Correct Number!");
    body.style.backgroundColor = "#60b347";
    number.textContent = secretNumber;
    number.style.width = "30rem";
    check.disabled = true;

    if (score > highScore) {
      highScore = score;
      high_score.textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
      score--;
      currentScore.textContent = score;
    } else {
      displayMessage("💥 You lost the game!");
      currentScore.textContent = 0;
      check.disabled = true;
    }
  }
  guessNumber.value = "";
});

again.addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  check.disabled = false;

  displayMessage("Start guessing...");
  currentScore.textContent = score;
  number.textContent = "?";
  guessNumber.value = "";

  body.style.backgroundColor = "#222";
  number.style.width = "15rem";
});

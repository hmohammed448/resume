"use strict";

let secretNumber = Math.trunc(Math.random() * 10) + 1;
let score = 20;

//Check Button Event Handler
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  //Input with no Number
  if (!guess) {
    document.querySelector(".message").textContent = "⛔ No Number";
  }
  //Input with Correct Number
  else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "👌 You WIN 🎉";
    score + 1;
    document.querySelector(".score").textContent = score;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;
  }
  //When guess number is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > secretNumber ? "📈 Too High" : "📉 Too Low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥 You lost the game!";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "rgb(238, 11, 11)";
    }
  }
});

//Again Button Event Handler
document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 10) + 1;
  document.querySelector(".score").textContent = 20;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector(".message").textContent = "Start guessing...";
});

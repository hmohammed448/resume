"use strict";

Let secretNumber = Math.trunc(Math.random() * 10) + 1;
let score = 20;
// document.querySelector(".number").textContent = secretNumber;

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

  //Input with Large Number
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📈 Too High";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥 You lost the game!";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "rgb(238, 11, 11)";
    }
  }
 
  //Input with Low Number
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📉 Too Low";
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
  document.querySelector(".score").textContent = 20;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = " ";
  document.querySelector(".message").textContent = "Start guessing...";
  secretNumber = Math.trunc(Math.random() * 10) + 1;
});



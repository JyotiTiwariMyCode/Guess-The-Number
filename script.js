"use strict";



let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
document.querySelector(".score").textContent = score;

function printMessage(message) {
  document.querySelector(".message").textContent = message;
}

// CHECK BUTTON
document.querySelector(".check").addEventListener("click", function () {
  //* assigning a input value to a value variable
  const value = Number(document.querySelector(".guess").value);

  if (value === 0) {
    printMessage("No Number 💥");
  } else if (value === secretNumber) {
    printMessage("Correct Number 🏆");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (value !== secretNumber) {
    if (score > 1) {
      console.log(score);
      printMessage(value > secretNumber ? "Too High! ☝️" : "Too Low! 👇");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      printMessage("Lost the Game! 🏴‍☠️");
      document.querySelector(".score").textContent = 0;
    }
  }
});

// RESTART BUTTON
document.querySelector(".restart").addEventListener("click", () => {
  score = 20;
  document.querySelector(".score").textContent = score;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(".number").textContent = secretNumber;
  printMessage("Start Guessing...");
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#111";
  document.querySelector(".number").textContent = "?";
});

// MODAL

document.querySelector(".modal");
document.querySelector(".close-modal");
document.querySelector(".show-modal");

document.querySelector(".show-modal").addEventListener("click", () => {
  document.querySelector(".modal").classList.remove("hidden");
  // document.querySelector(".modal").classList.add("hidden");
});

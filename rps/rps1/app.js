`use strict`;

const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    //e is the event
    userChoice = e.target.id; // ill get the target id when event happens and save that to user choice
    userChoiceDisplay.innerHTML = userChoice; //displaying userChouce on userChoiceDisplay
    generateComputerChoice();
    getResult();
  })
);

function generateComputerChoice() {
  //a function for generating random computer choice
  const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;

  if (randomNumber === 1) {
    computerChoice = "rock";
  } else if (randomNumber === 2) {
    computerChoice = "paper";
  } else if (randomNumber === 3) {
    computerChoice = "scissors";
  }

  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (computerChoice === userChoice) {
    result = ` It's a draw 🥺`;
  }
  if (computerChoice === "rock" && userChoice === "paper") {
    result = `You win! 😜`;
  }
  if (computerChoice === "rock" && userChoice === "scissors") {
    result = `You lost! 😓`;
  }
  if (computerChoice === "paper" && userChoice === "scissors") {
    result = `You win! 😜`;
  }
  if (computerChoice === "paper" && userChoice === "rock") {
    result = `You lost! 😓`;
  }
  if (computerChoice === "scissors" && userChoice === "rock") {
    result = `You win! 😜`;
  }
  if (computerChoice === "scissors" && userChoice === "paper") {
    result = `You lost! 😓`;
  }
  resultDisplay.innerHTML = result;
}

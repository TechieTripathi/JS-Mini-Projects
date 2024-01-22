const randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector("#startOver");
const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    // console.log(guess);

    validateGuess(guess);
  });
}

function validateGuess(guess) {
  // number, range,
  if (guess === "" || guess < 0 || guess > 100 || isNaN(guess)) {
    alert("Please Enter a Valid Number & within the range");
  } else {
    console.log(guess);
    prevGuess.push(guess);
    console.log(prevGuess);

    if (numGuess === 11) {
      displayGuess(guess);
      displayMsg(`Game Over, Random Number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMsg("Hurrah!! You guessed it Right");
    endGame();
  } else if (guess < randomNumber) {
    displayMsg("Guessed Number is too low");
  } else if (guess > randomNumber) {
    displayMsg("Guessed Number is too high");
  }
}

function displayGuess(guess) {
  // clean value, array update
  userInput.value = "";
  guessSlot.innerHTML += `${guess} `;
  //   console.log(guessSlot);
  numGuess++;
  console.log(numGuess);
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMsg(message) {
  // win or lose msges
  lowOrHi.innerHTML = `<h2> ${message} </h2>`;
}

function endGame() {
  userInput.value = "";
  //   userInput.setAttribute("disabled", "");
  userInput.setAttribute("type", "hidden");

  //   p.classList.add("button");
  //   p.innerHTML = '<h2 id="newGame" > Start New Game</h2>';
  //   startOver.appendChild(p);

  submit.setAttribute("type", "hidden");
  startOver.setAttribute("type", "submit");

  playGame = false;
  newGame();
}

function newGame() {
  startOver.addEventListener("click", function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${11 - numGuess}`;

    userInput.setAttribute("type", "text");

    submit.setAttribute("type", "submit");

    startOver.setAttribute("type", "hidden");

    playGame = true;
  });
}

const startStopBtn = document.getElementById("start-stop-btn");
const red = document.getElementById("red");
const blue = document.getElementById("blue");
const resetBtn = document.getElementById("reset-btn")
const winMessage = document.getElementById("win-message");
const finishLine = document.getElementById("finish-line");

const finishLinePos = 1850;
finishLine.style.left = `${finishLinePos}px`;

let redMoveIncrement = 10;
let blueMoveIncrement = 10;
let intervalId;
let racing = false;

const race = () => {
    red.style.left = `${redMoveIncrement}px`;
    blue.style.left = `${blueMoveIncrement}px`;
    redMoveIncrement += Math.floor(Math.random() *  10);
    blueMoveIncrement += Math.floor(Math.random() *  10);
    if (redMoveIncrement >= finishLinePos) {
        stopRace();
        const playAgain = confirm("Red wins! Play again?")
        if (playAgain) {
            resetRace();
        }
    } else if (blueMoveIncrement >= finishLinePos) {
        stopRace();
        const playAgain = confirm("Blue wins! Play again?")
        if (playAgain) {
            resetRace();
        }
    }
};

const startRace = () => {
    racing = true;
    intervalId = setInterval(race, 20);
};

const stopRace = () => {
    racing = false;
    clearInterval(intervalId);
};

const resetRace = () => {
    redMoveIncrement = 10;
    blueMoveIncrement = 10;
    red.style.left = "10px";
    blue.style.left = "10px";
};


startStopBtn.addEventListener("click", () => {
    if (racing) {
        stopRace();
    } else {
        startRace();
    }
});

resetBtn.addEventListener("click", () => {
    if (racing) {
        stopRace();
    }
    resetRace();
});
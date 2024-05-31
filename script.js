const timer = document.getElementById("timer");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");

let timerInterval;
let minutes = 25;
let seconds = 0;


start.onclick = function startTimer() {
  timerInterval = setInterval(updateTimer, 1000);
};

stop.onclick = function stopTimer() {
  clearInterval(timerInterval);
};

reset.onclick = function resetTimer() {
  clearInterval(timerInterval);
  minutes = 25;
  seconds = 0;
  updateTimerDisplay();
};

function updateTimer() {
  if (minutes === 0 && seconds === 0) {
    resetTimer();
  }else if(seconds===0){
    seconds = 59;
    minutes--;
  }else{
    seconds--;
  }
  updateTimerDisplay();
}

function updateTimerDisplay() {
  timer.textContent = `${minutes} : ${String(seconds).padStart(2, `0`)}`;
}

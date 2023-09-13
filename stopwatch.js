const timeDisplay = document.getElementById("timeDisplay");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervalId;
//let hrs = 0;
let mins = 0;
let secs = 0;
let msecs = 0;

startBtn.onclick = function () {
  if (paused) {
    paused = false;
    startTime = Date.now() - elapsedTime;
    intervalId = setInterval(updateTime, 1);
  }
};
pauseBtn.onclick = function () {
  if (!paused) {
    paused = true;
    elapsedTime = Date.now() - startTime;
    clearInterval(intervalId);
  }
};
resetBtn.onclick = function () {
  startTime = 0;
  elapsedTime = 0;
  currentTime = 0;
  paused = true;
  //hrs = 0;
  mins = 0;
  secs = 0;
  msecs = 0;
  timeDisplay.textContent = "00:00:000";
  clearInterval(intervalId);
};

function updateTime() {
  elapsedTime = Date.now() - startTime;
  msecs = Math.floor(elapsedTime % 1000);
  secs = Math.floor((elapsedTime / 1000) % 60);
  mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
  //hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 24);

  msecs = formatZeros(msecs);
  secs = formatZeros(secs);
  mins = formatZeros(mins);
  //hrs = formatZeros(hrs);

  timeDisplay.textContent = `${mins}:${secs}:${msecs}`;

  function formatZeros(time) {
    time = time.toString();
    return time.length < 3 || time.length < 2 ? "0" + time : time;
  }
}

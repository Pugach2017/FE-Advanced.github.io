`use strict`

alert (`It's time to do your choise Kolya!`)

const timer = {
  currentTime: 0,
  id: ""
};

const timerOutput = document.querySelector("#timer");
const startBtn = document.querySelector('#start-button');
const stopBtn = document.querySelector('#stop-button');

const Timer = function () {
}

Timer.prototype.start = function () {
  this.startTime = new Date;

  if (!timer.id) {
    timer.id = setInterval(() => {
      timer.currentTime += 4;
      timerOutput.textContent = getFormattedTime(timer.currentTime);
    }, 4);
  }
}

Timer.prototype.stop = function () {
  this.stopTime = new Date;
  this.interval = this.stopTime - this.startTime;

  if (this.interval && timer.id)
  {console.log(`Paste ${Math.round(this.interval/100)/10} seconds after you press Start`)};

  clearInterval(timer.id);
  timer.id = '';
  timer.currentTime = 0;
}


function getFormattedTime(time) {
  const date = new Date(time);
  const mt =
    date.getMinutes() > 9 ? date.getMinutes() : "0" + date.getMinutes();
  const sc =
    date.getSeconds() > 9 ? date.getSeconds() : "0" + date.getSeconds();
  const ms =
    date.getMilliseconds() < 10
      ? "00" + date.getMilliseconds()
      : date.getMilliseconds() < 100
        ? "0" + date.getMilliseconds()
        : date.getMilliseconds();

  return `${mt}:${sc}:${ms}`;
}


const a = new Timer();
startBtn.addEventListener('click', () => {a.start()});
stopBtn.addEventListener('click', () => {a.stop()});

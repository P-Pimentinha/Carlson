const counter = document.querySelector('.counter');
const startButton = document.querySelector('.btnStart');
const upButton = document.querySelector('.btnUp');
const downButton = document.querySelector('.btnDown');

startButton.addEventListener('click', initiateTimer);
upButton.addEventListener('click', add);
downButton.addEventListener('click', sub);

let userTime = 45;
let initialTime = 45;
counter.innerHTML = initialTime;
let interval;

function initiateTimer() {
  startButton.classList.add('disable');
  startButton.setAttribute('disabled', '');
  interval = setInterval(timer, 1000);
}

function timer() {
  if (initialTime === 0) {
    // startButton.removeEventListener('click', timerInt);
    startButton.classList.remove('disable');
    startButton.removeAttribute('disabled', '');
    clearInterval(interval);
    initialTime = userTime;
    counter.innerHTML = initialTime;
    return;
  }
  initialTime--;
  // prettier-ignore
  return counter.innerHTML = initialTime;
}

function add() {
  initialTime += 1;
  userTime += 1;
  counter.innerHTML = initialTime;
}

function sub() {
  if (initialTime === 0) return;
  initialTime -= 1;
  userTime -= 1;
  counter.innerHTML = initialTime;
}

// New Timer
const constdownEl = document.getElementById('countdown');
const startButtonEl = document.querySelector('.btnStartEL');
const upButtonEl = document.querySelector('.btnUpEl');
const downButtonEl = document.querySelector('.btnDownEL');

let startingMinutes = 0;
let startingSeconds = 45;
constdownEl.innerHTML = `${startingMinutes}:${startingSeconds}`;

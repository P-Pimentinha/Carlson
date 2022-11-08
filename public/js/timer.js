// const counter = document.querySelector('.counter');
// const startButton = document.querySelector('.btnStart');
// const upButton = document.querySelector('.btnUp');
// const downButton = document.querySelector('.btnDown');

// startButton.addEventListener('click', initiateTimer);
// upButton.addEventListener('click', add);
// downButton.addEventListener('click', sub);

// let userTime = 45;
// let initialTime = 45;
// counter.innerHTML = initialTime;
// let interval;

// function initiateTimer() {
//   startButton.classList.add('disable');
//   startButton.setAttribute('disabled', '');
//   interval = setInterval(timer, 1000);
// }

// function timer() {
//   if (initialTime === 0) {
//     // startButton.removeEventListener('click', timerInt);
//     startButton.classList.remove('disable');
//     startButton.removeAttribute('disabled', '');
//     clearInterval(interval);
//     initialTime = userTime;
//     counter.innerHTML = initialTime;
//     return;
//   }
//   initialTime--;
//   // prettier-ignore
//   return counter.innerHTML = initialTime;
// }

// function add() {
//   initialTime += 1;
//   userTime += 1;
//   counter.innerHTML = initialTime;
// }

// function sub() {
//   if (initialTime === 0) return;
//   initialTime -= 1;
//   userTime -= 1;
//   counter.innerHTML = initialTime;
// }

// New Timer
const countdown = document.getElementById('countdown');
const startButton = document.querySelector('.btnStart');
const upButton = document.querySelector('.btnUp');
const downButton = document.querySelector('.btnDown');

let UserStartingMinutes = 0;
let UserStartingSeconds = 45;

let startingMinutes = 0;
let startingSeconds = 45;
countdown.innerHTML = `${startingMinutes}:${startingSeconds}`;
let interval;

startButton.addEventListener('click', initiateTimer);
upButton.addEventListener('click', add);
downButton.addEventListener('click', sub);

function initiateTimer() {
  startButton.classList.add('disable');
  startButton.setAttribute('disabled', '');
  interval = setInterval(timer, 1000);
}

function timer() {
  if ((startingMinutes === 0) & (startingSeconds === 0)) {
    // startButton.removeEventListener('click', timerInt);
    startButton.classList.remove('disable');
    startButton.removeAttribute('disabled', '');
    clearInterval(interval);
    startingMinutes = UserStartingMinutes;
    startingSeconds = UserStartingSeconds;
    countdown.innerHTML = `${startingMinutes}:${startingSeconds}`;
    return;
  }

  if ((startingSeconds === 0) & (startingMinutes != 0)) {
    startingMinutes -= 1;
    startingSeconds = 60;
  }

  startingSeconds--;
  // prettier-ignore
  return (countdown.innerHTML = `${startingMinutes}:${startingSeconds}`);
}

function add() {
  if (startingSeconds >= 59) {
    startingSeconds = 0;
    UserStartingSeconds = 0;
    startingMinutes += 1;
    UserStartingMinutes += 1;
    return (countdown.innerHTML = `${startingMinutes}:${startingSeconds}`);
  }

  startingSeconds += 1;
  UserStartingSeconds += 1;
  return (countdown.innerHTML = `${startingMinutes}:${startingSeconds}`);
}

function sub() {
  if ((startingMinutes === 0) & (startingSeconds === 0)) return;

  if (startingSeconds === 0) {
    startingMinutes -= 1;
    UserStartingMinutes -= 1;
    startingSeconds = 59;
    UserStartingSeconds = 59;
    return (countdown.innerHTML = `${startingMinutes}:${startingSeconds}`);
  }

  startingSeconds -= 1;
  UserStartingSeconds -= 1;
  return (countdown.innerHTML = `${startingMinutes}:${startingSeconds}`);
}

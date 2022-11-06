// Workout Generator
const generateWorkoutBtn = document.querySelector('.generateWorkoutBtn');
const workName = document.querySelector('.workName');
const workout1 = document.querySelector('.workout1');
const workout2 = document.querySelector('.workout2');
const workout3 = document.querySelector('.workout3');
const workout4 = document.querySelector('.workout4');
const workout5 = document.querySelector('.workout5');
const workout6 = document.querySelector('.workout6');
const workout7 = document.querySelector('.workout7');
const workout8 = document.querySelector('.workout8');
const link = document.querySelector('a');
//Timer
const counter = document.querySelector('.counter');
const startButton = document.querySelector('.btnStart');
const upButton = document.querySelector('.btnUp');
const downButton = document.querySelector('.btnDown');

////////////////////////////////////////////////////////
//Workout Generator

// stores data returned from getAllWorkouts
let workoutsArr = [];

//get all the workouts using axios.get
const getAllWorkouts = async () => {
  const url = '/api/v1/workouts/';

  try {
    const { data } = await axios.get(url);
    let { workouts } = data;
    console.log(typeof data);
    workouts.map((workout) => {
      workoutsArr.push(workout);
    });
  } catch (error) {
    console.log(error);
  }
};

getAllWorkouts();

//clears the elements
const paragraphCleaner = () => {
  workName.innerHTML = null;
  workout1.innerHTML = null;
  workout2.innerHTML = null;
  workout3.innerHTML = null;
  workout4.innerHTML = null;
  workout5.innerHTML = null;
  workout6.innerHTML = null;
  workout7.innerHTML = null;
  workout8.innerHTML = null;
  link.innerHTML = null;
};

const randomWorkoutGenerator = () => {
  //Before populating the elements they are sent to null
  paragraphCleaner();
  //Generates a random number. Start:0; Finish: array.length
  const random = Math.floor(Math.random() * workoutsArr.length);
  //stores a random workout
  let workout = workoutsArr[random];
  //Check if the keys are not False. If True the values are set
  //if the object returned contains a link the function will stop running and only return the link
  if (workout.link) {
    link.getAttribute('href');
    link.setAttribute('href', workout.link);
    link.innerHTML = workout.link;
    return;
  }
  if (workout.workoutName) workName.innerHTML = workout.workoutName;
  if (workout.ex1) workout1.innerHTML = workout.ex1;
  if (workout.ex2) workout2.innerHTML = workout.ex2;
  if (workout.ex3) workout3.innerHTML = workout.ex3;
  if (workout.ex4) workout4.innerHTML = workout.ex4;
  if (workout.ex5) workout5.innerHTML = workout.ex5;
  if (workout.ex6) workout6.innerHTML = workout.ex6;
  if (workout.ex7) workout7.innerHTML = workout.ex7;
  if (workout.ex8) workout8.innerHTML = workout.ex8;
};

generateWorkoutBtn.addEventListener('click', randomWorkoutGenerator);

////////////////////////////////////////////////////////
//Timer
startButton.addEventListener('click', timerInt);
upButton.addEventListener('click', add);
downButton.addEventListener('click', sub);

let userTime = 45;
let initialTime = 45;
counter.innerHTML = initialTime;
let interval;

function timerInt() {
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

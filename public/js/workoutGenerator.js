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

const arr = [
  {
    firstName: '1A',
    ex1: 'A',
    ex2: 'B',
    ex3: 'C',
    ex4: 'D',
    ex5: 'E',
    ex6: 'F',
  },
  {
    firstName: '2A',
    ex1: 'A',
    ex2: 'B',
    ex3: 'C',
    ex4: 'D',
    ex5: 'E',
    ex6: 'F',
  },
  {
    firstName: '3A',
    ex1: 'A',
    ex2: 'B',
    ex3: 'C',
    ex4: 'D',
    ex5: 'E',
    ex6: 'F',
    ex7: 'F',
    ex8: 'F',
  },
];

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
};

const randomWorkoutGenerator = () => {
  //Not all workouts have the same size. paragraphCleaner() is called to clean the elements from previous workouts
  paragraphCleaner();
  //Generates a random number. Start:0; Finish: arr.length
  const random = Math.floor(Math.random() * arr.length);
  //workout stores the workout
  let workout = arr[random];
  //Check if the keys are not False. If True the values are set
  if (workout.firstName) workName.innerHTML = workout.firstName;
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

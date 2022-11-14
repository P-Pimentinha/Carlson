// html element span
const mondaySpan = document.getElementById('monday');
const tuesdaySpan = document.getElementById('tuesday');
const wednesdaySpan = document.getElementById('wednesday');
const thursdaySpan = document.getElementById('thursday');
// html element Col
const mondayColUl = document.getElementById('mondayColUl');
const tuesdayColUl = document.getElementById('tuesdayColUl');
const wednesdayColUl = document.getElementById('wednesdayColUl');
const thursdayColUl = document.getElementById('thursdayColUl');
//html btn
const btn = document.querySelector('.returnResult');

// array of HTML elements
const spanElArr = [mondaySpan, tuesdaySpan, wednesdaySpan, thursdaySpan];
const colElArr = [mondayColUl, tuesdayColUl, wednesdayColUl, thursdayColUl];

// main array
let mealArr = [
  { main: 'pasta', name: 'Pasta', ingredients: ['Pasta', 'Tomatoes', 'Basil'] },
  {
    main: 'pasta',
    name: 'Rice',
    ingredients: ['Pasta2', 'Tomatoes2', 'Basil2'],
  },
  {
    main: 'pasta',
    name: 'Potatoes',
    ingredients: ['Pasta3', 'Tomatoes3', 'Basil3'],
  },
  {
    main: 'others',
    name: 'Wrap',
    ingredients: ['Pasta4', 'Tomatoes4', 'Basil4', 'Oregano'],
  },
  {
    main: 'others',
    name: 'EatOut',
    ingredients: ['Pasta4', 'Tomatoes4', 'Basil4', 'Oregano'],
  },
  {
    main: 'rice',
    name: 'Wrap2',
    ingredients: ['Pasta4', 'Tomatoes4', 'Basil4', 'Oregano'],
  },
  {
    main: 'rice',
    name: 'Wrap3',
    ingredients: ['Pasta4', 'Tomatoes4', 'Basil4', 'Oregano'],
  },
  {
    main: 'rice',
    name: 'Wrap4',
    ingredients: ['Pasta4', 'Tomatoes4', 'Basil4', 'Oregano'],
  },
];

//arrays that contain the different types of meals
let riceArr = [];
let pastaArr = [];
let othersArr = [];

//meal organizer stores the returned meals in the right arrays
function mealArrayOrganizer(arr) {
  arr.forEach((x) => {
    if (x.main === 'pasta') {
      pastaArr.push(x);
    }
    if (x.main === 'rice') riceArr.push(x);
    if (x.main === 'others') othersArr.push(x);
  });
}

mealArrayOrganizer(mealArr);

// array that contains unrepeated//random meals
let randomMealGenerator = [
  riceArr[Math.floor(Math.random() * riceArr.length)],
  pastaArr[Math.floor(Math.random() * pastaArr.length)],
  othersArr[Math.floor(Math.random() * othersArr.length)],
  riceArr[Math.floor(Math.random() * riceArr.length)],
];

function getMultipleRandom(arr, num) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());

  return shuffled.slice(0, num);
}

//using getMultipleRandom and randomMealGenerator an array with random values is stored in result

function mealName(argOne, argTwo) {
  for (let i = 0; i < argOne.length; i++) {
    argOne[i].innerHTML = argTwo[i].name;
  }
}

function mainIngredients(argOne, argTwo) {
  for (let i = 0; i < argOne.length; i++) {
    argTwo[i].ingredients.forEach((element) => {
      let li = document.createElement('li');
      argOne[i].appendChild(li);
      li.innerHTML = element;
    });
  }
}

function returnResult() {
  //using getMultipleRandom and randomMealGenerator an array with random values is stored in result
  let result = getMultipleRandom(randomMealGenerator, 4);

  spanElArr.forEach((x) => {
    x.innerHTML = null;
  });
  colElArr.forEach((x) => {
    x.innerHTML = null;
  });
  mealName(spanElArr, result);
  mainIngredients(colElArr, result);
}

btn.addEventListener('click', returnResult);

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

//Main array that stores the returned data from the DB
// let mealApiFetch = [];

//arrays that contain the different types of meals
let riceArr = [];
let pastaArr = [];
let othersArr = [];
let potatoesArr = [];

//meal organizer stores the returned meals in the right arrays
// function mealArrayOrganizer(arr) {
//   arr.forEach((x) => {
//     if (x.main === 'pasta') pastaArr.push(x);
//     if (x.main === 'rice') riceArr.push(x);
//     if (x.main === 'others') othersArr.push(x);
//     if (x.main === 'potatoes') potatoesArr.push(x);
//   });
// }

//axios Get request. Gets all the meals
async function getAllMeals() {
  const url = '/api/v1/meal';
  try {
    const { data } = await axios.get(url);
    // mealApiFetch = data.meals;

    data.meals.forEach((x) => {
      if (x.main === 'pasta') pastaArr.push(x);
      if (x.main === 'rice') riceArr.push(x);
      if (x.main === 'others') othersArr.push(x);
      if (x.main === 'potatoes') potatoesArr.push(x);
    });
    // mealArrayOrganizer(mealApiFetch);
  } catch (e) {
    console.log(e);
  }
}

getAllMeals();

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
  // array that contains unrepeated//random meals
  let randomMealGenerator = [
    riceArr[Math.floor(Math.random() * riceArr.length)],
    pastaArr[Math.floor(Math.random() * pastaArr.length)],
    othersArr[Math.floor(Math.random() * othersArr.length)],
    potatoesArr[Math.floor(Math.random() * potatoesArr.length)],
  ];
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

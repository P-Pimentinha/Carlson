import { data_greeting, quotes } from './data/data.js';

const goodMorningEl = document.querySelector('.goodMorning');
const weatherEl = document.querySelector('.weather');
const quoteEl = document.querySelector('.quote');

let weatherInfo = [];

async function getWeather() {
  const url = 'api/v1/weather';

  try {
    const { data } = await axios.get(url);
    weatherInfo = data.data;
    console.log();
    setWelcomPage();
    return;
    // console.log(weatherInfo.main.temp);
  } catch (error) {
    console.log(error);
  }
}

function setWelcomPage() {
  const random_greeting = Math.floor(Math.random() * data_greeting.length);
  const random_quote = Math.floor(Math.random() * quotes.length);

  goodMorningEl.innerHTML = data_greeting[random_greeting];
  weatherEl.innerHTML = `${weatherInfo.main.temp} // ${weatherInfo.weather[0].main}`;
  quoteEl.innerHTML = quotes[random_quote];
}

getWeather();

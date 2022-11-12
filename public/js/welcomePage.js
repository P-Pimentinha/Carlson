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
  weatherEl.innerHTML = `${weatherInfo.main.temp} // ${weatherInfo.weather[0].main}`;
}

getWeather();

import axios from 'axios';

const getWeather = async () => {
  const url = 'http://localhost:7000/api/v1/weather';

  try {
    const { data } = await axios.get(url);
    console.log(data.data.weather);
  } catch (e) {
    console.log(e);
  }
};

getWeather();

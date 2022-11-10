import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

import { StatusCodes } from 'http-status-codes';
import { BadRequestError, NotFoundError } from '../errors/index.js';

const getWeatherInfo = async (req, res) => {
  const apiKey = process.env.ApiKey;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=Munich&appid=${apiKey}&units=metric`;

  try {
    const { data } = await axios.get(url);

    res.status(StatusCodes.CREATED).json({ data });
  } catch (err) {
    throw new NotFoundError('data not found');
  }
};

export { getWeatherInfo };

import Meal from '../models/Meal.js';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError, NotFoundError } from '../errors/index.js';

const createMeal = async (req, res) => {
  const { main, name, ingredients } = req.body;

  if (!main || !name || !ingredients)
    return res
      .status(StatusCodes.BAD_REQUEST)
      .send('Please Provide All Values');

  if (
    main === 'pasta' ||
    main === 'others' ||
    main === 'rice' ||
    main === 'potatoes'
  ) {
    const meals = await Meal.create(req.body);
    res.status(StatusCodes.CREATED).json({ meals });
  } else {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .send('Please provide a valid main(others;pasta;potatoes;rice)');
  }
};

const getMeals = async (req, res) => {
  const meals = await Meal.find();
  res.status(StatusCodes.OK).json({ meals });
};

export { createMeal, getMeals };

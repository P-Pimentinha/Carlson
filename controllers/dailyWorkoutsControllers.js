import DailyWorkout from '../models/dailyWorkout.js';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError, NotFoundError } from '../errors/index.js';

const createDailyWorkout = async (req, res) => {
  //   const { wort, word } = req.body;

  //   if (!wort || !word) {
  //     throw new BadRequestError('Please Provide All Values');
  //   }

  const dailyWorkout = await DailyWorkout.create(req.body);
  res.status(StatusCodes.CREATED).json({ dailyWorkout });
};

// !!!!!!!!!!!!!!!!!!!!!!!!
const getDailyWorkout = async (req, res) => {
  const dailyWorkout = await DailyWorkout.find();
  res.status(StatusCodes.OK).json({ dailyWorkout });
};

const deleteDailyWorkout = async (req, res) => {
  const dailyWorkout = await DailyWorkout.findByIdAndRemove(req.body.id);

  if (!dailyWorkout)
    return res.status(404).send('The Workout with the given ID was not found.');

  res.send(dailyWorkout);
};

export { createDailyWorkout, getDailyWorkout, deleteDailyWorkout };

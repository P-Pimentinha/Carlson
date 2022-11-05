import Workout from '../models/Workout.js';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError, NotFoundError } from '../errors/index.js';

const createWorkout = async (req, res) => {
  //   const { wort, word } = req.body;

  //   if (!wort || !word) {
  //     throw new BadRequestError('Please Provide All Values');
  //   }

  const words = await Workout.create(req.body);
  res.status(StatusCodes.CREATED).json({ words });
};

// !!!!!!!!!!!!!!!!!!!!!!!!
const getWorkouts = async (req, res) => {
  const workouts = await Workout.find();
  res.status(StatusCodes.OK).json({ workouts });
};

export { createWorkout, getWorkouts };

import Workout from '../models/Workout.js';
import { StatusCodes } from 'http-status-codes';
import { isValidObjectId } from 'mongoose';

const createWorkout = async (req, res) => {
  //   const { wort, word } = req.body;

  //   if (!wort || !word) {
  //     throw new BadRequestError('Please Provide All Values');
  //   }

  const workouts = await Workout.create(req.body);
  res.status(StatusCodes.CREATED).json({ workouts });
};

// !!!!!!!!!!!!!!!!!!!!!!!!
const getWorkouts = async (req, res) => {
  const workouts = await Workout.find();
  res.status(StatusCodes.OK).json({ workouts });
};

const getWorkout = async (req, res) => {
  if (!isValidObjectId(req.body.id)) return res.status(404).send('Invalid ID');
  const workout = await Workout.findById(req.params.id);
  if (!workout)
    return res.status(404).send('The workout with the given ID was not found.');
  res.status(StatusCodes.OK).json({ workout });
};

export { createWorkout, getWorkouts, getWorkout };

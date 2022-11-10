import Workout from '../models/Workout.js';
import { StatusCodes } from 'http-status-codes';

const createWorkout = async (req, res) => {
  const workouts = await Workout.create(req.body);
  res.status(StatusCodes.CREATED).json({ workouts });
};

// !!!!!!!!!!!!!!!!!!!!!!!!
const getWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find();
    res.status(StatusCodes.OK).json({ workouts });
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).send(`${error.message}`);
  }
};

export { createWorkout, getWorkouts };

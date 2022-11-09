import express from 'express';
const router = express.Router();

import {
  createWorkout,
  getWorkouts,
} from '../controllers/workoutController.js';

router.route('/').get(getWorkouts).post(createWorkout);

/* router.route('/').get(getWords); */

export default router;

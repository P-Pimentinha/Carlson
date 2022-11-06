import express from 'express';
const router = express.Router();

import {
  createWorkout,
  getWorkouts,
  getWorkout,
} from '../controllers/workoutController.js';

router.route('/').get(getWorkouts).post(createWorkout);
router.route('/id?').get(getWorkout);

/* router.route('/').get(getWords); */

export default router;

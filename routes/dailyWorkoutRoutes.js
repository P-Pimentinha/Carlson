import express from 'express';
const router = express.Router();

import {
  createDailyWorkout,
  getDailyWorkout,
  deleteDailyWorkout,
} from '../controllers/dailyWorkoutsControllers.js';

router
  .route('/')
  .get(getDailyWorkout)
  .post(createDailyWorkout)
  .delete(deleteDailyWorkout);

export default router;

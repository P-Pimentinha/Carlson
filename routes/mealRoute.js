import express from 'express';
const router = express.Router();

import { createMeal, getMeals } from '../controllers/mealController.js';

// router.route('/').get(getMeals).post(createMeal);

router.route('/').get(getMeals);

export default router;

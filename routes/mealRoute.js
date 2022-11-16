import express from 'express';
const router = express.Router();

import { createMeal, getMeals } from '../controllers/mealController.js';

// router.route('/').get(getWords).post(createWord);

router.route('/').get(getMeals).post(createMeal);

export default router;

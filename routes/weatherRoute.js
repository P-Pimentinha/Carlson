import express from 'express';
const router = express.Router();

import { getWeatherInfo } from '../controllers/weatherController.js';

router.route('/').get(getWeatherInfo);

export default router;

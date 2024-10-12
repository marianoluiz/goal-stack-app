// src/server/routes/goalRoutes.ts

import { Router } from 'express';
import * as goalController from '../controllers/goalController.js';

const router = Router();

router.get('/goals', goalController.getGoals);

router.post('/goals', goalController.addGoal);

router.delete('/goals/:goalId', goalController.deleteGoal);
//its :id cuz its parameter

router.put('/goals/:goalId', goalController.updateGoal);

router.patch('/goals/:goalId', goalController.toggleGoalCompletion);

export default router;
import express from 'express';
import PlanController from '../controllers/PlanController.js';
import authenticate from "../middleware/Authenticate.js";

const router = express.Router();

router.get("/" , authenticate , PlanController.getPlans);
router.post('/' , authenticate , PlanController.generatePlan);

router.put('/:id' , authenticate , PlanController.updatePlan);
router.delete('/:id' , authenticate , PlanController.deletePlan);

router.get("/active" , authenticate , PlanController.getActivePlan);
router.get("/highestImprovement" , authenticate , PlanController.getHighestEstimatedImprovement);


export default router;
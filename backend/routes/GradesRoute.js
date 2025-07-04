import express from 'express';
import GradesController from '../controllers/GradesController.js';
import Authenticate from "../middleware/Authenticate.js";
const router = express.Router();

router.get('/' , Authenticate, GradesController.getGradesByStudent);
router.post('/', Authenticate, GradesController.postGrade);

router.get('/:subjectName', Authenticate, GradesController.getGradesBySubject);

router.put('/me/:courseId', Authenticate, GradesController.updateGrade);
router.delete('/me/:courseId', Authenticate, GradesController.deleteGrade);

export default router;
import express from 'express';
import GradesController from '../controllers/GradesController.js';

const router = express.Router();

router.get('/:studentId' , GradesController.getGradesByStudent);
router.post('/:studentId', GradesController.postGrade);
router.get('/:subjectName', GradesController.getGradesBySubject);

router.put('/:studentId/:courseId', GradesController.updateGrade);
router.delete('/:studentId/:courseId', GradesController.deleteGrade);

export default router;
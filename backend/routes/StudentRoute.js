import express from 'express';
import StudentController from '../controllers/StudentController.js';

const router = express.Router();

router.post('/', StudentController.postStudent);
router.put('/:id', StudentController.updateStudent);
router.delete('/:id', StudentController.deleteStudent);
router.get('/:id', StudentController.getStudent);

export default router;
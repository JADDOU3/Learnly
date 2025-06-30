import express from 'express';
import { postStudent , getStudent ,updateStudent , deleteStudent } from '../controllers/StudentController';

const router = express.Router();

router.post('/', postStudent);
router.put('/:id', updateStudent);
router.delete('/:id', deleteStudent);
router.get('/:id', getStudent);

export default router;
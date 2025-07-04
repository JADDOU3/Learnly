import express from 'express';
import StudentController from '../controllers/StudentController.js';
import authenticate from "../middleware/Authenticate.js";

const router = express.Router();

router.post('/register', StudentController.register);
router.post('/login'  ,StudentController.login);

router.put('/me', authenticate ,  StudentController.updateStudent);
router.delete('/me', authenticate , StudentController.deleteStudent);
router.get('/me', authenticate , StudentController.getStudent);

export default router;
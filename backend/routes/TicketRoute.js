import express from 'express';
import Authenticate from "../middleware/Authenticate.js";
import TicketController from '../controllers/TicketController.js';
const router = express.Router();

router.post('/' , Authenticate , TicketController.postTicket);


export default router;
import express from 'express'
import cors from 'cors'
import { connectDB } from './config/Database.js'

import StudentRouter from './routes/StudentRoute.js'
import GradeRouter from './routes/GradesRoute.js'
import PlanRouter from './routes/PlanRoute.js'

import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());

app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
}));

connectDB();

app.use('/api/students', StudentRouter);
app.use('/api/grades' , GradeRouter);
app.use('/api/plans' , PlanRouter);

app.listen(5000 , () => {
    console.log("Server is running on http://localhost:5000/");
});
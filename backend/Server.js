import express from 'express'
import { connectDB } from './config/Database.js'
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());



app.listen(5000 , () => {
    connectDB();
    console.log("Server is running on http://localhost:5000/");
});
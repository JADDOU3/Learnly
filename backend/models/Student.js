import mongoose from 'mongoose';
import LEARNING_STYLES from "../utils/LearningStyles.js";

const StudentSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email:{
            type: String,
            required: true,
        },
        password:{
            type: String,
            required: true,
        },
        DateOfBirth:{
            type: Date,
            required: true,
        },
        image:{
            type: String,
        },
        learningStyle:{
            type: String,
            enum: Object.keys(LEARNING_STYLES),
            default: 'visual'
        },
        aiSettings: {
            improvementThreshold: { type: Number, default: 15 },
            planIntensity: { type: String, default: 'medium' }
        }
    },
    {
        timestamps: true,
    }
)

export default mongoose.model('Student', StudentSchema);
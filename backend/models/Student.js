import mongoose from 'mongoose';
import studySessionSchema from './StudySession.js';
import planSchema from './Plan.js';

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
        studySessions: [studySessionSchema],
        plans: [planSchema],
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
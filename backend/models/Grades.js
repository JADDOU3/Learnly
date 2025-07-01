import mongoose from 'mongoose';
import GRADES from '../utils/Grades.js';

const GradesSchema = new mongoose.Schema(
    {
        grade: {
            type: String,
            required: true,
            enum: GRADES,
            set: (grade) => grade.toUpperCase(),
        },
        subject: {
            type: String,
            required: true,
        },
        semester:{
            type: String,
            required: true,
        },
        student : {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Student',
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model('Grades', GradesSchema);
import mongoose from 'mongoose';
import GRADES from '../utils/Grades.js';

const GradesSchema = new mongoose.Schema(
    {
        grade: {
            type: Number,
            required: true,
            enum: Object.values(GRADES),
            set: (value) => {
                if (typeof value === 'string') {
                    const upper = value.toUpperCase();
                    if (Object.keys(GRADES).includes(upper)) {
                        return GRADES[upper];
                    }
                }
            }
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
import mongoose from 'mongoose';

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


    },
    {
        timestamps: true,
    }
)

export default mongoose.model('Student', StudentSchema);
import mongoose from 'mongoose'

const Plan = new mongoose.Schema({
    activities: [{
        subject: String,
        duration: Number,
        method : String,
        resources : [String]
    }],
    estimatedImprovement: Number,
    isActive :{
        type: Boolean,
        default: false,
    },
    student : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Student',
        required: true,
    }
    },{
    timestamps: true,
    }
);

export default mongoose.model('Plan', Plan)
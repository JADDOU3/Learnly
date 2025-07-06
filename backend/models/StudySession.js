import mongoose from "mongoose";

const studySessionSchema = new mongoose.Schema({
        startTime: Date,
        endTime: Date,
        topics: [String],
        effectiveness: Number,
        student : {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Student',
            required: true,
        }
    },{
        timestamps: true,
    }
    );

export default mongoose.model("StudySession", studySessionSchema);
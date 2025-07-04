import moongoose from "mongoose";

const studySessionSchema = new mongoose.Schema({
        startTime: Date,
        endTime: Date,
        topics: [String],
        effectiveness: Number
    },{
        timestamps: true,
    }
    );

export default moongoose.model("StudySession", studySessionSchema);
import Analyzer from "./Analyzer.js";
import Generator from "./Generator.js";
import PredictImprovement from "./Predictor.js";

const Agent = async (student , grades) => {
    const trends = Analyzer(grades);
    const activities = Generator(trends , student.aiSettings , student.learningStyle);

    const estimatedImprovement = PredictImprovement(activities , trends);

    return {
        activities,
        estimatedImprovement,
        isActive: true,
        student: student._id,
    };
}

export default Agent;

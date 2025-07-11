import Analyzer from "./Analyzer.js";
import Generator from "./Generator.js";
import PredictImprovement from "./Predictor.js";

const Agent = (student , grades) => {
    const trends = Analyzer(grades);
    const plans = Generator(trends , student.aiSettings , student.learningStyle);

    const final = plans.map(plan => ({
        ...plan,
        improvement: PredictImprovement(plan, trends)
    }));

    return final.filter(p => p.improvement >= 15);
}

export default Agent;

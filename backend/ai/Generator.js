import LEARNING_STYLES from "../utils/LearningStyles.js";

const Generator = (trends , aiSettings , learningStyle) => {
    const activity = [];
    const intensityMap  = {
        low: 30,
        mid: 60,
        high: 90,
    };

    const duration = intensityMap [aiSettings.planIntensity] || 60;

    const methods = LEARNING_STYLES[learningStyle];

    const weakSubjects = Object.keys(trends).filter(s => trends[s].weak);

    if(weakSubjects.length === 0){
        activity.push({
            subject: "General",
            duration,
            method: methods[0],
            resources: [],
        });
        return activity;
    }

    weakSubjects.forEach(s => {
        methods.forEach(m => {
            activity.push({
                subject: s,
                duration,
                method: m,
                resources: [`https://resources.example.com/${s.toLowerCase()}`],
            });
        });
    });

    return activity;
}

export default Generator
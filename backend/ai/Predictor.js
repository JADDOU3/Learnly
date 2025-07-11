

const PredictImprovement = (activities , trends) => {
    let score = 5;

    activities.forEach(act => {
        if (trends[act.subject]?.weak) {
            score += 2;
        }
    });

    return Math.min(score , 25);
}

export default PredictImprovement;
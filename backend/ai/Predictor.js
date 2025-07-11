

const PredictImprovement = (plan , trends) => {
    let score = 5;

    plan.plan.forEach(day => {
        if(trends[day.subject]?.weak){
            score += 2;
        }
    })

    return Math.min(score , 25);
}

export default PredictImprovement;
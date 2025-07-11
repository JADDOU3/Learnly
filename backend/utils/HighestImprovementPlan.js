const getHighestImprovementPlan = (plans) => {
    let highest = plans[0];
    for(let i = 1; i < plans.length; i++){
        if(highest.estimatedImprovement < plans[i].estimatedImprovement){
            highest = plans[i];
        }
    }
    return highest;
}


export default getHighestImprovementPlan;
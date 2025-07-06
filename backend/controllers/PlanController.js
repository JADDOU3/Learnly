import Plan from '../models/Plan.js';
import HTTP_STATUS from "../utils/Respones.js";

const getPlans = async (req, res) => {
    try{
        const plans = await Plan.find({student : req.user.id});
        if(!plans){
            res.status(HTTP_STATUS.NOT_FOUND).json({msg: "This user has no plans"});
        }

        res.status(HTTP_STATUS.OK).json(plans);
    }catch (error){
        res.status(HTTP_STATUS.SERVER_ERROR).json({msg: error.message});
    }
}

const getActivePlan = async (req, res) => {
    try{
        const plans = await Plan.find({student : req.user.id});
        if(!plans){
            res.status(HTTP_STATUS.NOT_FOUND).json({msg: "This user has no plans"});
        }

        const activePlan = await plans.find(p => p.active === true);
        if(!activePlan){
            return res.status(HTTP_STATUS.NOT_FOUND).json({msg: "All plans are inactive."});
        }

        res.status(HTTP_STATUS.OK).json(activePlan);
    }catch (error){
        res.status(HTTP_STATUS.SERVER_ERROR).json({msg: error.message});
    }
}

const generatePlan = async (req, res) => {
    //todo implement ai to implement generate plan
}

const getHighestEstimatedImprovement = async (req, res) => {
    try{
        const plans = await Plan.find({student : req.user.id});
        if(!plans){
            res.status(HTTP_STATUS.NOT_FOUND).json({msg: "This user has no plans"});
        }

        const highest = getHighestImprovementPlan(plans);

        res.status(HTTP_STATUS.OK).json(highest);

    }catch (error){
        res.status(HTTP_STATUS.SERVER_ERROR).json({msg: error.message});
    }
}
const updatePlan = async (req, res) => {
    //todo implement ai to implement update Plan
}

const deletePlan = async (req, res) => {
    try{
        const plans = await Plan.find({student : req.user.id});
        if(!plans){
            res.status(HTTP_STATUS.NOT_FOUND).json({msg: "This user has no plans"});
        }
        const plan = await plans.findById(req.params.id);

        if(!plan){
            res.status(HTTP_STATUS.NOT_FOUND).json({msg: "Plan not found"});
        }

        await Plan.findOneAndDelete(plan);
        res.status(HTTP_STATUS.OK).json({msg : "Plan Deleted successfully"});

    }catch (error){
        res.status(HTTP_STATUS.SERVER_ERROR).json({msg: error.message});
    }
}


const plans = {
    getPlans,
    getActivePlan,
    generatePlan,
    getHighestEstimatedImprovement,
    updatePlan,
    deletePlan,
};

const getHighestImprovementPlan = (plans) => {
    let highest = plans.get[0];
    for(let i = 1; i < plans.length; i++){
        if(highest.estimatedImprovement < plans[i].estimatedImprovement){
            highest = plans[i];
        }
    }
    return highest;
}

export default plans;
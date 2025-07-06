import Plan from '../models/Plan';
import HTTP_STATUS from "../utils/Respones.js";

const getPlans = async (req, res) => {
    try{
        const plans = await Plan.find({student : req.user.id});
        if(!plans){
            res.status(HTTP_STATUS.NOT_FOUND).json({msg: "Plans not found"});
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
            res.status(HTTP_STATUS.NOT_FOUND).json({msg: "Plans not found"});
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

}

const getHighestImprovement = async (req, res) => {

}
const updatePlan = async (req, res) => {

}

const deletePlan = async (req, res) => {

}


const plans = {
    getPlans,
    getActivePlan,
    generatePlan,
    getHighestImprovement,
    updatePlan,
    deletePlan,
};

export default plans;
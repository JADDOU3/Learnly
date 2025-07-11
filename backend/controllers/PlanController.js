import Plan from '../models/Plan.js';
import HTTP_STATUS from "../utils/Respones.js";
import Agent from "../ai/Agent.js"
import Grades from "../models/Grades.js";
import Student from "../models/Student.js";
import getHighestImprovementPlan from '../utils/HighestImprovementPlan.js'

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

        const activePlan = await plans.find(p => p.isActive === true);

        if(!activePlan){
            return res.status(HTTP_STATUS.NOT_FOUND).json({msg: "All plans are inactive."});
        }

        res.status(HTTP_STATUS.OK).json(activePlan);
    }catch (error){
        res.status(HTTP_STATUS.SERVER_ERROR).json({msg: error.message});
    }
}

const generatePlan = async (req, res) => {
    try {
        const student = await Student.findById(req.user.id);
        const grades = await Grades.find({student: student.id});

        if(!grades){
            return res.status(HTTP_STATUS.NOT_FOUND).json({msg: "This user has no grades"});
        }

        const plans = await Agent(student , grades);
    if(!plans){
        return res.status(HTTP_STATUS.SERVER_ERROR).json({msg: "Failed to generate plan"});
    }
    const plan = new Plan(plans);
    await plan.save();
    res.status(HTTP_STATUS.OK).json(plans);

    }
    catch(error){
        res.status(HTTP_STATUS.SERVER_ERROR).json({msg: error.message});
    }
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
            return res.status(HTTP_STATUS.NOT_FOUND).json({msg: "This user has no plans"});
        }
        const plan = await Plan.findById(req.params.id);

        if(!plan){
            return res.status(HTTP_STATUS.NOT_FOUND).json({msg: "Plan not found"});
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


export default plans;
import Grades from '../models/Grades.js';
import HTTP_STATUS from "../utils/Respones.js";
import Student from "../models/Student.js";


const postGrade = async (req, res) => {
    const grade = req.body;

    try{
        grade.student = await Student.findById(req.user.id);

        if(!grade.grade || !grade.subject || !grade.student || !grade.semester){
            return res.status(HTTP_STATUS.FORBIDDEN).json({msg: "Please provide all the required fields"})
        }
        const newGrade = new Grades(grade);

        await newGrade.save();
        res.status(HTTP_STATUS.CREATED).json("Account created successfully");
    }
    catch (error){
        res.status(HTTP_STATUS.SERVER_ERROR).json({msg: error.message});
    }

}

const updateGrade = async (req, res) => {
    const newGrade = req.body;
    try {
        const studentGrades = await Grades.find({student: req.user.id});

        const grade = await Grades.findById(req.params.courseId);
        if (!grade) {
            return res.status(HTTP_STATUS.NOT_FOUND).json({msg: "Grade not found"});
        }

        const belongsToUser = studentGrades.some(g => g._id.equals(grade._id));

        if (!belongsToUser) {
            return res.status(HTTP_STATUS.UNAUTHORIZED).json({msg: "Invalid permission"});
        }

        if(newGrade.subject){
            grade.subject = newGrade.subject;
        }
        if(newGrade.grade){
            grade.grade = newGrade.grade;
        }
        if(newGrade.semester){
            grade.semester = newGrade.semester;
        }

        await grade.save();
        res.status(HTTP_STATUS.OK).json({msg : "Grade updated successfully"});
    }
    catch (error){
        res.status(HTTP_STATUS.SERVER_ERROR).json({msg : error.message});
    }

}

const deleteGrade = async (req, res) => {
    try {
        const studentGrades = await Grades.find({student: req.user.id});

        const grade = await Grades.findById(req.params.courseId);
        if(!grade){
            return res.status(HTTP_STATUS.NOT_FOUND).json({msg : "Grade not found"});
        }

        const belongsToUser = studentGrades.some(g => g._id.equals(grade._id));

        if(!belongsToUser){
            return res.status(HTTP_STATUS.UNAUTHORIZED).json({msg : "Invalid permission"});
        }

        await Grades.findOneAndDelete(grade);
        res.status(HTTP_STATUS.OK).json({msg : "Grade Deleted successfully"});

    }
    catch (error){
        res.status(HTTP_STATUS.SERVER_ERROR).json({msg : error.message});
    }

}

const getGradesByStudent = async (req, res) => {
    try{
        const grades = await Grades.find({student: req.user.id});
        res.status(HTTP_STATUS.OK).json(grades);
    }catch (error){
        res.status(HTTP_STATUS.SERVER_ERROR).json({msg: error.message});
    }
}

const getGradesBySubject = async (req, res) => {
    try{
        const grades = await Grades.find({subject: req.params.subjectName});
        res.status(HTTP_STATUS.OK).json(grades);
    }catch (error){
        res.status(HTTP_STATUS.SERVER_ERROR).json({msg: error.message});
    }

}


const GradesController = {
    postGrade,
    updateGrade,
    deleteGrade,
    getGradesByStudent,
    getGradesBySubject,
}

export default GradesController;
import Student from '../models/Student.js';
import HTTP_STATUS from "../utils/respones.js";
import jwt from 'jsonwebtoken';
import bcrypt from "bcrypt";

const getStudent = async (req, res) => {
    try{
        const student = await Student.findById(req.user.id);
        if(!student){
            res.status(HTTP_STATUS.NOT_FOUND).json({msg: "Student not found"})
        }

        res.status(HTTP_STATUS.OK).json(student);
    }catch (error){
        res.status(HTTP_STATUS.SERVER_ERROR).json({msg: error.message})
    }
};

const register = async (req, res) => {
    const student = req.body;

    if (!student.name || !student.email || !student.password || !student.DateOfBirth) {
        return res.status(HTTP_STATUS.FORBIDDEN).json({msg: "Please provide all the required fields"})
    }

    try {

        const email = student.email;
        const exist = await Student.findOne({email});
        if(exist){
            return res.status(HTTP_STATUS.BAD_REQUEST).json({msg: "Account already exists"})
        }

        student.password = await bcrypt.hash(student.password, 10);
        const newStudent = new Student(student);
        await newStudent.save();
        res.status(HTTP_STATUS.CREATED).json("Account created successfully");
    } catch (error) {
        res.status(HTTP_STATUS.SERVER_ERROR).json({msg: error.message})
    }

}

const updateStudent = async (req, res) => {
    const newstudent = req.body;
    try{
        const student = await Student.findById( req.user.id );
        if(!student){
            return res.status(HTTP_STATUS.NOT_FOUND).json({msg: "Student not found"})
        }
        if(newstudent.name){
            student.name = newstudent.name;
        }
        if(newstudent.password){
            student.password = await bcrypt.hash(newstudent.password, 10);
        }
        if(newstudent.image){
            student.image = newstudent.image;
        }
        if(newstudent.DateOfBirth){
            student.DateOfBirth = newstudent.DateOfBirth;
        }
        await student.save();
        res.status(HTTP_STATUS.OK).json("Student updated successfully");
    }
    catch (error){
        res.status(HTTP_STATUS.SERVER_ERROR).json({msg: error.message})
    }
}

const deleteStudent = async (req, res) => {
    try{
        const student = await Student.findById(req.user.id);
        if(!student){
            return res.status(HTTP_STATUS.NOT_FOUND).json({msg: "Student not found"})
        }
        await Student.findOneAndDelete(student);
        res.status(HTTP_STATUS.OK).json("Student deleted successfully");

    }
    catch (error){
        res.status(HTTP_STATUS.SERVER_ERROR).json({msg: error.message})
    }
}

const login = async (req, res) => {
    const {email, password} = req.body;
    if(!email || !password){
        return res.status(HTTP_STATUS.BAD_REQUEST).json({msg: "Please provide all the required fields"})
    }
    try{
        const user = await Student.findOne({email});
        if(!user){
            return res.status(HTTP_STATUS.NOT_FOUND).json({msg: "User not found"})
        }

        const validatePassword  = await bcrypt.compare( password , user.password );
        if (!validatePassword) {
            return res.status(HTTP_STATUS.UNAUTHORIZED).json({msg: "Invalid password"})
        }

        const token = jwt.sign({id: user.id} , process.env.ACCESS_TOKEN_SECRET)

        res.status(HTTP_STATUS.OK).json({token})
    }
    catch (error){
        res.status(HTTP_STATUS.SERVER_ERROR).json({msg: error.message})
    }
}

const StudentController = {
    getStudent,
    register,
    updateStudent,
    deleteStudent,
    login,
}

export default StudentController;
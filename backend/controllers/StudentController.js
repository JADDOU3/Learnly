import Student from '../models/Student.js';
import HTTP_STATUS from "../utils/respones.js";


const getStudent = async (req, res) => {
    try{
        const student = await Student.findById(req.params.id);
        if(!student){
            res.status(HTTP_STATUS.NOT_FOUND).json({msg: "Student not found"})
        }

        res.status(HTTP_STATUS.OK).json(student);
    }catch (error){
        res.status(HTTP_STATUS.SERVER_ERROR).json({msg: error.message})
    }
};

const postStudent = async (req, res) => {
    const student = req.body;

    if (!student.name || !student.email || !student.password || !student.DateOfBirth) {
        return res.status(HTTP_STATUS.FORBIDDEN).json({msg: "Please provide all the required fields"})
    }

    const newStudent = new Student(student);
    try {
        const email = student.email;
        const exist = await Student.findOne({email});
        if(exist){
            return res.status(HTTP_STATUS.BAD_REQUEST).json({msg: "Account already exists"})
        }
        await newStudent.save();
        res.status(HTTP_STATUS.CREATED).json("Account created successfully");
    } catch (error) {
        res.status(HTTP_STATUS.SERVER_ERROR).json({msg: error.message})
    }

}

const updateStudent = async (req, res) => {
    const newstudent = req.body;
    try{
        const student = await Student.findById(req.params.id);
        if(!student){
            return res.status(HTTP_STATUS.NOT_FOUND).json({msg: "Student not found"})
        }
        if(newstudent.name){
            student.name = newstudent.name;
        }
        if(newstudent.password){
            student.password = newstudent.password;
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
        const student = await Student.findById(req.params.id);
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

const StudentController = {
    getStudent,
    postStudent,
    updateStudent,
    deleteStudent
}

export default StudentController;
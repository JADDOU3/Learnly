import Ticket from "../models/Ticket.js";
import HTTP_STATUS from "../utils/Respones.js";
import Student from "../models/Student.js";


const postTicket = async (req, res) => {
    const ticket = req.body;
    try{
        ticket.student = await Student.findById(req.user.id);

        if(!ticket.student){
            return res.status(HTTP_STATUS.NOT_FOUND).json({msg: "Student not found"});
        }

        const newTicket = new Ticket(ticket);
        await newTicket.save();
        res.status(HTTP_STATUS.CREATED).json("Ticket created successfully");
    }
    catch(error){
        return res.status(HTTP_STATUS.SERVER_ERROR).json({msg: error.message});
    }

};

const TicketController = {
   postTicket
}

export default TicketController;
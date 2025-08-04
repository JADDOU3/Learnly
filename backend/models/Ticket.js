import mongoose from 'mongoose'

const Ticket = new mongoose.Schema({
        title :{
            type: String,
            required: true,
        },
        description :{
                type: String,
                required: true,
            },
            status :{
                type: String,
        },
        student : {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Student',
            required: true,
        }
    },{
        timestamps: true,
    }
);

export default mongoose.model('Ticket', Ticket);
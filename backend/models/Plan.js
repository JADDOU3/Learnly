import moongoose from 'mongoose'

const Plan = new moongoose.Schema({
    activities: [{
        subject: String,
        duration: Number,
        method : String,
        resources : [String]
    }],
    estimatedImprovement: Number,
    isActive :{
        type: Boolean,
        default: false,
    }
    },{
    timestamps: true,
    }
);

export default moongoose.model('Plan', Plan)
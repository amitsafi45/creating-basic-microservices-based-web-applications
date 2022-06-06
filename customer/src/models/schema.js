import mongoose from "mongoose";
const customer_schema=mongoose.Schema({
    Name:{
        type:String,
        require:true
    },
    age:{
        type:Number,
        require:true
    },
    Address:{
        type:String,
        require:false
    }
    
})
const customer=mongoose.model('customers',customer_schema)
export default customer
import mongoose from "mongoose";
const order_schema=mongoose.Schema({
    customer_id:{
        type:mongoose.SchemaTypes.ObjectId,
        require:true
    },
    book_id:{
        type:mongoose.SchemaTypes.ObjectId,
        require:true
    },
    intialDate:{
        type:Date,
        require:true
    },
    deliveryDate:{
        type:Date,
        require:true
    }
    
})
const order=mongoose.model('order',order_schema)
export default order
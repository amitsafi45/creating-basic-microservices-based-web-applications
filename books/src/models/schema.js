import mongoose from "mongoose";
const books_schema=mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    author:{
        type:String,
        require:true
    },
    number_pages:{
        type:Number,
        require:false
    },
    publisher:{
        type:String,
        require:true
    }
})
const books=mongoose.model('Books',books_schema)
export default books
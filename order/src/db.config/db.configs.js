import mongoose from "mongoose"
const db= async(req,res,next)=>{
    try{
        await mongoose.connect("mongodb://localhost:27017/myapp")
        console.log('connect')
    }
    catch(error){
        console.log(error)
    }
    next()
}
export default db
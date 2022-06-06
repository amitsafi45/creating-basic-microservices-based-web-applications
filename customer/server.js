import express from "express"
import router from "./src/routes/router.js"
const app=express()
app.use(express.json())
app.use('/customer',router)
 
app.listen(6000,()=>{
    console.log('listening customer')
})
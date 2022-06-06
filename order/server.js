import express from "express"
import router from "./src/routes/router.js"
const app=express()
app.use(express.json())
app.use('/order',router)
app.listen(5000,()=>{
    console.log('listening orders')
})
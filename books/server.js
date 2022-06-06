import express from "express"
import router from "./src/routes/router.js"
const app=express()
app.use(express.json())
app.use('/books',router)
 
app.listen(3000,()=>{
    console.log('listening books')
})
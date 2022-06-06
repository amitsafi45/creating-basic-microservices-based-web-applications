import mongoose from "mongoose"
import order from "../models/schema.js"
import axios from "axios"

class order_controller{
  static create=async(req,res)=>{
    
    try{

      const orders=new order({
        customer_id:mongoose.Types.ObjectId(req.body.customer_id),
        book_id:mongoose.Types.ObjectId(req.body.book_id),
        intialDate:req.body.intialDate,
        deliveryDate:req.body.deliveryDate
      })
       
      await orders.save()
      res.send('inserted')
    }
    catch(error){
        res.send(error)
    }
    
 }
 static show_all=async(req,res)=>{
    try{
    const order_show=await order.find()
    if (order_show){ 
    res.send(order_show)
    }  
  }
    catch(error){
      res.send(error)
    }
 }
 static show_by_id=async(req,res)=>{
      try{
      const order_show_by_id=await order.findById(req.params.id)
     if (order_show_by_id){
        axios.get("http://localhost:6000/customer/show/" +order_show_by_id.customer_id)
        .then((response)=>{
          const orderObject={customerName:response.data.Name,bookTitle:" "}  
           axios.get("http://localhost:3000/books/show/" +order_show_by_id.book_id)
           .then((response)=>{
             orderObject.bookTitle=response.data.title
             res.send(orderObject)
           })
          
        })
        
    }else{
      res.send('order is not exist')
    }
    }
    catch(error){
      res.send(error)
    }
}
 static update_by_id=async(req,res)=>{
   try{
     const update_by_id=await order.findByIdAndUpdate({_id:req.params.id},{
       customer_id:mongoose.Types.ObjectId(req.body.customer_id),
       book_id:mongoose.Types.ObjectId(req.body.book_id),
       intialDate:req.body.intialDate,
       deliveryDate:req.body.deliveryDate
     })
     
      res.send('record updated')
     
   }
   catch(error){
     res.send(error)
   }

 }
 static delete_by_id= async(req,res)=>{
   try{
     const delete_by_id=await order.findByIdAndDelete(req.params.id)
     res.send('record are deleted')
   }
   catch(error){
     res.send(error)
   }
     
 }
}
export default order_controller
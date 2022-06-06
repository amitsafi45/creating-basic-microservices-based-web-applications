import customer from "../models/schema.js"

class customer_controller{
  static create=async(req,res)=>{
    
    try{

      const customers=new customer(req.body)
       
      await customers.save()
      res.send('inserted')
    }
    catch(error){
        res.send(error)
    }
    
 }
 static show_all=async(req,res)=>{
    try{
    const customer_show=await customer.find()
    if (customer_show){ 
    res.send(customer_show)
    }  
  }
    catch(error){
      res.send(error)
    }
 }
 static show_by_id=async(req,res)=>{
      try{
      const customer_show_by_id=await customer.findById(req.params.id)
     if (customer_show_by_id){
      res.send(customer_show_by_id)
    }else{
      res.send('record is not exist')
    }
    }
    catch(error){
      res.send(error)
    }
}
 static update_by_id=async(req,res)=>{
   try{
     const update_by_id=await customer.findByIdAndUpdate({_id:req.params.id},{
       Name:req.body.Name,
       age:req.body.age,
       Address:req.body.Address
     })
     
      res.send('record updated')
     
   }
   catch(error){
     res.send(error)
   }

 }
 static delete_by_id= async(req,res)=>{
   try{
     const delete_by_id=await customer.findByIdAndDelete(req.params.id)
     res.send('record are deleted')
   }
   catch(error){
     res.send(error)
   }
     
 }
}
export default customer_controller
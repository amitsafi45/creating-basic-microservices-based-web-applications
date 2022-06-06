import books from "../models/schema.js"

class books_controller{
  static create=async(req,res)=>{
    try{

    const book=new books(req.body)
       
      await book.save()
      res.send('inserted')
    }
    catch(error){
        res.send(error)
    }
    
 }
 static show_all=async(req,res)=>{
    try{
    const book_show=await books.find()
    if (book_show){ 
    res.send(book_show)
    }  
  }
    catch(error){
      res.send(error)
    }
 }
 static show_by_id=async(req,res)=>{
      try{
      const book_show_by_id=await books.findById(req.params.id)
     if (book_show_by_id){
      res.send(book_show_by_id)
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
     const update_by_id=await books.findByIdAndUpdate({_id:req.params.id},{
       title:req.body.title,
       author:req.body.author,
       number_pages:req.body.number_pages,
       publisher:req.body.publisher
     })
     
      res.send('record updated')
     
   }
   catch(error){
     res.send(error)
   }

 }
 static delete_by_id= async(req,res)=>{
   try{
     const delete_by_id=await books.findByIdAndDelete(req.params.id)
     res.send('record are deleted')
   }
   catch(error){
     res.send(error)
   }
     
 }
}
export default books_controller
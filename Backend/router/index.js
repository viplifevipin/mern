const express = require ('express');
const router = express.Router();
const path=require("path")
const multer= require("multer")
var Employee=require('../model/todo')

const storage = multer.diskStorage({
    destination: "./public/images/",
    filename: function(req, file, cb){
       cb(null,"IMAGE-" + Date.now() + path.extname(file.originalname));
    }
 });
 
 const upload = multer({
    storage: storage,
    limits:{fileSize: 1000000},
 }).single("photo");

router.get('/todos',async(req,res,next)=>{
   await Employee.find({},(err,docs)=>{
       if(err){
           console.log("err",err)
       }
       else{
           res.json(docs)
       }
   })
})


router.get('/edit/:id',(req,res)=>{
    let id=req.params.id
    Employee.findOne({_id:id},(err,docs)=>{
        if(err){
            console.log("err",err)
        }
        else{
            res.json(docs)
        }
    })
})



router.get('/data',(req,res)=>{
    Employee.find({$and:[{createdAt:{$lte:new Date()}},{updatedAt:{$gte:new Date()}}]},(err,data)=>{
      if(err){
          console.log('err',err)
      }
      else{
          res.json(data)
      }
    })
})

router.post('/change/:id',upload,(req,res)=>{
    console.log(req.params.id)
    var id=req.params.id
    console.log(req.body)
var data={
    firstName:req.body.firstName,
    lastName:req.body.lastName,
    email:req.body.email,
    phone:req.body.phone,
    photo:req.file.filename,
    updatedAt:Date.now()
}
    Employee.findOneAndUpdate({_id:id},{$set:data},(err,data)=>{
if(err){
    console.log(err)
}
else{
    res.json(data)
    console.log(data)
}
    })

   
    
})

router.delete('/delete/:id',(req,res)=>{
let id = req.params.id;
        Employee.findOneAndDelete(id, function (err, employee) {
        res.json(employee);
        })
    })

router.post('/to', upload,(req, res, next) => {
    console.log(req.file,'hey')
    var data={
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        phone:req.body.phone,
        email:req.body.email,
        photo:req.file.filename
    }
    let employee= new Employee(data)    
    employee.save((err,doc)=>{
if (err){
    res.json(err)
}
else{
    res.json(doc)
}
    })      
});

module.exports = router;
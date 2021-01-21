const express = require ('express');
const router = express.Router();

var Todo=require('../model/todo')

router.get('/todos',async(req,res,next)=>{
   await Todo.find((err,docs)=>{
       if(err){
           console.log("err",err)
       }
       else{
           res.json(docs)
       }
   })
})


router.get('/:id',(req,res)=>{
    let id=req.params.id

    Todo.findById((err,docs)=>{
        if(err){
            console.log("err",err)
        }
        else{
            res.json(docs)
        }
    })
})

router.post('/to', (req, res, next) => {
    let todo= new Todo(req.body)
    todo.save((err,todo)=>{
if (err){
    res.json(err)
}
else{
    res.json(todo)
}
    })      
});

module.exports = router;
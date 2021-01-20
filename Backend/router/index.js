const express = require ('express');
const router = express.Router();

var Todo=require('../Models/items')

router.get('/todos', (req, res, next) => {
  Todo.find((err,docs)=>{
      if(err){
          console.log('err',err)
      }
      else{
          res.json(docs)
      }
  })      
});

router.post('/add', (req, res, next) => {
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
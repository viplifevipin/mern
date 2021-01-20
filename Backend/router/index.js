const express = require('express');
const router = express.Router();
var dbConfiq = require('../database/db')

router.get('/todos', (req, res, next) => {
    dbConfiq.get().collection('todo').find({}).toArray(function (err, doc) {
        if (err) {
            console.log('err', err)
        }
        else {
            res.json(doc)
            console.log(doc)
        }
    })

});

router.post('/add', (req, res, next) => {

    const data={
        todo_description: req.body.todo_description,
        todo_responsible:req.body.todo_responsible,
        todo_priority :req.body.todo_priority,
        todo_completed :req.body.todo_completed
    }

    dbConfiq.get().collection('todo').insertMany([{
       data
    }])
});

module.exports = router;
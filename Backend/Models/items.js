const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for todo
const TodoSchema = new Schema({
  todo_description:{
    type:String,
  },
  todo_responsible:{
    type:String,
  },
  todo_priority:{
    type:String
  },
  todo_completed:{
    type:Boolean
  }

})

//create model for todo
const Todo = mongoose.model('todo', TodoSchema);

module.exports = Todo;
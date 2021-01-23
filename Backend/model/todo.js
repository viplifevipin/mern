
 const mongoose = require('mongoose');
 const Schema = mongoose.Schema;
 
 // List of columns for Employee schema
 let Employee = new Schema({
 firstName: {
 type: String
 },
 lastName: {
 type: String
 },
 email: {
 type: String
 },
 phone: {
 type: Number
 },
 photo:{
type:String
},   
createdAt: {
    type:Date,
    default:Date.now
},
updatedAt: {
    type:Date
}
});



 module.exports = mongoose.model('Employee', Employee);
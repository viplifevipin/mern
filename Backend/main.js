const express = require('express')
const bodyParser = require('body-parser');
const app = express()
var db=require('./database/db')
// var mongoose=require('mongoose')


app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

var todoRoutes=require('./router/index')
// mongoose.connect('mongodb://localhost:27017/do',{ useNewUrlParser: true,useUnifiedTopology: true },(err)=>{
//     if (err){
//         throw err
//     }
//     else {
//         console.log('done')
//     }
// })

const port=process.env.PORT||5000

app.use('/todos',todoRoutes)

db.connect(function(err){
    if(err){
        console.log('err')
    }
    else{
      console.log('done')
    }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
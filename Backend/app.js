const express = require('express')
const app = express()
var mongoose=require('mongoose')

var todoRoutes=require('./router/index')
mongoose.connect('mongodb://localhost:27017/do',{ useNewUrlParser: true,useUnifiedTopology: true },(err)=>{
    if (err){
        throw err
    }
    else {
        console.log('done')
    }
})

const port=process.env.PORT||4000

app.use('/todos',todoRoutes)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const port = process.env.port
const mongodburl = process.env.mongodburl
const promptsModel = require('./topic')
app.use(cors())
app.use(express.json())

mongoose.connect(mongodburl,{useNewUrlParser:true,useUnifiedTopology:true}) 
.then(()=>console.log("Connect"))
.catch((err)=>console.log(err))

app.get('/api/response/topic', async(req,res)=>{
    try{
       const Prompts = await promptsModel.find()
       res.status(200).json({message:Prompts})
    }catch(err){
        console.log(err)
        res.status(500).json({message : "Internal Server Error"})
    }
})

app.listen(port,()=>{
    console.log("Connect To database",port)
})
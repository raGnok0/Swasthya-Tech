const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');
const router = require('./Routes/auth');
// const router = require('./Routes/auth');
require('dotenv').config();
require('./Models/db')

const app = express()
app.use(cors())
app.use(bodyParser.json())

app.get("/api",(req,res)=>{
    return res.json({message:"Hello from backend"})
})

app.get("/user/logout",(req,res)=>{
    try{
        res.clearCookie('token',{sameSite:"none",secure:true}.status(200))
    }catch(err){
        res.status(500).json("Internal sever error!!!")
    }
})
// app.post("/api/hospitalregistration",(req,res)=>{
//     console.log(req.body)

//     HospitalRegistration.create(req.body)
//     return res.json({message:"Registration done"})
// })
// app.post("/api/hospitalogin",(req,res)=>{
    
//     HospitalRegistration.find({email:req.body.email}).then(response => console.log(response[0].hospitalName))
//     return res.json({message:"Login done"})
// })


app.use('/auth',router);


app.listen(8000,()=>{
    console.log("Listening...")
})
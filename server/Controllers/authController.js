const hospitalregistration = require('../Models/mongoSchema')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const signUp = async (req,res)=>{
    try{
        const {name,email,phoneNumber,password}= req.body;
        const user = await hospitalregistration.findOne({email})
        if(user){
            return res.status(409).json({message: "user already exist!!",success : false})
        }
        const newUserModel = new hospitalregistration({name,email,phoneNumber,password})
        newUserModel.password = await bcrypt.hash(password,10)
        await newUserModel.save()
        res.status(201).json({message: "New user created",success : true})
    }catch(err){
        // console.log(err)
        res.status(500).json({message : "Internal server error",success : false})
    }
}

const logIn = async (req,res)=>{
    try{
        
        const {email,password}= req.body;
        
        const user = await hospitalregistration.findOne({email})
        if(!user){
            return res.status(403).json({message: "user does not exist!!",success : false})
        }
        const isPassEqual = await bcrypt.compare(password,user.password)
        // const isPassEqual = (user.password == password) //temporary solution cause my first id password is not encrypted
        if(!isPassEqual){
            return res.status(403).json({message: "password does not match",success:false})
        }
        const jwtToken = jwt.sign({email:user.email, _id:user._id},process.env.JWT_SECRET,{expiresIn:'24h'})

        res.status(201).json({message: "Login Successful",success : true,jwtToken,email,name:user.name,id:user._id})
    }catch(err){
        console.log(err)
        res.status(500).json({message : "Internal server error",success : false})
    }
}



module.exports = {
    signUp,
    logIn
}
const Joi = require('joi')

const signUpValidation = async(req,res,next)=>{
    const Schema = Joi.object({
        hospitalName: Joi.string().min(10).max(100).required(),
        email: Joi.string().email().required(),
        phoneNumber: Joi.string().min(10).required(),
        password: Joi.string().min(4).required(),
    })
    const {error} = Schema.validate(req.body)
    // console.log(error)
    if(error){
        return res.status(400).json({message : "Bad Request",error})
    }
    next();
}
const loginValidation = async(req,res,next)=>{
    const Schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(4).required(),
    })
    const {error} = Schema.validate(req.body)
    // console.log(error)
    if(error){
        return res.status(400).json({message : "Bad Request",error})
    }
    next();
}
module.exports = {
    signUpValidation,
    loginValidation
}
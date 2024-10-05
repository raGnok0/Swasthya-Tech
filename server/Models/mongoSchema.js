const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    hospitalName : String,
    email : String,
    phoneNumber: String,
    password : String,
});

module.exports = mongoose.model('HospitalRegistration',userSchema)
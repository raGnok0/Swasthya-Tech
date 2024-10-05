const mongoose = require('mongoose')

const mongoURL = process.env.MONGO_DB

mongoose.connect(mongoURL)
    .then(()=>{
        console.log("Mongo DB Connected....")
    }).catch(err=> console.log("Mongo DB Error:",err))
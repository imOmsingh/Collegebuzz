const mongoose = require('mongoose');
const CollegeSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    state:{
        type:String
    },
    established:{
        type:Number
    },
    status:{
        type:String,
    },
    logo:{
        type:String,
        required:true
    },
})


module.exports = mongoose.model('College',CollegeSchema);
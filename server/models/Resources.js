const mongoose = require('mongoose');
const ResourceSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    collegeId:{
        type: mongoose.Types.ObjectId,
        ref: "College",
        required:true
    },
    collegeName:{
        type:String,
        required:true
    },
    collegeSem:{
        type:String,
        required:true
    },
    studentId:{
        type: mongoose.Types.ObjectId,
        ref: "User",
        required:true
    },
    studentName:{
        type:String
    },
    studentYear:{
        type:Number
    },
    yearUploaded:{
        type:String,
    }
})


module.exports = mongoose.model('Resources',ResourceSchema);
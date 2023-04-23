const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    studentYear:{
        type:Number
    },
    college:{
        type: mongoose.Types.ObjectId,
        ref: "College",
    },
    codeforce_rating:{
        type:Number
    },
    clubs:{
        type:Array
    },
    languages:{
        type:Array
    },
    socials:{
        type:Array
    },
})

module.exports = mongoose.model('User',UserSchema);
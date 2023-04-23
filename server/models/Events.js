const mongoose = require('mongoose');
const EventsSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    collegeId:{
        type: mongoose.Types.ObjectId,
        ref: "College",
    },
    hubId:{
        type: mongoose.Types.ObjectId,
        ref: "Hubs",
    },
    startdate:{
        type:String
    },
    logo:{
        type:String,
        required:true
    },
    venue:{
        type:String,
        required:true
    },
    mode:{
        type:String,
        required:true
    },
    noofdays:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    website:{
        type:String,
    }
})

module.exports = mongoose.model('Events',EventsSchema);
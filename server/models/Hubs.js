const mongoose = require('mongoose');
const HubsSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    college:{
        type: mongoose.Types.ObjectId,
        ref: "College",
    },
    description:{
        type:String
    },
    organisers:{
        type:Array
    },
    logo:{
        type:String,
        required:true
    },
})

module.exports = mongoose.model('Hubs',HubsSchema);
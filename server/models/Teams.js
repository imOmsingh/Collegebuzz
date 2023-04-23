const mongoose = require('mongoose');
const TeamSchema = new mongoose.Schema({
    eventId:{
        type: mongoose.Types.ObjectId,
        ref: "Events",
    },
    teamLeader:{
        type:String,
        required:true
    },
    leaderName:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    projectTitle:{
        type: String,
        required:true
    },
    contact:{
        type:String
    },
})

module.exports = mongoose.model('Team',TeamSchema);
const router = require('express').Router();
const Team = require('../models/Teams')

router.post('/createteam',async (req,res)=>{

    try {

        const { eventId,teamLeader,leaderName,  projectTitle, description,contact  } = req.body;
    
        const team = await Team.create({  eventId,teamLeader,leaderName,  projectTitle, description, contact, })
        if(!team){
            return res.status(500).json({success:false,message:"Team can not created"});
        }
    
        res.status(200).json({success:true,message:"Team is added",team});
        
    } catch (error) {
        
        res.status(500).json({success:false,message:'Team can not be created',error:error.message});

    }

})

router.get('/getTeamByEvent',async (req,res)=>{

    try {

        const query = req.query;
        const { eventId } = query;
    
        const team = await Team.find({eventId})
        if(!team){
            return res.status(500).json({success:false,message:"Event can not fetched"});
        }
    
        res.status(200).json({success:true,message:"Event is fetched",team});
        
    } catch (error) {
        
        res.status(500).json({success:false,message:'Event can not be fetched',error});

    }

})


module.exports = router;
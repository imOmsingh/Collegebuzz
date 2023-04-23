const router = require('express').Router();
const Event = require('../models/Events')


router.post('/createevent',async (req,res)=>{

    try {

        const { name,collegeId, hubId, description,website, startdate , logo, venue, mode, noofdays } = req.body;
    
        const college = await  Event.create({ name,collegeId,description,website, hubId, startdate , logo, venue, mode, noofdays})
        if(!college){
            return res.status(500).json({success:false,message:"Event can not created"});
        }
    
        res.status(200).json({success:true,message:"Event is added",college});
        
    } catch (error) {
        
        res.status(500).json({success:false,message:'Event can not be created',error:error.message});

    }

})


router.get('/getevent',async (req,res)=>{

    try {

        const query = req.query;
        const { collegeId , hubId } = query;
    
        const event = await  Event.find({collegeId , hubId})
        if(!event){
            return res.status(500).json({success:false,message:"Event can not fetched"});
        }
    
        res.status(200).json({success:true,message:"Event is fetched",event});
        
    } catch (error) {
        
        res.status(500).json({success:false,message:'Event can not be fetched',error});

    }

})

router.get('/getcollegeevent',async (req,res)=>{

    try {

        const query = req.query;
        const { collegeId } = query;
    
        const event = await  Event.find({collegeId , hubId:null})
        if(!event){
            return res.status(500).json({success:false,message:"Event can not fetched"});
        }
    
        res.status(200).json({success:true,message:"Event is fetched",event});
        
    } catch (error) {
        
        res.status(500).json({success:false,message:'Event can not be fetched',error});

    }

})

router.get('/geteventbyid',async (req,res)=>{

    try {

        const query = req.query;
        const { id } = query;
    
        const event = await  Event.findById(id)
        if(!event){
            return res.status(500).json({success:false,message:"Event can not fetched"});
        }
    
        res.status(200).json({success:true,message:"Event is fetched",event});
        
    } catch (error) {
        
        res.status(500).json({success:false,message:'Event can not be fetched',error});

    }

})

    


module.exports = router;
const router = require('express').Router();
const Resources = require('../models/Resources')


router.post('/createresource',async (req,res)=>{

    try {

        const { name,collegeId,collegeName, collegeSem, studentId,studentName, studentYear , subject, yearUploaded } = req.body;
    
        const resource = await  Resources.create({ name,collegeId,collegeName, collegeSem, studentId,studentName, studentYear , subject, yearUploaded })
        if(!resource){
            return res.status(500).json({success:false,message:"Event can not created"});
        }
    
        res.status(200).json({success:true,message:"Event is added",resource});
        
    } catch (error) {
        
        res.status(500).json({success:false,message:'Event can not be created',error:error.message});

    }

})


router.get('/getresourcebyid',async (req,res)=>{

    try {

        const query = req.query;
        const { id } = query;
    
        const resource = await  Resources.findById(id)
        if(!resource){
            return res.status(500).json({success:false,message:"resource can not fetched"});
        }
    
        res.status(200).json({success:true,message:"resource is fetched",resource});
        
    } catch (error) {
        
        res.status(500).json({success:false,message:'resource can not be fetched',error});

    }

})

router.get('/getresourcebycollege',async (req,res)=>{

    try {

        const query = req.query;
        const { id } = query;
    
        const resource = await  Resources.find({collegeId:id});
        if(!resource){
            return res.status(500).json({success:false,message:"resource can not fetched"});
        }
    
        res.status(200).json({success:true,message:"resource is fetched",resource});
        
    } catch (error) {
        
        res.status(500).json({success:false,message:'resource can not be fetched',error});

    }

})
    


module.exports = router;
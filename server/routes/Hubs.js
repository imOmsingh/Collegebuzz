const router = require('express').Router();
const Hubs = require('../models/Hubs')

router.post('/createhub',async (req,res)=>{
    try {

        const { name, college, description, organisers , logo } = req.body;
    
        const hub = await  Hubs.create({ name,college, description, organisers , logo })
        if(!hub){
            return res.status(500).json({success:false,message:"Hub can not created"});
        }
    
        res.status(200).json({success:true,message:"Hub is added",hub});
        
    } catch (error) {
        
        res.status(500).json({success:false,message:'Hub can not be created',error});

    }

})


router.get('/gethub',async (req,res)=>{

    try {

        const query = req.query;
        const { id  } = query;
    
        const hub = await  Hubs.findById(id)
        if(!hub){
            return res.status(500).json({success:false,message:"Hubs can not fetched"});
        }
    
        res.status(200).json({success:true,message:"Hubs is fetched",hub});
        
    } catch (error) {
        
        res.status(500).json({success:false,message:'Hubs can not be fetched',error});

    }

})

router.get('/getbycollegeid',async (req,res)=>{

    try {

        const query = req.query;
        const { id  } = query;
    
        const hub = await Hubs.find({college:id});
        if(!hub){
            return res.status(500).json({success:false,message:"Hubs can not fetched"});
        }
    
        res.status(200).json({success:true,message:"Hubs is fetched",hub});
        
    } catch (error) {
        
        res.status(500).json({success:false,message:'Hubs can not be fetched',error});

    }

})



module.exports = router;
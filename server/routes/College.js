const router = require('express').Router();
const College = require('../models/College')

router.post('/createcollege',async (req,res)=>{

    try {

        const { name,city, state, established , status, logo } = req.body;
    
        const college = await  College.create({ name, city, state, established, status, logo })
        if(!college){
            return res.status(500).json({success:false,message:"College can not created"});
        }
    
        res.status(200).json({success:true,message:"College is added",college});
        
    } catch (error) {
        
        res.status(500).json({success:false,message:'College can not be created',error});

    }

})


router.get('/getcollege',async (req,res)=>{

    try {

        const query = req.query;
        const { id  } = query;
    
        const college = await  College.findById(id)
        if(!college){
            return res.status(500).json({success:false,message:"College can not fetched"});
        }
    
        res.status(200).json({success:true,message:"College is fetched",college});
        
    } catch (error) {
        
        res.status(500).json({success:false,message:'College can not be fetched',error});

    }

})

router.get('/searchcollege', async (req,res)=>{
        
    try {
  
          const query = req.query;
          const { search  } = query;
            const findCollege = await College.find({name:{$regex:search,$options:'i'}});
        
            if(!findCollege){
                return res.status(500).json({success:false,message:"College not found"});
            }
            if (findCollege.length === 0) {
              return res
                .status(500)
                .json({ success: false, message: "Can not find college" });
            }
  
            res.status(200).send(findCollege)
  
    } catch (error) {
        return res.status(500).json({success:false,message:"Tag can not be found",error});
    }
  });

    


module.exports = router;
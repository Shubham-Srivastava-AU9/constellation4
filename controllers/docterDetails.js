const DocterDetails = require('../models/DocterDetails');


const docterDetails = {
    getDetails : async (req, res) => {
        try {
            const details = await DocterDetails.find();
    
            res.json(details);
        } catch (error) {
            res.status(500).json({
                msg: "error",
                
            });
        }
        
    },
    createDoctersDetails : async (req,res)=>{
        const {practicename ,practicetype ,first_name , last_name ,professional_desighnation , address1 , address2, city , state , zip , phone , fax , gender} = req.body
        try {
            const details = await DocterDetails.create({
                practicename ,practicetype ,first_name , last_name ,professional_desighnation , address1 , address2, city , state , zip , phone , fax , gender
            })
            res.status(201).json({
                success: true,
                details
            });
        } catch (error) {
            res.status(500).json("error")
        
    }
},
getDetail : async (req, res) => {
    const {id:_id} = req.params;

    try {
        const detail = await DocterDetails.findById(_id);

        res.json({
            success: true,
            data: detail,
        });
    } catch (error) {
        res.status(500).json({
            msg: "error",
            
        });
    }
    
},

}

module.exports = docterDetails




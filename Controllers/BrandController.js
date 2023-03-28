const brand = require('../Models/Brand');
exports.addbrand = async(req,res)=>{
    try {
        const newbrand = await brand.create(req.body);
        res.status(200).json({
            status:"Success",
            message:"New Brand added successfully"
        })
    } catch (error) {
        res.status(400).json({
            status:"Error",
            message:"Something went wrong",
            err:error.message
        })
    }
}


module.exports.getAllBrands = async(req, res)=>{
    try {
        brand.find().then((brnd) => {
            if(!brnd){
                res.status(404).json({
                    status:'Error',
                    message:'No stocks',
                    err:error.message
                }) 
            } else {
                res.status(200).json({
                    status:'Success',
                    brand:brnd,
                    message:'Get all brands'
                })
            }
        })
        
    } catch (error) {
        res.status(500).json({
            status:'Error',
            message:'Something Went Wrong',
            err:error.message
        })
    }
}
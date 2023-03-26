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
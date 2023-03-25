
const stock = require('../Models/Stock');
exports.addstock = async(req,res)=>{
    try {
        const newStock = await stock.create(req.body);
        res.status(200).json({
            status:'success',
            message:'new Stock added Successfully'

        }
        )
    } catch (error) {
        res.status(500).json({
            status:'Error',
            message:'Something Went Wrong',
            err:error.message
        })
    }
}
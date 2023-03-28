
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

module.exports.getAllStocks=async(req, res)=>{
    try {
        console.log("*********")
        stock.find().then((stk) => {
            if(!stk){
                res.status(404).json({
                    status:'Error',
                    message:'No stocks',
                    err:error.message
                }) 
            } else {
                res.status(200).json({
                    status:'Success',
                    stocks:stk,
                    message:'Get all stocks'
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
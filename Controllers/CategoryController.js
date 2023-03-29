const category = require('../Models/Category');
exports.addcategory = async(req,res)=>{
    try {
        const newcategory = await category.create(req.body);
        res.status(200).json({
            status:'success',
            message:'new category added Successfully'

        })
    } catch (error) {
        res.status(500).json({
            status:'Error',
            message:'Something Went Wrong',
            err:error.message
        })
    }
}


module.exports.getAllCategory = async(req, res)=>{
    try {
        brand.find().then((cate) => {
            if(!cate){
                res.status(404).json({
                    status:'Error',
                    message:'No stocks',
                    err:error.message
                }) 
            } else {
                res.status(200).json({
                    status:'Success',
                    category:cate,
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
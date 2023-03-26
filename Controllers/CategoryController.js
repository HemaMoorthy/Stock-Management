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
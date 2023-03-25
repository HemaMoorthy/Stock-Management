const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../Models/User');
exports.signup = async(req,res)=>{
    try {
        const { username,email,password,phoneNo } = req.body;
        const HashedPassword = await bcrypt.hash(password,10);
        const NewUser = new User({ username,email,password:HashedPassword,phoneNo })
        await NewUser.save();
        res.status(200).json({
            status:'success',
            message:'newuser created successfully'
        })
    } catch (error) {
        res.status(500).json({
            status:'Error',
            message:'Something Went Wrong',
            err:error.message
        })
    }
}


exports.login = async(req,res)=>{
    try {

        const { email,password } = req.body;
        const currUser = await User.findOne({email:email});
        if(currUser === null){
            res.status(404).json({
                status:"Error",
                message:"User Not Found",

            });
            return ;
        }
        const pMatch = await bcrypt.compare(password,currUser.password)
        if(pMatch!==true){
            res.status(400).json({
                status:"Error",
                message:"Password does not match ",

            }); 
            return;
        }
        const jwt_token = await jwt.sign({ user_id:currUser._id }, process.env.JWT_SECRET, { expiresIn:process.env.JWT_EXPIRES_IN });
        res.status(200).json({
            status:'success',
            message:'logged in successfully',
            jwt_token
        })


    } catch (error) {
        res.status(500).json({
            status:'Error',
            message:'Something Went Wrong',
            err:error.message
        })
    }
}
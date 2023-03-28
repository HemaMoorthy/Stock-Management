const express = require('express');
const router = express.Router();

const BrandController = require('../Controllers/BrandController');
const {getAllBrands} = require('../Controllers/BrandController');
const AuthToken = require('../MiddleWares/AuthToken');
router.route('/')
    .post(AuthToken.authToken,BrandController.addbrand);

router.get("/getAllBrands",getAllBrands);
module.exports=router;
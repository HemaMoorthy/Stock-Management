const express = require('express');
const router =express.Router();

const CategoryController = require('../Controllers/CategoryController');
const {getAllCategory} = require('../Controllers/CategoryController');
const AuthToken = require('../MiddleWares/AuthToken');
router.route('/')
    .post(AuthToken.authToken,CategoryController.addcategory)

router.get('/getAllCategory',getAllCategory);
module.exports=router;
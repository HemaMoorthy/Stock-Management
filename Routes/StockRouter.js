const express = require('express');
const router = express.Router();

const StockController = require('../Controllers/StockController');
const AuthToken = require('../MiddleWares/AuthToken');
router.route('/')
    .post(AuthToken.authToken,StockController.addstock)


module.exports=router;
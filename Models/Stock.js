const mongoose = require('mongoose');

const StockSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    quantity:
    {
        type:Number,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    brand:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'brand',
        required: true
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'category',
        required:true
    }
},{ timestamp:true })


module.exports = mongoose.model('Stock',StockSchema);
const mongoose = require('mongoose');

const cateSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    }
})

module.exports = mongoose.model('category',cateSchema);
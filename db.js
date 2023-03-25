const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URL);
const con = mongoose.connection;
con.on('open',()=>{
    console.log("Db connected...");
})
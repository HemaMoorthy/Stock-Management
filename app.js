const express = require('express');
const cors = require('cors');
require("dotenv").config();

const app = express();
app.use(cors());

require('./db');

app.use(express.json({
    limit:"10kb"
}));//converting the body part of requset to json format in post request

app.use(express.urlencoded({
    extended:true,
    limit:"10kb"
}))//app setup

const AuthRouter = require('./Routes/AuthRouter');
app.use('/accounts',AuthRouter);

app.listen(process.env.PORT, ()=>{
    console.log("Server Started at port 5500");
})
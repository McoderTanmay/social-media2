const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config()

app.use(express.json());
app.use(cors());

const uri = process.env.MONGODB
const USER_ROUTER=require('./routers/accounts');
const POST_ROUTER=require('./routers/post/index');

app.use('/accounts',USER_ROUTER);
app.use('/post',POST_ROUTER);

//syncronization
async function connect(){
    try {
        await mongoose.connect(uri);
        console.log("Connected to database");
    } catch (error) {
        console.log(error);
    }
}

connect();

app.listen(5000,()=>{
    console.log('App is running on port 5000');
});
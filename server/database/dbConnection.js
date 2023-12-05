// REQUIRING THE DEPENDENCIES
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// IMPORTING ENV FILE
dotenv.config({ path: './config.env' });
const DB = process.env.DATABASE;

// CONNECTING THE DATABASE
mongoose.connect(DB).then(()=>{
    console.log(`Successfully Connected to "FreightEase-DB" database!`);
}).catch((error)=>{
    console.log(`Error connecting to "FreightEase-DB" database!`,error);
})
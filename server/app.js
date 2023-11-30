const express = require('express');
const  app = express();
const dotenv = require('dotenv');

dotenv.config({path : './config.env'});
require('./db/conn');
const PORT= process.env.PORT;

app.use(express.json());
app.use(require('./router/auth'));


app.listen(PORT, ()=>{
    console.log("Running Server at ", PORT)
})
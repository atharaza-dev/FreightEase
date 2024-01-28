//? REQUIRING DEPENDENCIES
const express = require('express');
const app = express();
const router = require('./router/auth-router')
require('./utils/database');
require("dotenv").config({ path: "./config.env" })

//? USING DEPENDENCIES
app.use("/api/auth", router);
app.use(express.json());


//*! Not mandatory ==============================
// app.get("/", (req, res)=>{
//     res.status(200).send("Welcome to FreightEase Server!");
// })

const PORT = process.env.PORT;
app.listen(PORT, ()=>{
    console.log(`FreightEase Server is running at PORT ${PORT}`);
}) 
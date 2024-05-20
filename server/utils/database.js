//? REQUIRING DEPENDENCIES
const mongoose = require('mongoose');
require("dotenv").config({ path: "./config.env" })


const URI = process.env.DATABASE;

const connectToDB = mongoose.connect(URI).then(() => {
    console.log("Connected to FreightEase Database successfully!");
}).catch((err) => {
    console.log("Error Connecting Database!", err);
})

module.exports = connectToDB;
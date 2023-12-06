// requiring the dependencies
const mongoose = require('mongoose');

// creating the structure of "shipper-account" form
const shipperAccountSchema = new mongoose.Schema({

    role: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

// creating a model for new "shipper-account"
const newShipperAccount = mongoose.model('shipper-accounts', shipperAccountSchema);
module.exports = newShipperAccount; // exporting the model of the "shipper-account"

// make sure to import this file into the authentication.js file
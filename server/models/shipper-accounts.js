// requiring the dependencies
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config({ path: '../config.env' });

// creating the structure of "shipper-account" form
const shipperAccountSchema = new mongoose.Schema({

    isShipper: {
        type: Boolean,
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
        default: false,
        required: true
    }
})

// generating JWT for shipper
shipperAccountSchema.methods.generateToken = async function () {
    try {
        return jwt.sign({
            userID : this._id.toString(),
            isShipper: this.isShipper,
            email: this.email,
        }, process.env.JWT_SECRET_KEY, { expiresIn: '30d', });
    } catch (error) {
        console.error(error);
    }
};

// creating a model for new "shipper-account"
const newShipperAccount = mongoose.model('shipper-accounts', shipperAccountSchema);
module.exports = newShipperAccount; // exporting the model of the "shipper-account"

// make sure to import this file into the authentication.js file
// requiring the dependencies
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config({ path: '../config.env' });

const vendorAccountSchema = new mongoose.Schema({
    isVendor: {
        type: Boolean,
        required: true,
        default: false
    },
    company_name: {
        type: String,
        required: true
    },
    owner_name: {
        type: String,
        required: true
    },
    cnic: {
        type: Number,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    registration_number: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

// generating JWT Token
vendorAccountSchema.methods.generateToken = async function () {
    try {
        return jwt.sign({
            userID : this._id.toString(),
            isVendor: this.isVendor,
            registration_number: this.registration_number,
        }, process.env.JWT_SECRET_KEY, { expiresIn: '30d', });
    } catch (error) {
        console.error(error);
    }
};

const newVendorAccount = mongoose.model('vendor-accounts', vendorAccountSchema);
module.exports = newVendorAccount; // exporting the model of the "shipper-account"
// make sure to import this file into the authentication.js file
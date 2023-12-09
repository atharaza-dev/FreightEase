// requiring the dependencies
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config({ path: '../config.env' });

// creating the structure of "shipper-account" form
const adminAccountSchema = new mongoose.Schema({

    isAdmin: {
        type: Boolean,
        required: true,
        default: true
    },
    USER_ID: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

// generating JWT for shipper
adminAccountSchema.methods.generateToken = async function () {
    try {
        return jwt.sign({
            userID : this._id.toString(),
            isAdmin: this.isAdmin,
            USER_ID: this.USER_ID,
        }, process.env.JWT_SECRET_KEY, { expiresIn: '30d', });
    } catch (error) {
        console.error(error);
    }
};

// creating a model for new "shipper-account"
const newAdminAccount = mongoose.model('admin-accounts', adminAccountSchema);
module.exports = newAdminAccount; // exporting the model of the "shipper-account"

// make sure to import this file into the authentication.js file
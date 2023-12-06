// requiring the dependencies
const mongoose = require('mongoose');

const vendorAccountSchema = new mongoose.Schema({
    role: {
        type: String,
        required: true
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

const newVendorAccount = mongoose.model('vendor-accounts', vendorAccountSchema);
module.exports = newVendorAccount; // exporting the model of the "shipper-account"
const mongoose = require('mongoose');

const vendorAccSchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: true
    },
    ownerName: {
        type: String,
        required: true
    },
    ownerCNIC: {
        type: Number,
        required: true
    },
    NTN: {
        type: Number,
        required: true
    },
    cellNum: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
})

const newVendor = mongoose.model('vendor-accounts' , vendorAccSchema);
module.exports = newVendor;
const mongoose = require('mongoose');

const customerAccSchema = new mongoose.Schema({
    fullName: {
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
    },
})

const newCustomer = mongoose.model('customer-accounts' , customerAccSchema);
module.exports = newCustomer;
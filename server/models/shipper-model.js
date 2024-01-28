const mongoose = require('mongoose');

const shipperSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
})

const Shipper = new mongoose.model('Shipper-Accounts', shipperSchema);
module.exports = Shipper;
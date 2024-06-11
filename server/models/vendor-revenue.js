//? requiring dependecnies
const mongoose = require('mongoose');

const vendorRevenue = new mongoose.Schema({
    revenue: {
        type: Number,
        require: true
    },
    shipment: {
        type: String,
        require: true
    },
    date: {
        type: String,
        require: true
    }
});

const vRevenue = new mongoose.model('Vendor-Revenue', vendorRevenue);
module.exports = vRevenue;
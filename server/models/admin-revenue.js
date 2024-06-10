//? requiring dependecnies
const mongoose = require('mongoose');

const adminRevenue = new mongoose.Schema({
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

const aRevenue = new mongoose.model('Admin-Revenue', adminRevenue);
module.exports = aRevenue;
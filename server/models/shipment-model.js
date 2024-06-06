const mongoose = require('mongoose');

const shipmentInsertionSchema = new mongoose.Schema({
    vehicleId: {
        type: String,
        required: true
    },
    vendorId: {
        type: String,
        required: true
    },
    shipmentId: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    fullName: {
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
    originCity: {
        type: String,
        required: true
    },
    departureCity: {
        type: String,
        required: true
    },
    fullOriginAddress: {
        type: String,
        required: true
    },
    fullDepartureAddress: {
        type: String,
        required: true
    },
    goodsType: {
        type: String,
        required: true
    },
    goodsQuantity: {
        type: Number,
        required: true
    },
    vendorName: {
        type: String,
        required: true
    },
    vehicleType: {
        type: String,
        required: true
    },
    vehicleName: {
        type: String,
        required: true
    },
    routeFare: {
        type: Number,
        required: true
    },
    shipmentDate: {
        type: String,
        required: true
    },
    itemWeight: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true,
        default: false,
    },
});


const shipmentInsertion = mongoose.model('new-shipments', shipmentInsertionSchema);
module.exports = shipmentInsertion;

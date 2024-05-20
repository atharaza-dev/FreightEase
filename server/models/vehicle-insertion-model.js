const mongoose = require('mongoose');

// Define the schema
const vehicleInsertionSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    vendorName: {
        type: String,
        required: true
    },
    registration: {
        type: String,
        required: true
    },
    vehicleName: {
        type: String,
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
    routeCharges: {
        type: Number,
        required: true
    },
    vehicleType: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String, 
        required: true
    }
});

// Pre-save hook to convert city names to uppercase
vehicleInsertionSchema.pre('save', function(next) {
    // Convert originCity to uppercase
    if (this.originCity && typeof this.originCity === 'string') {
        this.originCity = this.originCity.toUpperCase();
    }
    // Convert departureCity to uppercase
    if (this.departureCity && typeof this.departureCity === 'string') {
        this.departureCity = this.departureCity.toUpperCase();
    }
    next();
});

const vehicleInsertion = mongoose.model('Vehicles-by-Vendors', vehicleInsertionSchema);
module.exports = vehicleInsertion;

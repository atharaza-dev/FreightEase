//? requiring dependecnies
const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
    origin: {
        type: String,
        require: true
    },
    destination: {
        type: String,
        require: true
    },
    rate: {
        type: Number,
        require: true
    }
});

const Quote =  new mongoose.model('Quote-Generator', quoteSchema);
module.exports = Quote;
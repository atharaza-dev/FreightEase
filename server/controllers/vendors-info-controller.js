//* REQUIRING Models
const VendorAccounts = require('../models/vendor-model')

//! getting shipper account information
const vendorInfo = async (req, res) => {
    try {
        const vendorData = await VendorAccounts.find();
        if (!vendorData) {
            return res.status(404).json({ err: "Data not found from Database!" });
        }
        res.status(200).json(vendorData);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

// * ----------------------------------------------------------
module.exports = {
    vendorInfo
}
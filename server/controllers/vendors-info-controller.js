//* REQUIRING Models
const VendorAccounts = require('../models/vendor-model')

//! getting vendor account information
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

//! deleting vendor account information
const deleteVendorInfo = async (req, res) => {
    try {
        const id = req.params.id;
        const vendorFound = await VendorAccounts.findById(id);
        if (!vendorFound) {
            return res.status(404).json({ msg: "Vendor Data not found!" });
        }
        await VendorAccounts.findByIdAndDelete(id);
        res.status(200).json({ msg: "Vendor Data Deleted!" });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

//! find vendor by id:
const findVendor = async (req, res) => {
    try {
        const id = req.params.id;
        const vendorFound = await VendorAccounts.findById(id);
        if (!vendorFound) {
            return res.status(404).json({ msg: "Data not found!" });
        }
        res.status(200).json(vendorFound);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

//! deleting vendor account information
const updateVendor = async (req, res) => {
    try {
        const id = req.params.id;
        const vendorFound = await VendorAccounts.findById(id);
        if (!vendorFound) {
            return res.status(404).json({ msg: "Data not found!" });
        }
        const updateVendor = await VendorAccounts.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({ msg: 'Vendor Successfully Updated!' });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

// * ----------------------------------------------------------
module.exports = {
    vendorInfo,
    deleteVendorInfo,
    findVendor,
    updateVendor
}
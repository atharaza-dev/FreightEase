//* REQUIRING Models
const ShipperAccounts = require('../models/shipper-model')

//! getting shipper account information
const shipperinfo = async (req, res) => {
    try {
        const shipperData = await ShipperAccounts.find();
        if (!shipperData) {
            return res.status(404).json({ err: "Data not found from Database!" });
        }
        res.status(200).json(shipperData);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

//! deleting shipper account information
const deleteShipperInfo = async (req, res) => {
    try {
        const id = req.params.id;
        const shipperFound = await ShipperAccounts.findById(id);
        if (!shipperFound) {
            return res.status(404).json({ msg: "Shipper Data not found!" });
        }
        await ShipperAccounts.findByIdAndDelete(id);
        res.status(200).json({ msg: "Shipper Data Deleted!" });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}


// * ----------------------------------------------------------
module.exports = {
    shipperinfo,
    deleteShipperInfo
}
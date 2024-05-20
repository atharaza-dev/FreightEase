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

//! find shipper by id:
const findShipper = async (req, res) => {
    try {
        const id = req.params.id;
        const shipperFound = await ShipperAccounts.findById(id);
        if (!shipperFound) {
            return res.status(404).json({ msg: "Data not found!" });
        }
        res.status(200).json(shipperFound);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

//! updating shipper account information
const updateShipper = async (req, res) => {
    try {
        const id = req.params.id;
        const shipperFound = await ShipperAccounts.findById(id);
        if (!shipperFound) {
            return res.status(404).json({ msg: "Data not found!" });
        }
        const updateShipper = await ShipperAccounts.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({ msg: 'Shipper Successfully Updated!' });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

// * ----------------------------------------------------------
module.exports = {
    shipperinfo,
    deleteShipperInfo,
    updateShipper,
    findShipper
}
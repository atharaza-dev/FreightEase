//? requiring dependecnies

//* REQUIRING Models
const ShipperAccounts = require('../models/shipper-model')

const getShipperDetails = async (req, res) => {
    try {
        const shipperDetails = await ShipperAccounts.find();
        console.log(shipperDetails);
        if (!shipperDetails) {
            return res.status(404).json({ error: 'Shipper details not found!' });
        }
        return res.status(200).json(shipperDetails);
    } catch (error) {
        console.error(error);
        next(error);
    }
}

module.exports = getShipperDetails;
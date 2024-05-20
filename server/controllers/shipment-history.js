const shipmentData = require('../models/shipment-model');

const getAllShipments = async (req, res) => {
    try {
        const userId = req.params.userId;
        const getShipmentsData = await shipmentData.find({ userId: userId });
        if (!getShipmentsData) {
            return res.status(404).json({ err: "Data not found from Database!" });
        }
        res.status(200).json(getShipmentsData);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = {getAllShipments};
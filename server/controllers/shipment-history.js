const shipmentData = require('../models/shipment-model');

const getAllShipments = async (req, res) => {
    try {
        const userId = req.params.userId;
        const getShipmentsData = await shipmentData.find({ userId: userId, status: { $in: ['confirmed', 'cancelled', 'shipped', 'pending', 'delivered'] } }); // Modified query
        if (!getShipmentsData || getShipmentsData.length === 0) {
            return res.status(404).json({ err: "Data not found from Database!" });
        }
        res.status(200).json(getShipmentsData);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const getBookingDetails = async (req, res) => {
    try {
        const shipmentId = req.params.shipmentId;
        const getOrdersData = await shipmentData.find({ shipmentId: shipmentId });
        if (!getOrdersData || getOrdersData.length === 0) {
            return res.status(404).json({ err: "Data not found from Database!" });
        }
        res.status(200).json(getOrdersData);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
        console.log(error);
    }
}


module.exports = { getAllShipments, getBookingDetails };

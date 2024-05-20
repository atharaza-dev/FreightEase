const getOrders = require('../models/shipment-model');

const getOrderDetails = async (req, res) => {
    try {
        const vendorId = req.params.vendorId;
        const getOrdersData = await getOrders.find({ vendorId: vendorId });
        if (!getOrdersData || getOrdersData.length === 0) {
            return res.status(404).json({ err: "Data not found from Database!" });
        }
        res.status(200).json(getOrdersData);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
        console.log(error);
    }
}

module.exports = { getOrderDetails };

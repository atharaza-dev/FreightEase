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

const updateOrder = async (req, res) => {
    try {
        const id = req.params.id;
        const orderFound = await getOrders.findById(id);
        if (!orderFound) {
            return res.status(404).json({ msg: "Data not found!" });
        }
        const updateOrder = await getOrders.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({ msg: 'Successfully Updated!' });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const getOrdeDataforUpdate = async (req, res) => {
    try {
        const id = req.params.id;
        const orderFound = await getOrders.findById(id);
        if (!orderFound) {
            return res.status(404).json({ msg: "Data not found!" });
        }
        res.status(200).json(orderFound);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = { getOrderDetails, updateOrder, getOrdeDataforUpdate };

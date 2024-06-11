//* REQUIRING Models
const vRevenue = require('../models/vendor-revenue');

const addRevenue = async (req, res) => {
    try {
        const { date, shipment, revenue } = req.body;
        const insertRevenue = await vRevenue.create({ date, shipment, revenue });
        res.status(201).json({ msg: "Revenue Earned Successfully", });
    } catch (error) {
        res.status(500).send({ msg: "Internal Server Error" });
    }
}

const getRevenue = async (req, res) => {
    try {
        const revData = await vRevenue.find();
        if (!revData) {
            return res.status(404).json({ err: "Data not found from Database!" });
        }
        res.status(200).json(revData);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = { addRevenue, getRevenue };
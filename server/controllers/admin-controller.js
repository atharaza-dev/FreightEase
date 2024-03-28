//* REQUIRING Models
const AdminAccounts = require('../models/admin-model')

//! getting shipper account information
const getAdminInfo = async (req, res) => {
    try {
        const adminInfo = await AdminAccounts.find();
        if (!adminInfo) {
            return res.status(404).json({ err: "Data not found from Database!" });
        }
        res.status(200).json(adminInfo);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

// * ----------------------------------------------------------
module.exports = { getAdminInfo };
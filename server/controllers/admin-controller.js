//* REQUIRING Models
const AdminAccounts = require('../models/admin-model')

//! getting vendor account information
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

//! updating vendor account information
const updateAdmin = async (req, res) => {
    try {
        const userEmail = req.body.email;
        const adminFound = await AdminAccounts.findOne({ email: userEmail });
        const updateFields = {
            email: req.body.email,
            name: req.body.name,
            password: req.body.password
        };
        const updatedShipper = await AdminAccounts.findOneAndUpdate(
            updateFields,
            { new: true }
        );
        console.log(updatedShipper);
        res.status(200).json({ msg: 'asd Successfully Updated!' });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}


// * ----------------------------------------------------------
module.exports = { getAdminInfo, updateAdmin };
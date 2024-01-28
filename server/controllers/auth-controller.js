//* REQUIRING Models
const ShipperAccounts = require('../models/shipper-model')



// * ----------------------------------------------------------
//! SERVER HOMEPAGE CODE LOGIC
const server_homepage = async (req, res) => {
    try {
        res.status(200).send("Welcome to FreightEase Server! using router");
    } catch (error) {
        console.log(error);
    }
}
// * ----------------------------------------------------------


// * ----------------------------------------------------------
//! REGISTRATION CODE LOGIC
const registration = async (req, res) => {
    try {
        const { email, password } = req.body;
        const shipperExists = await ShipperAccounts.findOne({ email });
        if (shipperExists) {
            return res.status(400).json({ msg: "Email already exists!" });
        } else {
            const ShipperAccCreated = await ShipperAccounts.create({ email, password });
            res.status(200).json({Shipper: ShipperAccCreated});
            console.log({Shipper: ShipperAccCreated});
        }
    } catch (error) {
        res.status(500).send({ msg: "Internal Server Error" });
    }
}
// * ----------------------------------------------------------

module.exports = { server_homepage, registration };
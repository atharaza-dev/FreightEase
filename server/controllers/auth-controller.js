//? requiring dependecnies
const bcrypt = require('bcrypt');

//* REQUIRING Models
const ShipperAccounts = require('../models/shipper-model')
const VendorAccounts = require('../models/vendor-model')


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
//! SHIPPER REGISTRATION CODE LOGIC
const shipper_registration = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(206).json({ msg: "Enter all details first!" });
        }

        const shipperExists = await ShipperAccounts.findOne({ email });

        if (shipperExists) {
            return res.status(400).json({ msg: "Email already exists!" });
        } else {
            const ShipperAccCreated = await ShipperAccounts.create({ name, email, password });
            const token = await ShipperAccCreated.generateToken()
            res.status(201).json({
                msg: "SHIPPER Registration Successfull",
                token: token,
                userId: ShipperAccCreated._id.toString(),
            });
            console.log({ Shipper: ShipperAccCreated });
            // console.table({Shipper: ShipperAccCreated});
        }
    } catch (error) {
        res.status(500).send({ msg: "Internal Server Error" });
    }
}
// * ----------------------------------------------------------

// * ----------------------------------------------------------
//! SHIPPER LOGIN CODE LOGIC
const shipper_login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(206).json({ msg: "Enter all details first!" });
        }

        const checkShipperExist = await ShipperAccounts.findOne({ email });
        if (!checkShipperExist) {
            return res.status(404).json({ msg: "Shipper doesn't exist, Create One!" });
        }

        const shipperFound = await bcrypt.compare(password, checkShipperExist.password);
        if (shipperFound) {
            res.status(201).json({
                msg: "Shipper Logged In Successfully!",
                token: await checkShipperExist.generateToken(),
                userId: checkShipperExist._id.toString(),
            });
        } else {
            res.status(401).json({ msg: "Invalid Credentials" });
        }

    } catch (error) {
        res.status(500).send({ msg: "Internal Server Error" });
    }
}
// * ----------------------------------------------------------

// * ----------------------------------------------------------
//! VENDOR REGISTRATION CODE LOGIC
const vendor_registration = async (req, res) => {
    try {
        const { name, CNIC, Phone, RegNumber, email, password } = req.body;
        if (!name || !CNIC || !Phone || !RegNumber || !email || !password) {
            return res.status(206).json({ msg: "Enter all details first!" });
        }

        const VendorExist = await VendorAccounts.findOne({ email });
        if (VendorExist) {
            return res.status(400).json({ msg: "Email already exists!" });
        } else {
            const vendorAccCreated = await VendorAccounts.create({ name, CNIC, Phone, RegNumber, email, password });
            const token = await vendorAccCreated.generateToken(); // Assuming this is an async operation

            // Sending the response after all async operations are completed
            res.status(201).json({
                msg: "VENDOR Registration Successful",
                token: token,
                userId: vendorAccCreated._id.toString(),
            });
            console.log({ Vendor: vendorAccCreated });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Internal Server Error" });
    }
}
// * ----------------------------------------------------------


// * ----------------------------------------------------------
//! VENDOR LOGIN CODE LOGIC
const vendor_login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(206).json({ msg: "Enter all details first!" });
        }

        const CheckVendorExist = await VendorAccounts.findOne({ email });
        if (!CheckVendorExist) {
            return res.status(404).json({ msg: "Vendor doesn't exist, Create One!" });
        }

        const vendorFound = await bcrypt.compare(password, CheckVendorExist.password);
        if (vendorFound) {
            res.status(201).json({
                msg: "VENDOR Logged In Successfully!",
                token: await CheckVendorExist.generateToken(),
                userId: CheckVendorExist._id.toString(),
            });
        } else {
            res.status(401).json({ msg: "Invalid Credentials" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Internal Server Error" });
    }
}
// * ----------------------------------------------------------

module.exports = { server_homepage, shipper_registration, shipper_login, vendor_registration, vendor_login };
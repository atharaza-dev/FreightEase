//? requiring dependecnies
const bcrypt = require('bcrypt');

//* REQUIRING Models
const ShipperAccounts = require('../models/shipper-model')
const VendorAccounts = require('../models/vendor-model')
const AdminAccounts = require('../models/admin-model');


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
        const { name, email, mobile, password } = req.body;

        const shipperExists = await ShipperAccounts.findOne({ email });

        if (!shipperExists) {
            const ShipperAccCreated = await ShipperAccounts.create({ name, email, mobile, password });
            const token = await ShipperAccCreated.generateToken()
            res.status(201).json({
                msg: "SHIPPER Registration Successfull",
                token: token,
                userId: ShipperAccCreated._id.toString(),
            });
            console.log({ Shipper: ShipperAccCreated });
        } else {
            return res.status(409).json({ msg: "Email already exists!" });
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

        const checkShipperExist = await ShipperAccounts.findOne({ email, isShipper: true });
        if (!checkShipperExist) {
            return res.status(404).json({ msg: "Shipper doesn't exist, Create One!" });
        }

        const shipperFound = await bcrypt.compare(password, checkShipperExist.password);
        if (shipperFound) {
            res.status(201).json({
                isShipper: checkShipperExist.isShipper,
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
        const { name, cnic, phone, regNum, email, password } = req.body;

        const VendorExist = await VendorAccounts.findOne({ email });
        if (VendorExist) {
            return res.status(400).json({ msg: "Email already exists!" });
        } else {
            const vendorAccCreated = await VendorAccounts.create({ name, cnic, phone, regNum, email, password });
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


// * ----------------------------------------------------------
//! Sending the User Data of currently logged in
const user = async (req, res) => {
    try {
        const userData = req.user;
        return res.status(200).json({ success: userData });
    } catch (error) {
        console.log('Error from route', error);
    }
}
// * ----------------------------------------------------------

// * ----------------------------------------------------------
//? un comment the register route if you want to create a admin account and add it in modules and create a new route.
//! ADMIN REGISTRATION CODE LOGIC
const adminReg = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const AdminAccExists = await AdminAccounts.findOne({ email });
        if (AdminAccExists) {
            return res.status(400).json({ msg: "ADMIN already exists!" });
        } else {
            const AdminaccCreated = await AdminAccounts.create({ name, email, password });
            const token = await AdminaccCreated.generateToken(); // Assuming this is an async operation

            // Sending the response after all async operations are completed
            res.status(201).json({
                msg: "ADMIN Registration Successful",
                name: name,
                token: token,
                userId: AdminaccCreated._id.toString(),
            });
            console.log({ ADMIN: AdminaccCreated });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Internal Server Error" });
    }
}
// * ----------------------------------------------------------

// * ----------------------------------------------------------
//! ADMIN LOGIN CODE LOGIC
const admin_login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const checkAdminExists = await AdminAccounts.findOne({ email, isAdmin: true });
        if (!checkAdminExists) {
            return res.status(403).json({ msg: "You are not an ADMIN!" });
        }
        const adminFound = await bcrypt.compare(password, checkAdminExists.password);
        if (adminFound) {
            res.status(201).json({
                msg: "ADMIN Logged In Successfully!",
                isAdmin: checkAdminExists.isAdmin,
                token: await checkAdminExists.generateToken(),
                userId: checkAdminExists._id.toString(),
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

module.exports = {
    server_homepage,
    shipper_registration,
    shipper_login,
    vendor_registration,
    vendor_login,
    user,
    admin_login,
    adminReg
}
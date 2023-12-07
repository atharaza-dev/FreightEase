// requiring the dependencies
const express = require('express');
const router = express.Router();
var cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');


// main routes of the servers
router.get('/routes', (req, res) => {
    res.send('Hello from the Server ROUTER');
})

// for the avoidance jsons errors
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));
router.use(cors());

// for bycrypting hashing password
const saltRounds = 8;

// *****************************Customer Registration Code****************************************
//  creating "shipper-accounts" model & using 'POST' to get data from frontend (user)
const ShipperAccount = require('../models/shipper-accounts');

router.post('/shipper-registration', async (req, res) => {
    const { isShipper, name, email, password } = req.body;
    if (!isShipper || !name || !email || !password) {
        return res.status(204).json({ error: "Enter All details!" });
    }
    try {
        const shipperAccExists = await ShipperAccount.findOne({ email: email });
        if (shipperAccExists) {
            return res.status(403).json({ error: `This ${email} already associated with an account. Try another!` });
        }

        // Hash the password before storing it
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const newShipperAccount = new ShipperAccount({ isShipper, name, email, password: hashedPassword });
        const shipperAccRegistered = await newShipperAccount.save();

        if (shipperAccRegistered) {
            res.status(201).json({ created: "Shipper Registered Sucessfully!", token: await shipperAccRegistered.generateToken(), userID: shipperAccRegistered._id.toString() });
            console.log({ shipper: req.body });
        } else {
            res.status(500).json({ error: "Shipper Registration Failed!" });
        }

    } catch (error) {
        console.log(error)
        res.status(500).json({ error: `Internal Server Error :- ${error}` });
    }
});
// ******************************************************************************************



// *****************************Vendor sign in Code****************************************
router.post('/shipper-login', async (req, res) => {
    const { role, email, password } = req.body;
    if (!role || !email || !password) {
        return res.status(204).json({ error: "Enter All details!" });
    }
    try {
        const shipperAccExists = await ShipperAccount.findOne({ email: email });
        if (shipperAccExists) {
            const isPassValid = await bcrypt.compare(password, shipperAccExists.password);
            if (isPassValid) {
                res.status(201).json({ successfull: "Shipper Logged In Sucessfully!" });
                console.log({ shipper: req.body });
            } else {
                res.status(500).json({ error: "Shipper Logged In Failed! Check your password again!" });
            }
        } else {
            res.status(404).json({ err: `Account with this ${email} email does not exist in the database!` });
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: `Internal Server Error :- ${error}` });
    }
});
// ******************************************************************************************




// *****************************Vendor Registration Code****************************************
//  creating "vendor-accounts" model & using 'POST' to get data from frontend (user
const VendorAccount = require('../models/vendor-accounts');
router.post('/vendor-registration', async (req, res) => {
    const { isVendor, company_name, owner_name, cnic, phone, registration_number, password } = req.body;
    if (!isVendor || !company_name || !owner_name || !cnic || !phone || !registration_number || !password) {
        return res.status(204).json({ error: "Enter All details!" });
    }
    try {
        const vendorAccExists = await VendorAccount.findOne({ registration_number: registration_number });
        if (vendorAccExists) {
            return res.status(403).json({ error: `This ${registration_number} already associated with an account. Try another!` });
        }

        // Hash the password before storing it
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const newVendorAccount = new VendorAccount({ isVendor, company_name, owner_name, cnic, phone, registration_number, password: hashedPassword });
        const vendorAccRegistered = await newVendorAccount.save();

        if (vendorAccRegistered) {
            res.status(201).json({ created: "Vendor Registered Sucessfully!", token: await vendorAccRegistered.generateToken(), userID: vendorAccRegistered._id.toString() });
            console.log({ vendor: req.body });
        } else {
            res.status(500).json({ error: "Vendor Registration Failed!" });
        }

    } catch (error) {
        console.log(error)
        res.status(500).json({ error: `Internal Server Error :- ${error}` });
    }
});
// ******************************************************************************************



// *****************************Vendor sign in Code****************************************
router.post('/vendor-login', async (req, res) => {
    const { role, registration_number, password } = req.body;
    if (!role || !registration_number || !password) {
        return res.status(204).json({ error: "Enter All details!" });
    }
    try {
        const vendorAccExists = await VendorAccount.findOne({ registration_number: registration_number });
        if (vendorAccExists) {
            const isPassValid = await bcrypt.compare(password, vendorAccExists.password);
            if (isPassValid) {
                res.status(201).json({ successfull: "Vendor Logged In Sucessfully!" });
                console.log({ vendor: req.body });
            } else {
                res.status(500).json({ error: "Vendor Logged In Failed! Check your password again!" });
            }
        } else {
            res.status(404).json({ err: `Account with this ${registration_number} registration number does not exist in the database!` });
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: `Internal Server Error :- ${error}` });
    }
});
// ******************************************************************************************




// exporting the authentication file module
module.exports = router;
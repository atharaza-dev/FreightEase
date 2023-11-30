const express = require('express');

const CustomerAcc = require('../models/customerAccSchema');
const VendorAcc = require('../models/vendorAccSchema');

const router = express.Router();
require('../db/conn');

var cors = require('cors')
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));

// Add a middleware to parse JSON
router.use(bodyParser.json());
router.use(cors());

const middleware = (req, res, next) => {
    console.log('Middlware is Running');
    next();

}
router.get('/', (req, res) => {
    res.send('Hello Server from Router');
})

// Customer Registration Code
const bcrypt = require('bcrypt');
const saltRounds = 10;

// Customer Registration Authentication Code
router.post('/CustomerReg', middleware, async (req, res) => {
    const { fullName, email, password } = req.body;
    if (!fullName || !email || !password) {
        return res.status(204).json({ err: "Enter All details!" });
    }

    try {
        const userExists = await CustomerAcc.findOne({ email: email });
        if (userExists) {
            return res.status(209).json({ err: `Email ${email} already exists in the database!` });
        }

        // Hash the password before storing it
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const newCustomerAcc = new CustomerAcc({ fullName, email, password: hashedPassword });
        const customerRegistered = await newCustomerAcc.save();

        if (customerRegistered) {
            res.status(201).json({ msg: "Registration Successful!" });
            console.log({ acc: req.body });
        } else {
            res.status(500).json({ msg: "Registration Error!" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ err: "Internal server error" });
    }
});

// Customer Login Authentication Code
router.post('/CustomerLogin', async (req, res) => {
    const { email, password } = req.body;

    try {
        const userExists = await CustomerAcc.findOne({ email: email });
        if (userExists) {
            const isPassValid = await bcrypt.compare(password, userExists.password);
            if (isPassValid) {
                res.status(201).json({ msg: "Successfully Logged In!" });
                console.log({ user: user });
            } else {
                res.status(202  ).json({ err: "Invalid password" });
            }
        } else {
            res.status(404).json({ err: `Account with this ${email} email does not exist in the database!` });
        }
    } catch (error) {
        console.log(error);
    }

})

// Vendor Registration Authentication
router.post('/VendorReg', middleware, async (req, res) => {
    const { companyName, ownerName, ownerCNIC, NTN, cellNum, email, password } = req.body;
    if (!companyName || !ownerName || !ownerCNIC || !NTN || !cellNum || !email || !password) {
        return res.status(201).json({ err: "Enter All details!" });
    }

    try {
        const userExists = await VendorAcc.findOne({ NTN: NTN });
        if (userExists) {
            return res.status(202).json({ err: `NTN Registration ${NTN} already exists in database!` });
        }
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const newVendorAcc = new VendorAcc({ companyName, ownerName, ownerCNIC, NTN, cellNum, email, password: hashedPassword });
        const VendorRegistered = await newVendorAcc.save();
        if (VendorRegistered) {
            res.status(203).json({ msg: "Registration Successfull!" })
            console.log({ acc: req.body });
        } else {
            res.status(500).json({ msg: "Registration Error!" })
        }
    } catch (error) {
        console.log(error);
    }

})

// Vendor Login Authentication Code
router.post('/VendorLogin', middleware, async (req, res) => {
    const { NTN, password } = req.body;

    try {
        const userExists = await VendorAcc.findOne({ NTN: NTN });
        if (userExists) {
            const isPassValid = await bcrypt.compare(password, userExists.password);
            if (isPassValid) {
                res.status(201).json({ msg: "Successfully Logged In!" });
                console.log({ NTN: NTN });
            } else {
                res.status(202).json({ err: "Invalid password" });
            }
        } else {
            res.status(404).json({ err: `Account with this ${NTN} NTN does not exist in the database!` });
        }
    } catch (error) {
        console.log(error);
    }

})



module.exports = router;
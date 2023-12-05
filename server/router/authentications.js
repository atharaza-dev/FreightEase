// requiring the dependencies
const express = require('express');
const router = express.Router();
var cors = require('cors')
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
const saltRounds = 10;

// *****************************Customer Registration Code****************************************
//  creating "shipper-accounts" model & using 'POST' to get data from frontend (user)

const ShipperAccount = require('../models/shipper-accounts');
router.post('/shipper-registration', async (req, res) => {
    const { role, name, email, password } = req.body;
    if (!role || !name || !email || !password) {
        return res.status(204).json({ error: "Enter All details!" });
    }
    try {
        const shipperAccExists = await ShipperAccount.findOne({ email: email });
        if (shipperAccExists) {
            return res.status(403).json({ error: `This ${email} already associated with an account. Try another!` });
        }

        // Hash the password before storing it
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const newShipperAccount = new ShipperAccount({ role, name, email, password: hashedPassword });
        const shipperAccRegistered = await newShipperAccount.save();

        if (shipperAccRegistered) {
            res.status(201).json({ created: "Shipper Registered Sucessfully!" });
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






// exporting the authentication file module
module.exports = router;
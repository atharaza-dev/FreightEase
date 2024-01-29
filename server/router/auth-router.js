//? REQUIRING DEPENDENCIES
const express = require('express');
const router = express.Router();
const authControllers = require('../controllers/auth-controller')
var bodyParser = require('body-parser');

//? USING DEPENDENCIES
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));


// * ----------------------------------------------------------
//! MAIN SERVER CODE LOGIC
router.route('/').get(authControllers.server_homepage);

// * ----------------------------------------------------------



// * ----------------------------------------------------------
//! SHIPPER REGISTRATION CODE LOGIC
router.route('/shipper-register').post(authControllers.shipper_registration);
// * ----------------------------------------------------------

// * ----------------------------------------------------------
//! SHIPPER LOGIN CODE LOGIC
router.route('/shipper-login').post(authControllers.shipper_login);
// * ----------------------------------------------------------

// * ----------------------------------------------------------
//! VENDOR REGISTRATION CODE LOGIC
router.route('/vendor-register').post(authControllers.vendor_registration);
// * ----------------------------------------------------------

// * ----------------------------------------------------------
//! VENDOR REGISTRATION CODE LOGIC
router.route('/vendor-login').post(authControllers.vendor_login);
// * ----------------------------------------------------------




module.exports = router;
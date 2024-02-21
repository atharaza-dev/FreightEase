//? REQUIRING DEPENDENCIES
const express = require('express');
const router = express.Router();
const authControllers = require('../controllers/auth-controller')
var bodyParser = require('body-parser');
const cors = require('cors');
const verifyMiddleware = require('../middleware/authMiddleware');


//? USING DEPENDENCIES
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.use(cors({
    origin: 'http://localhost:3000',
    methods: "POST,GET,PUT,DELETE,PATCH,HEAD",
    credentials: true,
}));


// * ----------------------------------------------------------
//! MAIN SERVER ROUTE
router.route('/').get(authControllers.server_homepage);

// * ----------------------------------------------------------



// * ----------------------------------------------------------
//! SHIPPER REGISTRATION ROUTE
router.route('/shipper-register').post(authControllers.shipper_registration);
// * ----------------------------------------------------------

// * ----------------------------------------------------------
//! SHIPPER LOGIN ROUTE
router.route('/shipper-login').post(authControllers.shipper_login);
// * ----------------------------------------------------------

// * ----------------------------------------------------------
//! VENDOR REGISTRATION ROUTE
router.route('/vendor-register').post(authControllers.vendor_registration);
// * ----------------------------------------------------------

// * ----------------------------------------------------------
//! VENDOR REGISTRATION ROUTE
router.route('/vendor-login').post(authControllers.vendor_login);
// * ----------------------------------------------------------

// * ----------------------------------------------------------
//! USER VERIFICTAION ROUTE
router.route('/admin').get(verifyMiddleware.adminAuthMiddleware, authControllers.user);
router.route('/shipper').get(verifyMiddleware.shipperAuthMiddlware, authControllers.user);
router.route('/vendor').get(verifyMiddleware.vendorAuthMiddleware, authControllers.user);
// * ----------------------------------------------------------

// * ----------------------------------------------------------
//! ADMIN LOGIN ROUTE
router.route('/admin-login').post(authControllers.admin_login);
// * -------------

module.exports = router;
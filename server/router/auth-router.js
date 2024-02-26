//? REQUIRING DEPENDENCIES
const express = require('express');
const router = express.Router();
var bodyParser = require('body-parser');
const cors = require('cors');
const authControllers = require('../controllers/auth-controller')
const verifyAdminToken = require('../middleware/admin-middleware');
const verifyShipperToken = require('../middleware/shipper-middlware');
const verifyVendorToken = require('../middleware/vendor-middelware');
const shipperInfo = require('../controllers/shipper-info-controller');
const vendorsInfo = require('../controllers/vendors-info-controller');

//? USING DEPENDENCIES
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.use(cors({
    origin: 'http://localhost:5151',
    methods: "POST,GET,PUT,DELETE,PATCH,HEAD",
    credentials: true,
}));


// * ----------------------------------------------------------
//! MAIN SERVER ROUTE
router.route('/').get(authControllers.server_homepage);

// * ----------------------------------------------------------


//! ADMIN Functionality
router.route('/admin-login').post(authControllers.admin_login);
// * ----------------------------------------------------------

//! SHIPPER REGISTRATION ROUTE
router.route('/shipper-register').post(authControllers.shipper_registration);
// * ----------------------------------------------------------


//! SHIPPER LOGIN ROUTE
router.route('/shipper-login').post(authControllers.shipper_login);
// * ----------------------------------------------------------


//! VENDOR REGISTRATION ROUTE
router.route('/vendor-register').post(authControllers.vendor_registration);
// * ----------------------------------------------------------


//! VENDOR REGISTRATION ROUTE
router.route('/vendor-login').post(authControllers.vendor_login);
// * ----------------------------------------------------------


//! USER VERIFICTAION ROUTE
router.post('/admin-verification', verifyAdminToken, (req, res) => {
    res.json({ message: 'Access granted to protected route.', user: req.user });
});

router.post('/shipper-verification', verifyShipperToken, (req, res) => {
    res.json({ message: 'Access granted to protected route.', user: req.user });
});

router.post('/vendor-verification', verifyVendorToken, (req, res) => {
    res.json({ message: 'Access granted to protected route.', user: req.user });
});
// * ----------------------------------------------------------

//! Getting Managing Shipper Account 
router.route('/shippers-info').get(shipperInfo.shipperinfo);
router.route('/del-shippers-info/:id').delete(shipperInfo.deleteShipperInfo);
router.route('/find-shippers-info/:id').get(shipperInfo.findShipper);
router.route('/update-shippers-info/:id').put(shipperInfo.updateShipper);

//! Getting Vendor Account Information
router.route('/vendors-info').get(vendorsInfo.vendorInfo);
router.route('/del-vendors-info/:id').delete(vendorsInfo.deleteVendorInfo);
router.route('/find-vendors-info/:id').get(vendorsInfo.findVendor);
router.route('/update-vendors-info/:id').put(vendorsInfo.updateVendor);
// * ----------------------------------------------------------

module.exports = router;
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
const quoteManagement = require('../controllers/quote-controller');
const adminInfo = require('../controllers/admin-controller');

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


//! USER VERIFICTAION ROUTE
router.post('/admin-verification', verifyAdminToken, (req, res) => {
    res.json({ message: 'Access granted to protected route - Token Verified', user: req.user });
});

router.post('/shipper-verification', verifyShipperToken, (req, res) => {
    res.json({ message: 'Access granted to protected route.', user: req.user });
});

router.post('/vendor-verification', verifyVendorToken, (req, res) => {
    res.json({ message: 'Access granted to protected route.', user: req.user });
});

//! Managing ADMIN Account Information
router.route('/admin-reg').post(authControllers.adminReg);
router.route('/admin-login').post(authControllers.admin_login);
router.route('/admin-info').get(adminInfo.getAdminInfo);

//! Managing Shipper Account 
router.route('/shipper-register').post(authControllers.shipper_registration);
router.route('/shipper-login').post(authControllers.shipper_login);
router.route('/shippers-info').get(shipperInfo.shipperinfo);
router.route('/del-shippers-info/:id').delete(shipperInfo.deleteShipperInfo);
router.route('/find-shippers-info/:id').get(shipperInfo.findShipper);
router.route('/update-shippers-info/:id').put(shipperInfo.updateShipper);

//! Managing Vendor Account Information
router.route('/vendor-register').post(authControllers.vendor_registration);
router.route('/vendor-login').post(authControllers.vendor_login);
router.route('/vendors-info').get(vendorsInfo.vendorInfo);
router.route('/del-vendors-info/:id').delete(vendorsInfo.deleteVendorInfo);
router.route('/find-vendors-info/:id').get(vendorsInfo.findVendor);
router.route('/update-vendors-info/:id').put(vendorsInfo.updateVendor);

//! Quote Management
router.route('/manage-quote').post(quoteManagement.quoteGenerator);
router.route('/get-quote-details').get(quoteManagement.getQuoteData);
router.route('/del-quote/:id').delete(quoteManagement.deleteQuote);

//! Managing ADMIN Account Information

// * ----------------------------------------------------------

module.exports = router;
//? REQUIRING DEPENDENCIES
const express = require('express');
const router = express.Router();
var bodyParser = require('body-parser');
const cors = require('cors');
const authControllers = require('../controllers/auth-controller')
const verifyToken = require('../middleware/admin-middleware');


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
router.post('/verification', verifyToken, (req, res) => {
    res.json({ message: 'Access granted to protected route.', user: req.user });
});
// * ----------------------------------------------------------

module.exports = router;
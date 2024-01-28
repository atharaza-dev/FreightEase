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
//! REGISTRATION CODE LOGIC
router.route('/register').post(authControllers.registration);
// * ----------------------------------------------------------




module.exports = router;
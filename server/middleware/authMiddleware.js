//? requiring dependecnies
const jwt = require('jsonwebtoken');
//* REQUIRING Models
const admin = require('../models/admin-model')
const shipper = require('../models/shipper-model')
const vendor = require('../models/vendor-model')


const adminAuthMiddleware = async (req, res, next) => {

    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ error: "Token Not Found, Not an ADMIN" });
    }

    //* only getting the token not space and secret key
    const jwtToken = token.replace("Bearer", "").trim();
    // console.log('token from auth', jwtToken);

    try {
        const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);
        const userData = await admin.findOne({ email: isVerified.email }).select({ password: 0, }); //?select is to avoid getting the data
        console.log(userData);

        req.user = userData;
        req.token = token;
        req.userID = userData._id;

        next();
    } catch (error) {
        return res.status(401).json({ error: "Unauthorized token" });
    }
}


const shipperAuthMiddlware = async (req, res, next) => {

    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ error: "Unauthorized token" });
    }

    //* only getting the token not space and secret key
    const jwtToken = token.replace("Bearer", "").trim();
    // console.log('token from auth', jwtToken);

    try {
        const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);
        const userData = await shipper.findOne({ email: isVerified.email }).select({ password: 0, }); //?select is to avoid getting the data
        console.log(userData);

        req.user = userData;
        req.token = token;
        req.userID = userData._id;

        next();
    } catch (error) {
        return res.status(401).json({ error: "Unauthorized token" });
    }
}


const vendorAuthMiddleware = async (req, res, next) => {

    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ error: "Unauthorized token" });
    }

    //* only getting the token not space and secret key
    const jwtToken = token.replace("Bearer", "").trim();
    // console.log('token from auth', jwtToken);

    try {
        const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);
        const userData = await vendor.findOne({ email: isVerified.email }).select({ password: 0, }); //?select is to avoid getting the data
        console.log(userData);

        req.user = userData;
        req.token = token;
        req.userID = userData._id;

        next();
    } catch (error) {
        return res.status(401).json({ error: "Unauthorized token" });
    }
}

module.exports = { adminAuthMiddleware, shipperAuthMiddlware, vendorAuthMiddleware };
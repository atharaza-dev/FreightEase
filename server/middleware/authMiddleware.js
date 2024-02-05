//? requiring dependecnies
const jwt = require('jsonwebtoken');
//* REQUIRING Models
const User = require('../models/shipper-model')


const authMiddleware = async (req, res, next) => {

    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ error: "he Unauthorized token" });
    }

    //* only getting the token not space and secret key
    const jwtToken = token.replace("Bearer", "").trim();
    // console.log('token from auth', jwtToken);

    try {
        const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);
        const userData = await User.findOne({ email: isVerified.email }).select({ password: 0, }); //?select is to avoid getting the data
        console.log(userData);

        req.user = userData;
        req.token = token;
        req.userID =  userData._id;

        next();
    } catch (error) {
        return res.status(401).json({ error: "Unauthorized token" });
    }
}

module.exports = authMiddleware;
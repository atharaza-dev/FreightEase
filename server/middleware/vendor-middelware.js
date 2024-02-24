const jwt = require('jsonwebtoken');

const verifyVendorTokenMiddleware = (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ error: 'Token is required.' });
    }

    try {
        const jwtToken = token.replace('Bearer ', ''); // Remove 'Bearer ' prefix
        const decoded = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);

        req.user = decoded; // Attach user information to the request object
        next(); // Call the next middleware or route handler
    } catch (error) {
        console.error('Error verifying token:', error);
        return res.status(401).json({ error: 'Token is invalid.' });
    }
};

module.exports = verifyVendorTokenMiddleware;

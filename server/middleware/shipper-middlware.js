const jwt = require('jsonwebtoken');

const verifyShipperTokenMiddleware = (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ error: 'Token is required.' });
    }

    try {
        const jwtToken = token.replace('Bearer ', ''); // Remove 'Bearer ' prefix
        const decoded = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);

        req.user = decoded;
        const { userId, name, email, password, isShipper } = decoded;
        return res.status(200).json({ userId, name, email, password, isShipper });
    } catch (error) {
        console.error('Error verifying token:', error);
        return res.status(401).json({ error: 'Token is invalid.' });
    }
};

module.exports = verifyShipperTokenMiddleware;

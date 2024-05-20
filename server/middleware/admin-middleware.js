const jwt = require('jsonwebtoken');

const verifyAdminTokenMiddleware = (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ error: 'Token is required.' });
    }

    try {
        const jwtToken = token.replace('Bearer ', ''); // Remove 'Bearer ' prefix
        const decoded = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);

        req.user = decoded; // Attach user information to the request object

        // Extracting data from the decoded JWT payload
        const { name, email, password, isAdmin } = decoded;

        return res.status(200).json({ name, email, password, isAdmin });

    } catch (error) {
        console.error('Error verifying token:', error);
        return res.status(401).json({ error: 'Token is invalid.' });
    }
};

module.exports = verifyAdminTokenMiddleware;

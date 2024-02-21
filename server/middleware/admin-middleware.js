const adminVerification = async (req, res, next) => {
    try {
        const adminRole = req.user.isAdmin;
        if (!adminRole) {
            return res.status(403).json({ message: "Access denied, You are not an ADMIN!" });
        }
        console.log({ adminVerified: req.user.isAdmin });
        next();
    } catch (error) {
        next(error);
        console.error(error);
    }
}

module.exports = adminVerification;

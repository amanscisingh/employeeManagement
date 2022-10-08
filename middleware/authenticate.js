const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
    try {
        
        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, 'thesecretvalue');
        req.user = decoded;
        next();

    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            res.status(401).json({
                status: false,
                message: 'Token expired'
            })
        }

        res.json({ status: false, message: 'Authorization' });
    }
}

module.exports = authenticate;
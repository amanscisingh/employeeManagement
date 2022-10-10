const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
    try {
        console.log(req.headers)
        const token = req.headers.authorization.split(' ')[1];
        console.log(2)
        const decoded = jwt.verify(token, 'thesecretvalue');
        console.log(3)
        req.user = decoded;
        console.log("user authenticated successfully")
        next();

    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            const refreshToken = req.headers.authorization.split(' ')[2];
            jwt.verify(refreshToken, 'thesecretrefreshtoken', (err, decoded) => {
                if (err) {
                    res.status(401).json({
                        status: false,
                        err, 
                        message: 'Invalid refresh token'
                    });
                } else {
                    const token = jwt.sign({
                        email: decoded.email,
                        userId: decoded.userId
                    }, 'thesecretvalue', { expiresIn: '1h' });
                    req.body.refreshToken = token;
                    next();
                }
            })
        } else {
            res.json({ status: false, message: 'Authorization Error', error });
        }
    }
}

module.exports = authenticate;
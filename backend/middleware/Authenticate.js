import HTTP_STATUS from "../utils/respones.js";
import jwt from 'jsonwebtoken';

const authenticateToken = (req , res , next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];
    if(token == null) {
        return res.sendStatus(HTTP_STATUS.UNAUTHORIZED);
    }
    jwt.verify(token , process.env.ACCESS_TOKEN_SECRET , (err , user) => {
        if(err) {
            return res.sendStatus(HTTP_STATUS.FORBIDDEN);
        }
        req.user = user;
        next();
    })
}

export default authenticateToken
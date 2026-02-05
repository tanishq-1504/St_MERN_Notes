import jwt from "jsonwebtoken";

const verifyAccessToken = (req, res, next) => {
    try {
        const authHeader = req.headers['authorization'];
        
        const token = authHeader && authHeader.split(' ')[1]
        
        if(!token){
            throw new Error("Access denied, No token provided.")
        }

        const decodedDataFromAccessToken =  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)

        req.user = decodedDataFromAccessToken;

        next();
    } catch (error) {
        res.status(401).json({
            error: true,
            message: error.message
        })
        
    }
}

export {verifyAccessToken}
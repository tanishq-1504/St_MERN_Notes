import jwt from "jsonwebtoken";

const generateAccessToken = (userId) => {
    return jwt.sign(
        {userId},
        process.env.ACCESS_TOKENS_SECRET,
        {expiresIn: process.env.ACCESS_TOKENS_SECRET}
    )
}

const generateRefreshToken = (userId) => {
    return jwt.sign(
        { userId },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: process.env.REFRESH_TOKEN_EXPIRY}
    )
}

export {generateAccessToken, generateRefreshToken} 
const jwt = require('jsonwebtoken');

export const generateToken = (id) =>{
    return jwt.sign((id),process.env.JWT_KEY,{
        expiresIn:'15d'
    })
}
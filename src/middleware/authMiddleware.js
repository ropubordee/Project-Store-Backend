const jwt = require("jsonwebtoken");
require('dotenv').config();
const checkSingIn = (req,res,next)=>{
    try {
         const secret = process.env.TOKEN_SECRET;
    const token = req.headers["authorization"];

    if(!token){
        return res.status(401).send({ error: "No token provided." });
    }
   const result = jwt.verify(token, secret);
   if(result != undefined) {
    next()
   }else{
    return res.status(401).send({error : "Invalid token."})
   }
    } catch (error) {
        res.status(500).send({error : error.message})
    }
}

module.exports = checkSingIn
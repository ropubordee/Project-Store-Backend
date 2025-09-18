const jwt = require("jsonwebtoken");

const createToken = (payload) => {
  const secret = process.env.TOKEN_SECRET;
  const token = jwt.sign(payload, secret, { expiresIn: "1d" });
  return token;
};

const verifyToken = (token) => {
  const secret = process.env.TOKEN_SECRET;
  const result = jwt.verify(token, secret);
  return result;
};

module.exports = {
  createToken,
  verifyToken,
};

const authService = require("../services/authservice");

const createAuthToken = (req, res) => {
  try {
    const payload = {
      id: 100,
      name: "Yuro",
      level: "admin",
    };

    const token = authService.createToken(payload);
    res.send({ token: token });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const verifyAuthToken = (req, res) => {
  try {
    const token = req.headers["authorization"];
    const result = authService.verifyToken(token);
    res.send({ result: result });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = {
  createAuthToken,
  verifyAuthToken,
};

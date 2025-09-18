const notandisNullservice = require("../services/not-isNullservice");

const notNull = async (req, res) => {
  try {
    const data = await notandisNullservice.notNull();
    res.send({ result: data });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const isNull = async (req, res) => {
  try {
    const data = await notandisNullservice.isNull();
    res.send({ result: data });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = {
  notNull,
  isNull
};

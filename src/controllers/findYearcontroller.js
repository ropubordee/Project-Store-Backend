const findYearservice = require("../services/findYearservice");

const findYearMonthDay = async (req, res) => {
  try {
    const data = await findYearservice.findYearMonthDay();
    res.send({ result: data });
  } catch (error) {
    res.status(500).send({ error: message });
  }
};

const findYearMonth = async (req, res) => {
  try {
    const data = await findYearservice.findYearMonth();
    res.send({ result: data });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = {
  findYearMonthDay,
  findYearMonth,
};

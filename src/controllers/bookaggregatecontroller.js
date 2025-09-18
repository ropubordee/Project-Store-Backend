const bookaggregateservice = require("../services/bookaggregateservice");

const booksum = async (req, res) => {
  try {
    const data = await bookaggregateservice.sum();
    res.send({ result: data });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};
const bookmax = async (req, res) => {
  try {
    const data = await bookaggregateservice.max();
    res.send({ result: data });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};
const bookmin = async (req, res) => {
  try {
    const data = await bookaggregateservice.min();
    res.send({ result: data });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};
const bookavg = async (req, res) => {
  try {
    const data = await bookaggregateservice.avg();
    res.send({ result: data });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = {
  booksum,
  bookmax,
  bookmin,
  bookavg,
};

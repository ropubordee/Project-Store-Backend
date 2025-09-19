const relationservice = require("../services/relationservice");

const oneToOne = async (req, res) => {
  try {
    const data = await relationservice.oneToOne();

    res.send({ result: data });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const oneToMany = async (req, res) => {
  try {
    const data = await relationservice.oneToMany();

    res.send({ result: data });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};
const multiModel = async (req, res) => {
  try {
    const data = await relationservice.multiModel();

    res.send({ result: data });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = {
  oneToOne,
  oneToMany,
  multiModel,
};

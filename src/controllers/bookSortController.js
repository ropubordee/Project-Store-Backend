const { dash } = require("pdfkit");
const booksortservice = require("../services/booksortservice");

const Orderby = async (req, res) => {
  try {
    const data = await booksortservice.OrderBy();
    res.send({ result: data });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const Ordergt = async (req, res) => {
  try {
    const data = await booksortservice.Ordergt();
    res.send({ result: data });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const Orderlt = async (req, res) => {
  try {
    const data = await booksortservice.Orderlt();
    res.send({ result: data });
  } catch (error) {
    res.status(500).send({ error: message });
  }
};

const Orderbetwenn = async (req, res) => {
  try {
    const data = await booksortservice.OrderBetwenn();
    res.send({ result: data });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = {
  Orderby,
  Ordergt,
  Orderlt,
  Orderbetwenn,
};

const searchservice = require("../services/searchservice");

const BookSearch = async (req, res) => {
  try {
    const { keyword } = req.body;
    const data = await searchservice.BookSearch(keyword);
    res.send({ result: data });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const BookStartstWith = async (req, res) => {
  try {
    const { keyword } = req.body;
    const data = await searchservice.BookStartsWith(keyword);
    res.send({ result: data });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const BookEndsWith = async (req, res) => {
  try {
    const { keyword } = req.body;
    const data = await searchservice.BookEndsWith(keyword);
    res.send({ result: data });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = {
  BookSearch,
  BookStartstWith,
  BookEndsWith,
};

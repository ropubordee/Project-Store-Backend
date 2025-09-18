const prisma = require("../config/prisma");
const bookService = require("../services/bookservice");

const getBookList = async (req, res) => {
  try {
    const data = await bookService.getBookList();
    res.send({ result: data });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};
const createBook = async (req, res) => {
  try {
    const data = req.body;
    const result = await bookService.createBook(data);
    res.send({ result: result });
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
};

const createBookManual = async (req, res) => {
  try {
    const result = await bookService.createBookManual();
    res.send({ result: result });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const updateBook = await bookService.UpdateBook(id, updateData);
    res.send({ result: updateBook });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const removeBook = async (req, res) => {
  try {
    const { bookId } = req.params;
    const removeBook = await bookService.removeBook(bookId);

    res.send({ message: "Book deleted successfully", result: removeBook });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = {
  getBookList,
  createBook,
  createBookManual,
  updateBook,
  removeBook,
};

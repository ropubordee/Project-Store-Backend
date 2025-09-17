const prisma = require("../config/prisma");

const BookSearch = async (req, res) => {
  try {
    const { keyword } = req.body.keyword;
    const data = await prisma.book.findMany({
      where: {
        name: {
          contains: keyword,
        },
      },
    });
    res.send({ result: data });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = {
  BookSearch,
};

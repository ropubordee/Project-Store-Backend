const prisma = require("../config/prisma");

const BookSearch = async (searchKeyword) => {
  try {
    const data = await prisma.book.findMany({
      where: {
        name: {
          contains: searchKeyword,
        },
      },
    });
    return data;
  } catch (error) {
    throw new Error("Faile to Search");
  }
};

const BookStartsWith = async (searchKeyword) => {
  try {
    const data = await prisma.book.findMany({
      where: {
        name: {
          startsWith: searchKeyword,
        },
      },
    });
    return data;
  } catch (error) {
    throw new Error("Faile To SearchStartsWith");
  }
};

const BookEndsWith = async (searchKeyword) => {
  try {
    const data = await prisma.book.findMany({
      where: {
        name: {
          endsWith: searchKeyword,
        },
      },
    });
    return data;
  } catch (error) {
    throw new Error("Faile to SearchEndwWith");
  }
};

module.exports = {
  BookSearch,
  BookStartsWith,
  BookEndsWith
};

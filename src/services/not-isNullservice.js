const prisma = require("../config/prisma");

const notNull = async () => {
  try {
    const data = await prisma.book.findMany({
      where: {
        detail: {
          not: null,
        },
      },
    });
    return data;
  } catch (error) {
    throw new Error("Faile NotNull");
  }
};

const isNull = async () => {
  try {
    const data = await prisma.book.findMany({
      where: {
        detail: null,
      },
    });
    return data;
  } catch (error) {
    throw new Error("Faile isNull");
  }
};

module.exports = {
  notNull,
  isNull,
};

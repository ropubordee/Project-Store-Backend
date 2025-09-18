const prisma = require("../config/prisma");

const findYearMonthDay = async () => {
  try {
    const data = await prisma.book.findMany({
      where: {
        registerDate: new Date("2024-05-08"),
      },
    });
    return data;
  } catch (error) {
    throw new Error("Faile FindYearMonth Day");
  }
};

const findYearMonth = async () => {
  try {
    const data = await prisma.book.findMany({
      where: {
        registerDate: {
          gte: new Date("2024-05-01"),
          lte: new Date("2024-05-31"),
        },
      },
    });

    return data;
  } catch (error) {
    throw new Error("Faile FindYearMonth");
  }
};

module.exports = {
  findYearMonthDay,
  findYearMonth,
};

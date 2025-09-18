const prisma = require("../config/prisma");

const sum = async () => {
  try {
    const data = await prisma.book.aggregate({
      _sum: {
        price: true,
      },
    });
    return data;
  } catch (error) {
    throw new Error("Faile sum");
  }
};
const max = async () => {
  try {
    const data = await prisma.book.aggregate({
      _max: {
        price: true,
      },
    });
    return data;
  } catch (error) {
    throw new Error("Faile max");
  }
};
const min = async () => {
  try {
    const data = await prisma.book.aggregate({
      _min: {
        price: true,
      },
    });
    return data;
  } catch (error) {
    throw new Error("Faile min");
  }
};
const avg = async () => {
  try {
    const data = await prisma.book.aggregate({
      _avg: {
        price: true,
      },
    });
    return data;
  } catch (error) {
    throw new Error("Faile avg");
  }
};

module.exports = {
  sum,
  max,
  avg,
  min,
};

const prisma = require("../config/prisma");
const OrderBy = async () => {
  try {
    const data = await prisma.book.findMany({
      orderBy: {
        price: "desc",
      },
    });
    return data;
  } catch (error) {
    throw new Error("Faile OrderBy");
  }
};

const Ordergt = async () => {
  try {
    const data = await prisma.book.findMany({
      where: {
        price: {
          gt: 900, // >900
        },
      },
    });

    return data;
  } catch (error) {
    throw new Error("Faile Ordergt");
  }
};

const Orderlt = async () => {
  try {
    const data = await prisma.book.findMany({
      where: {
        price: {
          lt: 1000,
        },
      },
    });
    return data;
  } catch (error) {
    throw new Error("Faile Order it");
  }
};

const OrderBetwenn = async () => {
  try {
    const data = await prisma.book.findMany({
      where: {
        price: {
          lte: 1500, // <=1500
          gte: 900, // >=900
        },
      },
    });

    return data
  } catch (error) {
    throw new Error("Faile OrderBetwenn");
  }
};

module.exports = {
  OrderBy,
  Orderlt,
  Ordergt,
  OrderBetwenn
};

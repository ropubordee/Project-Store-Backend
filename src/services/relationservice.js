const prisma = require("../config/prisma");

const oneToOne = async () => {
  try {
    const data = await prisma.orderDetail.findMany({
      include: {
        book: true,
      },
    });
    return data;
  } catch (error) {
    throw new Error("Faile oneToOne");
  }
};

const oneToMany = async () => {
  try {
    const data = await prisma.book.findMany({
      include: {
        OrderDetail: true,
      },
    });
    return data;
  } catch (error) {
    throw new Error("Faile oneToMany");
  }
};

const multiModel = async () => {
  try {
    const data = await prisma.customer.findMany({
      include: {
        Order: {
          include: {
            OrderDetail: true,
          },
        },
      },
    });

    return data;
  } catch (error) {
    throw new Error("Faile multiModel");
  }
};

module.exports = {
  oneToOne,
  oneToMany,
  multiModel,
};

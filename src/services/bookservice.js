const prisma = require("../config/prisma");

const getBookList = async () => {
  try {
    const data = await prisma.book.findMany();

    return data;
  } catch (e) {
    throw new Error("Failed to fetch books");
  }
};

const createBook = async (data) => {
  try {
    const result = await prisma.book.create({
      data: data,
    });
    return result;
  } catch (e) {
    throw new Error("createBook FIle");
  }
};

const createBookManual = async () => {
  try {
    const result = await prisma.book.create({
      data: {
        isbn: "1004",
        name: "Flutter",
        price: 850,
      },
    });
    return result;
  } catch (error) {
    throw new Error("CreatBookManual fetch");
  }
};

const UpdateBook = async (bookId, updateData) => {
  try {
    const data = await prisma.book.update({
      data: updateData,
      where: {
        id: parseInt(bookId),
      },
    });

    return data;
  } catch (error) {
    throw new Error("Failed to update book.");
  }
};

const removeBook = async (bookId)=>{
    try {
    const data = await prisma.book.delete({
        where : {
            id : parseInt(bookId)
        }
    })
    return data
    } catch (error) {
    throw new Error('Failed to remove')
    }
}

module.exports = {
  getBookList,
  createBook,
  createBookManual,
  UpdateBook,
  removeBook,
};

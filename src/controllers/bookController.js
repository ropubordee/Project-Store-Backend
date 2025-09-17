const prisma = require("../config/prisma");

const getBookList = async (req, res) => {
  try {
    const data = await prisma.book.findMany();

    res.send({ result: data });
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
};

const createBook = async (req, res) => {
  try {
    const data = req.body;
    const result = await prisma.book.create({
      data: data,
    });
    res.send({ result: result });
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
};

const createBookManual = async (req, res) => {
  try {
    const result = await prisma.book.create({
      data: {
        isbn: "1004",
        name: "Flutter",
        price: 850,
      },
    });
    res.send({ result: result });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.book.update({
        data : {
            isbn: "10022",
        name: "test update",
        price: 900,
        },
        where : {
            id : parseInt(id)
        }
    })
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const removeBook = async (req,res)=>{
   try {
     const {id} = req.params
     await prisma.book.delete({
        where :{
            id : parseInt(id)
        }
     })

     res.send({ message : 'success'})
   } catch (error) {
    res.status(500).send({error : error.message})
   }
}

module.exports = {
  getBookList,
  createBook,
  createBookManual,
  updateBook,
  removeBook,
};

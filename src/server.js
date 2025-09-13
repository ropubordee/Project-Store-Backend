const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const { PrismaClient } = require("@prisma/client");
const { error } = require("console");
const jwt = require("jsonwebtoken");
const prisma = new PrismaClient();

const app = express();
const port = process.env.PORT;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const checkSingIn = (req, res, next) => {
  try {
    const secret = process.env.TOKEN_SECRET;
    const token = req.headers["authorization"];
    const result = jwt.verify(token, secret);

    if (result != undefined) {
      next();
    }
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
};

app.get("/user/info", checkSingIn, (req, res) => {
  try {
    res.send("Hello back office user info");
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
});

app.get("/", (req, res) => {
  res.send("Hello Word");
});

app.get("/hello/:name", (req, res) => {
  res.send("hello" + req.params.name);
});

app.get("/h1/:name/:age", (req, res) => {
  const name = req.params.name;
  const age = req.params.age;
  res.send(`name ${name} age ${age}`);
});

app.post("/hello", (req, res) => {
  res.send(req.body);
});

app.put("/myput", (req, res) => {
  res.send(req.body);
});

app.put("/updateCustomer/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const data = req.body;

  res.send({ id: id, data: data });
});

app.delete("/myDelete/:id", (req, res) => {
  res.send(`id = ${req.params.id}`);
});

app.get("/book/list", async (req, res) => {
  const data = await prisma.book.findMany();
  res.send({ data: data });
});

app.post("/book/create", async (req, res) => {
  const data = req.body;
  const result = await prisma.book.create({
    data: data,
  });

  res.send({ result: result });
});

app.post("/book/createManual", async (req, res) => {
  const result = await prisma.book.create({
    data: {
      isbn: "1004",
      name: "Flutter",
      price: 850,
    },
  });
  res.send({ result: result });
});

app.put("/book/update/:id", async (req, res) => {
  try {
    await prisma.book.update({
      data: {
        isbn: "10022",
        name: "test update",
        price: 900,
      },
      where: {
        id: parseInt(req.params.id),
      },
    });
    res.send({ message: "success" });
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
});

app.delete("/book/remove/:id", async (req, res) => {
  try {
    await prisma.book.delete({
      where: {
        id: parseInt(req.params.id),
      },
    });
    res.send({ message: "success" });
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
});

app.post("/book/search", async (req, res) => {
  try {
    const keyword = req.body.keyword;
    const data = await prisma.book.findMany({
      where: {
        name: {
          contains: keyword,
        },
      },
    });
    res.send({ result: data });
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
});

app.post("/book/startstWith", async (req, res) => {
  try {
    const keyword = req.body.keyword;
    const data = await prisma.book.findMany({
      where: {
        name: {
          startsWith: keyword,
        },
      },
    });

    res.send({ result: data });
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
});

app.post("/book/endsWith", async (req, res) => {
  try {
    const keyword = req.body.keyword;
    const data = await prisma.book.findMany({
      where: {
        name: {
          endsWith: keyword,
        },
      },
    });

    res.send({ result: data });
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
});

app.get("/book/orderBy", async (req, res) => {
  try {
    const data = await prisma.book.findMany({
      orderBy: {
        price: "desc",
      },
    });
    res.send({ result: data });
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
});

app.get("/book/gt", async (req, res) => {
  try {
    const data = await prisma.book.findMany({
      where: {
        price: {
          gt: 900, // >900
        },
      },
    });
    res.send({ result: data });
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
});

app.get("/book/lt", async (req, res) => {
  try {
    const data = await prisma.book.findMany({
      where: {
        price: {
          lt: 1000, // >1000
        },
      },
    });
    res.send({ result: data });
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
});

app.get("/book/notNull", async (req, res) => {
  try {
    const data = await prisma.book.findMany({
      where: {
        detail: {
          not: null,
        },
      },
    });

    res.send({ result: data });
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
});

app.get("/book/isNull", async (req, res) => {
  try {
    const data = await prisma.book.findMany({
      where: {
        detail: null,
      },
    });

    res.send({ result: data });
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
});

app.get("/book/betwenn", async (req, res) => {
  try {
    const data = await prisma.book.findMany({
      where: {
        price: {
          lte: 1500, // <=1500
          gte: 900, // >=900
        },
      },
    });

    res.send({ result: data });
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
});

app.get("/book/sum", async (req, res) => {
  try {
    const data = await prisma.book.aggregate({
      _sum: {
        price: true,
      },
    });
    res.send({ result: data });
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
});
app.get("/book/max", async (req, res) => {
  try {
    const data = await prisma.book.aggregate({
      _max: {
        price: true,
      },
    });
    res.send({ result: data });
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
});
app.get("/book/min", async (req, res) => {
  try {
    const data = await prisma.book.aggregate({
      _min: {
        price: true,
      },
    });
    res.send({ result: data });
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
});
app.get("/book/avg", async (req, res) => {
  try {
    const data = await prisma.book.aggregate({
      _avg: {
        price: true,
      },
    });
    res.send({ result: data });
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
});

app.get("/book/findYearMonthDay", async (req, res) => {
  try {
    const data = await prisma.book.findMany({
      where: {
        registerDate: new Date("2024-05-08"),
      },
    });
    res.send({ result: data });
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
});

app.get("/book/findYearMonth", async (req, res) => {
  try {
    const data = await prisma.book.findMany({
      where: {
        registerDate: {
          gte: new Date("2024-05-01"),
          lte: new Date("2024-05-31"),
        },
      },
    });
    res.send({ result: data });
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
});

app.get("/user/createToken", async (req, res) => {
  try {
    const secret = process.env.TOKEN_SECRET;
    const payload = {
      id: 100,
      name: "Yuro",
      level: "admin",
    };

    const token = jwt.sign(payload, secret, { expiresIn: "1d" });

    res.send({ token: token });
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
});

app.get("/user/verifyToken", (req, res) => {
  try {
    const secret = process.env.TOKEN_SECRET;

    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAwLCJuYW1lIjoiWXVybyIsImxldmVsIjoiYWRtaW4iLCJpYXQiOjE3NTc3NzQzNDgsImV4cCI6MTc1Nzg2MDc0OH0.2pC8jwr3YgMz3p2scoc8siMir2-xk97TJY4ukMXGQNk";
    const result = jwt.verify(token, secret);

    res.send({ result: result });
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
});

app.get("/oneToOne", async (req, res) => {
  try {
    const data = await prisma.orderDetail.findMany({
      include: {
        book: true,
      },
    });

    res.send({ result: data });
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
});

app.get("/oneToMany", async (req, res) => {
  try {
    const data = await prisma.book.findMany({
      include: {
        OrderDetail: true,
      },
    });

    res.send({ result: data });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

app.get("/multiModel", async (req, res) => {
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

    res.send({ result: data });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server runing on port: ${port}`);
});

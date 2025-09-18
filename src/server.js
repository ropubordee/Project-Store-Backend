const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const bookRoute = require("./routes/bookRoute");
const searchRoute = require("./routes/searchRoute");
const userinfoRoute = require("./routes/userinfoRoute");
const booksortRoute = require("./routes/bookSortRoute");
const notandisNullRoute = require("./routes/not-isNull");
const bookaggregateRoute = require("./routes/bookaggregateRoute");
const findYearRoute = require("./routes/findYearRoute");
const userRoute = require("./routes/ีuserRoute");
const cors = require("cors");
const app = express();
const port = process.env.PORT;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

app.use("/uploads", express.static("uploads"));

app.use("/book", bookRoute);
app.use("/book", searchRoute);
app.use("/book", booksortRoute);
app.use("/user", userinfoRoute);
app.use("/book", notandisNullRoute);
app.use("/book", bookaggregateRoute);
app.use("/book", findYearRoute);
app.use("/user", userRoute);

// app.get("/user/createToken", async (req, res) => {
//   try {
//     const secret = process.env.TOKEN_SECRET;
//     const payload = {
//       id: 100,
//       name: "Yuro",
//       level: "admin",
//     };

//     const token = jwt.sign(payload, secret, { expiresIn: "1d" });

//     res.send({ token: token });
//   } catch (e) {
//     res.status(500).send({ error: e.message });
//   }
// });

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

app.post("/book/testUpload", async (req, res) => {
  try {
    const myFile = await req.files.myFile;
    myFile.mv("./uploads/" + myFile.name, (err) => {
      if (err) {
        res.status(500).send({ error: err });
      }
      res.send({ message: "success" });
    });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

app.get("/readFile", (req, res) => {
  try {
    const fs = require("fs");
    fs.readFile("./test.txt", (err, data) => {
      if (err) {
        throw err;
      }
      res.send(data);
    });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

app.get("/writeFile", (req, res) => {
  try {
    const fs = require("fs");
    fs.writeFile("./test.txt", "Hello By Pubordee", (err) => {
      if (err) {
        throw err;
      }
    });
    res.send({ message: "success" });
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
});

app.get("/removeFile", (req, res) => {
  try {
    const fs = require("fs");
    fs.unlinkSync("test.txt");
    res.send({ message: "success" });
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
});

app.get("/fileExists", (req, res) => {
  try {
    const fs = require("fs");
    const found = fs.existsSync("package.json");

    res.send({ found: found });
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
});

app.get("/createPdf", (req, res) => {
  const PDFDocument = require("pdfkit");
  const fs = require("fs");
  const doc = new PDFDocument();
  doc.pipe(fs.createWriteStream("output.pdf"));
  doc.fontSize(25).text("Sum text and embeded font", 100, 100);

  // 2หน้า & เพิ่มหน้า
  doc.addPage().fontSize(25).text("Here is some vector graphics..", 100, 100);
  doc.end();

  res.send({ message: "success" });
});

app.get("/readExcel", async (req, res) => {
  try {
    const excel = require("exceljs");
    const wb = new excel.Workbook();
    await wb.xlsx.readFile("productExport.xlsx");
    const ws = wb.getWorksheet(1);

    for (let i = 1; i < ws.columnCount; i++) {
      const row = ws.getRow(i);
      const barcode = row.getCell(1).value;
      const name = row.getCell(2).value;
      const cost = row.getCell(3).value;
      const sale = row.getCell(4).value;
      const send = row.getCell(5).value;
      const unit = row.getCell(6).value;
      const point = row.getCell(7).value;
      const productTypeId = row.getCell(8).value;

      console.log(barcode, name, cost, sale, send, unit, point, productTypeId);
    }

    res.send({ message: "success" });
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
});

app.listen(port, () => {
  console.log(`Server runing on port: ${port}`);
});

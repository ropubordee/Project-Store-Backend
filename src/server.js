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
const relationRoute = require("./routes/relationRoute");
const uploadfileRoute = require("./routes/uploadfileRoute");
const fileRoute = require("./routes/file.router");
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
app.use(relationRoute);
app.use("/book", uploadfileRoute);
app.use(fileRoute) 


  app.listen(port, () => {
    console.log(`Server runing on port: ${port}`);
  });

const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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

app.put('/myput',(req,res)=>{
    res.send(req.body)
})

app.listen(port, () => {
  console.log(`Server runing on port: ${port}`);
});

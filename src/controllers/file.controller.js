const fileservice = require("../services/file.service");

const getFileContent = async (req, res) => {
  try {
    const data = await fileservice.readFile();
    res.send(data);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const writeToFile = async (req, res) => {
  try {
    const content = "Hello By Pubordee";
    const result = await fileservice.writeFile(content);
    res.send(result);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const removeFile = async (req, res) => {
  try {
    const result = await fileservice.removeFile();
    res.send(result);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};
const fileExists = (req, res) => {
  try {
    const result = fileservice.checkFileExists("package.json");
    res.send(result);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const createPdf = (req, res) => {
  try {
    fileuploadservice.createPdfFile();
    res.send({ message: "PDF created successfully" });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const readExcel = async (req, res) => {
  try {
    const products = await fileservice.readExcelFile();
    console.log(products);
    res.send({ message: "Excel file read successfully", data: products });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = {
  getFileContent,
  writeToFile,
  removeFile,
  fileExists,
  createPdf,
  readExcel,
};

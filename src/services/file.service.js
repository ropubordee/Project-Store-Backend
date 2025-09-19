// src/services/file.service.js
const fs = require("fs");
const PDFDocument = require("pdfkit");
const path = require("path");
const excel = require("exceljs");

const filePath = path.join(__dirname, "../../", "test.txt");

const readFile = async () => {
  try {
    const data = await fs.readFile(filePath);
    return data;
  } catch (error) {
    throw new Error("Failed to read file: " + error.message);
  }
};

const writeFile = async (content) => {
  try {
    await fs.writeFile(filePath, content);
    return { message: "File written successfully" };
  } catch (error) {
    throw new Error("Failed to write file: " + error.message);
  }
};

const removeFile = async () => {
  try {
    await fs.unlink(filePath);
    return { message: "File removed successfully" };
  } catch (error) {
    throw new Error("Failed to remove file: " + error.message);
  }
};

const checkFileExists = (fileName) => {
  const filePath = path.join(__dirname, "../../", fileName);
  try {
    const found = fs.existsSync(filePath);
    return { found: found };
  } catch (error) {
    throw new Error("Failed to check file existence: " + error.message);
  }
};

const createPdfFile = () => {
  const filePath = path.join(__dirname, "../../", "output.pdf");
  const doc = new PDFDocument();
  // สร้างไฟล์ PDF และเขียนลงใน output.pdf
  doc.pipe(fs.createWriteStream(filePath));

  // เพิ่มเนื้อหาใน PDF
  doc.fontSize(25).text("Sum text and embeded font", 100, 100);

  // เพิ่มหน้าใหม่และเนื้อหา
  doc.addPage().fontSize(25).text("Here is some vector graphics..", 100, 100);

  // สิ้นสุดการสร้างไฟล์
  doc.end();
};

const readExcelFile = async () => {
  try {
    const filePath = path.join(__dirname, "../../", "productExport.xlsx");
    const wb = new excel.Workbook();
    await wb.xlsx.readFile(filePath);
    const ws = wb.getWorksheet(1);

    const products = [];
    // วนลูปเพื่ออ่านข้อมูลจากแต่ละแถว
    ws.eachRow((row, rowNumber) => {
      if (rowNumber > 1) {
        // ข้ามแถว header
        const product = {
          barcode: row.getCell(1).value,
          name: row.getCell(2).value,
          cost: row.getCell(3).value,
          sale: row.getCell(4).value,
          send: row.getCell(5).value,
          unit: row.getCell(6).value,
          point: row.getCell(7).value,
          productTypeId: row.getCell(8).value,
        };
        products.push(product);
      }
    });

    return products;
  } catch (error) {
    throw new Error("Failed to read Excel file: " + error.message);
  }
};

module.exports = {
  readFile,
  writeFile,
  removeFile,
  checkFileExists,
  createPdfFile,
  readExcelFile,
};

const path = require("path");

const UploadFile = async (file) => {
  try {
    const uploadPath = path.join(__dirname, "../../uploads", file.name);
    await file.mv(uploadPath);
    return { message: "File uploaded successfully" };
  } catch (error) {
    throw new Error("Failed to move file: " + err.message);
  }
};

module.exports = {
  UploadFile,
};

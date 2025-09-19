const fileuploadservice = require("../services/uploadfileservice");

const uploadFileController = async (req, res) => {
  try {
    if (!req.files) {
      return res.status(400).send({ error: "No files were uploaded." });
    }
    const myFile = req.files.myFile;
    const result = await fileuploadservice.UploadFile(myFile);
    res.send(result);
  } catch (error) {}
};

module.exports = {
  uploadFileController,
};

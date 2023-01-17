const path = require("path");
const multer = require("multer");



const storage = multer.diskStorage({
    destination: (req, file, callback) => {
    callback(null, "public/images");
  },


  filename: (req, file, callback) => {
    const newImageName  = Date.now() + path.extname(file.originalname);
    callback(null, newImageName);

  },
});




module.exports =  multer({
  storage: storage,
  fileFilter: (req, file, callback) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      callback(null, true);
    } else {
      callback(null, false);
      return callback(new Error("Only .png, .jpg and .jpeg format allowed!"));
    }
  },
});
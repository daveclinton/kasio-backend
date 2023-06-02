const multer = require("multer");
const mime = require("mime-types");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  const contentType = mime.lookup(file.originalname);
  if (contentType === "image/png") {
    cb(null, true);
  } else {
    cb(new Error("Invalid file format. Only PNG files are allowed."), false);
  }
};

const upload = multer({ storage: storage, fileFilter: fileFilter }).single(
  "image"
);

exports.uploadMiddleware = (req, res, next) => {
  upload(req, res, function (err) {
    if (err) {
      return res.status(400).json({ error: err.message });
    }

    // Check if req.file is defined
    if (!req.file) {
      return res.status(400).json({ error: "No file received" });
    }

    req.body.image = {
      data: req.file.buffer, // Assign the image data to req.body.image.data
      contentType: req.file.mimetype,
    };
    next();
  });
};

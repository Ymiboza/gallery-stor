const express = require("express");
const router = express.Router();
const path = require("path");
const { getArts, createArt, getArt } = require("../controllers/arts");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: "./assets/",
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage });

// @route GET /api/gallery
router.get("/", getArts);
// @route GET /api/gallery/:id
router.get("/:id", getArt);
// @route POST /api/gallery
router.post("/", upload.single("artImage"), createArt);

module.exports = router;

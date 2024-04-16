const express = require("express");
const router = express.Router();
const multer = require("multer");
const { fileUpload } = require("../../Controllers/fileUploadController");
const uploader = require("../../middleware/uploader/uploader");

router.post("/", uploader.single("image"), fileUpload);
module.exports = router;

const express = require("express");
const {
  addCompleteCourse,
  getCompleteCourse,
} = require("../../Controllers/completeCourseController");
const router = express.Router();

router.post("/", addCompleteCourse);

router.get("/", getCompleteCourse);

module.exports = router;

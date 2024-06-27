const express = require("express");
const {
  addCourses,
  getCourses,
  getBatchCourse,
} = require("../../Controllers/coursesController");

const router = express.Router();

router.post("/", addCourses);
router.get("/", getCourses);
router.get("/:department/:batch", getBatchCourse);

module.exports = router;

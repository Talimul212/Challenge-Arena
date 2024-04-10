const express = require("express");
const {
  addCourses,
  getCourses,
} = require("../../Controllers/coursesController");

const router = express.Router();

router.post("/", addCourses);

router.get("/", getCourses);

module.exports = router;

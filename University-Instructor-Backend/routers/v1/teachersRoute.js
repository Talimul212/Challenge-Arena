const express = require("express");
const {
  addTeacher,
  getTeachers,
} = require("../../Controllers/teacherControoler");
const router = express.Router();

router.post("/", addTeacher);

router.get("/", getTeachers);

module.exports = router;

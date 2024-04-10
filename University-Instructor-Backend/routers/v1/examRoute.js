const express = require("express");
const {
  addExamRoutine,
  getExamRoutine,
} = require("../../Controllers/examRoutineController");
const router = express.Router();

router.post("/", addExamRoutine);

router.get("/", getExamRoutine);

module.exports = router;

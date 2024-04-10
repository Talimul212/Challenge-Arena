const express = require("express");
const {
  addClassRoutine,
  getClassRoutine,
} = require("../../Controllers/classRoutineController");

const router = express.Router();

router.post("/", addClassRoutine);

router.get("/", getClassRoutine);

module.exports = router;

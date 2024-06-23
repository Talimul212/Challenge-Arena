const express = require("express");
const {
  addFaculty,
  getFaculty,
} = require("../../Controllers/facultyController");

const router = express.Router();

router.post("/", addFaculty);

router.get("/", getFaculty);

module.exports = router;

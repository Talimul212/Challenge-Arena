const express = require("express");
const {
  addFaculty,
  getFaculty,
  updateFaculty,
} = require("../../Controllers/facultyController");

const router = express.Router();

router.post("/", addFaculty);
router.put("/:id", updateFaculty);
router.get("/", getFaculty);

module.exports = router;

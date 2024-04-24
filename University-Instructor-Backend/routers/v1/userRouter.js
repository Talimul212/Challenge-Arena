const express = require("express");
const {
  addUser,
  getUser,
  updateUser,
  GetClassMate,
} = require("../../Controllers/usersController");
const router = express.Router();

router.post("/register", addUser);

router.put("/register/:id", updateUser);
router.get("/", getUser);
router.get("/:batch/:semseter/:id", GetClassMate);

module.exports = router;

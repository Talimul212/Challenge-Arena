const express = require("express");
const { addUser, getUser } = require("../../Controllers/usersController");
const router = express.Router();

router.post("/register", addUser);

router.get("/", getUser);

module.exports = router;

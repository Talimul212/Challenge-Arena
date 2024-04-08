const express = require("express");
import { addUser, getUser } from "../Controllers/usersController";

const router = express.Router();

router.post("/", addUser);

router.get("/", getUser);

export default router;

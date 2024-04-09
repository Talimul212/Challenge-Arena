const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require("./routers/v1/userRouter");
const teachersRoute = require("./routers/v1/teachersRoute");
// const { ServerApiVersion, ObjectId, MongoClient } = require("mongodb");
const app = express();
const port = process.env.PORT || 8000;

const corsOrigin = {
  origin: ["http://localhost:5173/", "192.168.1.212:5173s"],
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOrigin));

// database
mongoose.set("strictQuery", false);
const connect = async () => {
  try {
    mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB.");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});

// middlewares

app.use(express.json());
require("dotenv").config();

app.get("/", (req, res) => {
  res.send("Running");
});

app.use("/api/v1/users", userRouter);
app.use("/api/v1/teachers", teachersRoute);

app.listen(port, () => {
  connect();
  console.log(`University Instructor Backend runnig ${port}`);
});

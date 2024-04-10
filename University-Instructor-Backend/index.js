const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require("./routers/v1/userRouter");
const teachersRoute = require("./routers/v1/teachersRoute");
const classRoutineRoute = require("./routers/v1/classRoutinrRoute");
const completeCourseRoute = require("./routers/v1/completeCourseRoute");
const courseRoute = require("./routers/v1/coursesRoute");
const examRoute = require("./routers/v1/examRoute");
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
app.use("/api/v1/classes", classRoutineRoute);
app.use("/api/v1/completeCourse", completeCourseRoute);
app.use("/api/v1/course", courseRoute);
app.use("/api/v1/examSchedules", examRoute);

app.listen(port, () => {
  connect();
  console.log(`University Instructor Backend runnig ${port}`);
});

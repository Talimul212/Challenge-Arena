const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoute = require("./routers/v1/authRoute");
const userRouter = require("./routers/v1/userRouter");
const teachersRoute = require("./routers/v1/teachersRoute");
const classRoutineRoute = require("./routers/v1/classRoutinrRoute");
const completeCourseRoute = require("./routers/v1/completeCourseRoute");
const courseRoute = require("./routers/v1/coursesRoute");
const examRoute = require("./routers/v1/examRoute");
const fileUploadRoute = require("./routers/v1/fileUploadRoute");

const app = express();

const port = process.env.PORT || 8000;

const corsOrigin = {
  origin: "*", // Allow access from any origin
  credentials: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  optionSuccessStatus: 200,
};

app.options("", cors(corsOrigin));
app.use(cors(corsOrigin));

// database
mongoose.set("strictQuery", false);
const connect = () => {
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
  connect();
  res.send("University Instructor Backend is running");
});

// upload  file
app.use("/images", express.static("middleware/uploader/upload/images"));

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/teachers", teachersRoute);
app.use("/api/v1/courses", courseRoute);
app.use("/api/v1/classes", classRoutineRoute);
app.use("/api/v1/completeCourse", completeCourseRoute);
app.use("/api/v1/examSchedules", examRoute);
app.use("/api/v1/file-upload", fileUploadRoute);

app.listen(port, () => {
  connect();
  console.log(`University Instructor Backend runnig ${port}`);
});

const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, " full Name is required"],
    },
    gender: {
      type: String,
      required: [false],
    },
    photoURL: {
      type: String,
      required: [false],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
    },
    studentId: {
      type: Number,
      required: [true, "Student ID is required"],
    },
    department: {
      type: String,
      required: [true, "Departments ID is required"],
    },
    batch: {
      type: Number,
      required: [true, "Batch ID is required"],
    },
    semseter: {
      type: Number,
      required: [true, "Batch ID is required"],
    },
    cgpa: {
      type: Number,
      required: [false],
    },
    credits: {
      type: Number,
      required: [true, "Credits  is required"],
    },
  },
  {
    timestamps: true,
  }
);

const Users = mongoose.model("Users", userSchema);
module.exports = { Users };

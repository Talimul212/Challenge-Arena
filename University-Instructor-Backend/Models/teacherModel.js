const mongoose = require("mongoose");

const teachersSchema = mongoose.Schema(
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
    position: {
      type: String,
      required: [true, "position ID is required"],
    },
    department: {
      type: String,
      required: [true, "Departments ID is required"],
    },
    courseList: [
      {
        courseName: {
          type: String,
          required: [true, "Course Name  is required"],
        },
        courseCode: {
          type: String,
          required: [false],
        },
      },
    ],
    whatsappNumber: {
      type: Number,
      required: [false],
    },
    gmailAccount: {
      type: String,
      required: [true, "Gmail Account is required"],
    },
  },
  {
    timestamps: true,
  }
);

const Teachers = mongoose.model("Teachers", teachersSchema);
module.exports = { Teachers };

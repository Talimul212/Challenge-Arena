const mongoose = require("mongoose");

const facultyListSchema = mongoose.Schema(
  {
    facultyName: {
      type: String,
      required: [true, " Faculty name is required"],
    },
    totalCredits: {
      type: Number,
      required: [true, " Total Credits is required"],
    },
    photoURL: {
      fieldname: {
        type: String,
        required: [false],
      },
      originalname: {
        type: String,
        required: [false],
      },
      encoding: {
        type: String,
        required: [false],
      },
      mimetype: {
        type: String,
        required: [false],
      },
      destination: {
        type: String,
        required: [false],
      },
      filename: {
        type: String,
        required: [false],
      },
      path: {
        type: String,
        required: [false],
      },
      size: {
        type: Number,
        required: [false],
      },
    },
  },
  {
    timestamps: true,
  }
);

const FacultyList = mongoose.model("FacultyList", facultyListSchema);
module.exports = { FacultyList };

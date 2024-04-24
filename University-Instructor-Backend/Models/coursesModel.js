const mongoose = require("mongoose");

const coursesSchema = mongoose.Schema(
  {
    courseName: {
      type: String,
      required: [true, " Course Name is required"],
    },
    teacherName: {
      type: String,
      required: [true, "Teacher Name is required"],
    },
    credits: {
      type: Number,
      required: [true, " Credits is required"],
    },
    hours: {
      type: Number,
      required: [true, "Hours is required"],
    },
    courseCode: {
      type: String,
      required: [true, "Course Code ID is required"],
    },
    batch: [
      {
        type: Number,
        required: [true, "batch  is required"],
      },
    ],
    type: {
      type: String,
      required: [true, "Type is required"],
    },
    relatedBooks: [
      {
        title: {
          type: String,
          required: [false, "title  is optional"],
        },
        author: {
          type: String,
          required: [false],
        },
        imageURL: {
          type: String,
          required: [false],
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Courses = mongoose.model("Courses", coursesSchema);
module.exports = { Courses };

const mongoose = require("mongoose");

const completeCourseSchema = mongoose.Schema(
  {
    courseName: {
      type: String,
      required: [true, " Course Name is required"],
    },
    courseCode: {
      type: String,
      required: [true, " Course  Code is required"],
    },
    credits: {
      type: Number,
      required: [true, " Credits   is required"],
    },
    cgpaPoint: {
      type: Number,
      required: [true, " CGPA Point  Code is required"],
    },
    cgpa: {
      type: String,
      required: [true, " CGPA is required"],
    },
    teacherName: {
      type: String,
      required: [true, " Teacher Name   is required"],
    },
    semesterCompleted: {
      type: Number,
      required: [true, " Semester Completed  is required"],
    },
    midtermMark: {
      type: Number,
      required: [true, " Midterm Mark  is required"],
    },
    finalTermMark: {
      type: Number,
      required: [true, " Final Term Mark   is required"],
    },
    teacherHandMark: {
      type: Number,
      required: [true, " Teacher Hand Mark  is required"],
    },
    totalMark: {
      type: Number,
      required: [true, " Total Mark   is required"],
    },
  },
  {
    timestamps: true,
  }
);

const CompleteCourse = mongoose.model("CompleteCourse", completeCourseSchema);
module.exports = { CompleteCourse };

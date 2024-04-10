const mongoose = require("mongoose");

const classRoutineSchema = mongoose.Schema(
  {
    day: {
      type: String,
      required: [true, " Day is required"],
    },
    batch: {
      type: String,
      required: [true, " Batch is required"],
    },
    courses: [
      {
        period: {
          type: String,
          required: [true, "Course period  is required"],
        },
        courseName: {
          type: String,
          required: [true, "Course Name  is required"],
        },

        instructor: {
          type: String,
          required: [true, "Course instructor  is required"],
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const ClassRoutine = mongoose.model("ClassRoutine", classRoutineSchema);
module.exports = { ClassRoutine };

const mongoose = require("mongoose");

const examRoutineSchema = mongoose.Schema(
  {
    date: {
      type: String,
      required: [true, " Date is required"],
    },
    day: {
      type: String,
      required: [true, " Day is required"],
    },
    courses: [
      {
        courseCode: {
          type: String,
          required: [true, "Course Code is required"],
        },
        semester: [
          {
            type: String,
            required: [true, "Semester  is required"],
          },
        ],

        courseName: {
          type: String,
          required: [true, "Course Name  is required"],
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const ExamRoutine = mongoose.model("ExamRoutine", examRoutineSchema);
module.exports = { ExamRoutine };

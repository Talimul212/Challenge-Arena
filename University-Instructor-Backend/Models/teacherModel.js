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
          required: [false, "Course Name  is required"],
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
  },
  {
    timestamps: true,
  }
);

const Teachers = mongoose.model("Teachers", teachersSchema);
module.exports = { Teachers };

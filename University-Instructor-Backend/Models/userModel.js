const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    batch: {
      type: String,
      required: [true, "Batch  is required"],
    },
    credits: {
      type: Number,
      required: [true, "Credits  is required"],
    },
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
    password: {
      type: String,
      required: [true, "password is required"],
    },
    studentId: {
      type: Number,
      required: [true, "Student ID is required"],
    },
    department: {
      type: String,
      required: [true, "Departments  is required"],
    },
    cgpa: {
      type: Number,
      required: [true],
    },
    semseter: {
      type: Number,
      required: [true, "Semseter  is required"],
    },
  },
  {
    timestamps: true,
  }
);

const Users = mongoose.model("Users", userSchema);
module.exports = { Users };

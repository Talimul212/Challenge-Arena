const { Mongoose, model } = require("mongoose");

const userSchema = Mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, " full Name is required"],
    },
    gender: {
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
    // dishes: [
    //   {
    //     img: {
    //       type: String,
    //       required: [true, "Image is required"],
    //     },
    //     price: {
    //       type: Number,
    //       required: [true, "Price is required"],
    //     },
    //     dish_tag: {
    //       type: String,
    //     },
    //   },
    // ],
  },
  {
    timestamps: true,
  }
);

export const Users = model("Users", userSchema);

import { Users } from "../Models/userModel";

export const addUser = async (req, res) => {
  const users = new Users(req.body);
  try {
    const result = await users.save();
    res.status(200).json({
      status: true,
      message: "user added successfully",
      data: result,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      let errors = {};
      Object.keys(error.errors).forEach((key) => {
        errors = error.errors[key];
      });
      return res.status(400).json({
        status: false,
        error: errors,
      });
    }
    res.status(500).json({
      status: false,
      message: "Something went wrong",
    });
  }
};

export const getUser = async (req, res) => {
  const users = await Users.find({});
  try {
    res.status(200).json({
      status: true,
      data: users,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "Data can't fetch",
      error,
    });
  }
};

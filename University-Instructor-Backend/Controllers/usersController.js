const { Users } = require("../Models/userModel");

module.exports.addUser = async (req, res) => {
  const { userData } = req.body;
  const userDataObject = JSON.parse(userData);
  try {
    // Check if a user with the provided email already exists
    const existingUser = await Users.findOne({ email: userDataObject.email });
    if (existingUser) {
      return res.status(400).json({
        status: false,
        message: "Email is already in use",
      });
    }
    const user = new Users(userDataObject);
    const result = await user.save();
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

module.exports.getUser = async (req, res) => {
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

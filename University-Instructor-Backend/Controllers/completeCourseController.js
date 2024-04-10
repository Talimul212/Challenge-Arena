const { CompleteCourse } = require("../Models/completeCourseModel");

module.exports.addCompleteCourse = async (req, res) => {
  try {
    const compleCourse = new CompleteCourse(req.body);
    const result = await compleCourse.save();
    res.status(200).json({
      status: true,
      message: "teacher added successfully",
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

module.exports.getCompleteCourse = async (req, res) => {
  try {
    const compleCourse = await CompleteCourse.find({});

    res.status(200).json({
      status: true,
      data: compleCourse,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "Data can't fetch",
      error,
    });
  }
};

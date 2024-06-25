const { Teachers } = require("../Models/teacherModel");

module.exports.addTeacher = async (req, res) => {
  try {
    const teacher = new Teachers(req.body);
    const result = await teacher.save();
    res.status(200).json({
      status: true,
      message: "New Teacher added successfully",
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

module.exports.getTeachers = async (req, res) => {
  try {
    const teacher = await Teachers.find({});

    res.status(200).json({
      status: true,
      data: teacher,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "Data can't fetch",
      error,
    });
  }
};

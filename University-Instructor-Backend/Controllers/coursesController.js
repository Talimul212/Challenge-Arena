const { Courses } = require("../Models/coursesModel");

module.exports.addCourses = async (req, res) => {
  try {
    const course = new Courses(req.body);
    const result = await course.save();
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

module.exports.getCourses = async (req, res) => {
  try {
    const course = await Courses.find({});

    res.status(200).json({
      status: true,
      data: course,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "Data can't fetch",
      error,
    });
  }
};

module.exports.getBatchCourse = async (req, res) => {
  console.log(req.params.batch);
  try {
    const course = await Courses.find({
      batch: req.params.batch,
    });

    res.status(200).json({
      status: true,
      data: course,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "Data can't fetch",
      error,
    });
  }
};

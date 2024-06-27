const { Courses } = require("../Models/coursesModel");

module.exports.addCourses = async (req, res) => {
  try {
    const course = new Courses(req.body);
    console.log(course);
    const result = await course.save();
    res.status(201).json({
      status: true,
      message: "Course added successfully",
      data: result,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const errors = Object.values(error.errors).map((err) => err.message);
      return res.status(400).json({
        status: false,
        error: errors,
      });
    }
    console.error("Error adding course:", error);
    res.status(500).json({
      status: false,
      message: "Failed to add course",
      error: error.message,
    });
  }
};

module.exports.getCourses = async (req, res) => {
  try {
    const courses = await Courses.find({}).select("-__v"); // Exclude __v field from response
    res.status(200).json({
      status: true,
      data: courses,
    });
  } catch (error) {
    console.error("Error fetching courses:", error);
    res.status(500).json({
      status: false,
      message: "Failed to fetch courses",
      error: error.message,
    });
  }
};

module.exports.getBatchCourse = async (req, res) => {
  try {
    const department = req.params.department;
    const batch = req.params.batch;
    const courses = await Courses.find({ department, batch }).select("-__v"); // Exclude __v field from response
    res.status(200).json({
      status: true,
      data: courses,
    });
  } catch (error) {
    console.error("Error fetching batch courses:", error);
    res.status(500).json({
      status: false,
      message: "Failed to fetch batch courses",
      error: error.message,
    });
  }
};

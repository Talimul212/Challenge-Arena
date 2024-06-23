const { FacultyList } = require("../Models/facultyModel");

module.exports.addFaculty = async (req, res) => {
  try {
    const list = new FacultyList(req.body);
    console.log(list);
    const result = await list.save();
    res.status(200).json({
      status: true,
      message: "New Faculty added successfully",
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

module.exports.getFaculty = async (req, res) => {
  try {
    const list = await FacultyList.find({});

    res.status(200).json({
      status: true,
      data: list,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "Data can't fetch",
      error,
    });
  }
};

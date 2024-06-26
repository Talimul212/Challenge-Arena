const { FacultyList } = require("../Models/facultyModel");

module.exports.addFaculty = async (req, res) => {
  try {
    const list = new FacultyList(req.body);
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

module.exports.updateFaculty = async (req, res) => {
  const facultyId = req.params.id;
  const facultyData = req.body;
  try {
    const updated = await FacultyList.findByIdAndUpdate(
      facultyId,
      { $set: facultyData.formDataJson }, // Use the entire `facultyData` object directly
      { new: true }
    );

    res.status(200).json({
      status: true,
      message: "Faculty updated successfully",
      data: updated,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Faculty can't update",
      error,
    });
  }
};

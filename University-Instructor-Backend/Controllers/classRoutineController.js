const { ClassRoutine } = require("../Models/classRoutineModel");

module.exports.addClassRoutine = async (req, res) => {
  try {
    const routine = new ClassRoutine(req.body);
    const result = await routine.save();
    res.status(200).json({
      status: true,
      message: "Class routine added successfully",
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

module.exports.getClassRoutine = async (req, res) => {
  try {
    const routine = await ClassRoutine.find({});

    res.status(200).json({
      status: true,
      data: routine,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "Data can't fetch",
      error,
    });
  }
};

const { ExamRoutine } = require("../Models/examRoutineModel");

module.exports.addExamRoutine = async (req, res) => {
  try {
    const examroutine = new ExamRoutine(req.body);
    const result = await examroutine.save();
    res.status(200).json({
      status: true,
      message: "Exam Routine added successfully",
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

module.exports.getExamRoutine = async (req, res) => {
  try {
    const examroutine = await ExamRoutine.find({});

    res.status(200).json({
      status: true,
      data: examroutine,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "Data can't fetch",
      error,
    });
  }
};

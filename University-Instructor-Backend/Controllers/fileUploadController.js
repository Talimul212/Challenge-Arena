module.exports.fileUpload = async (req, res) => {
  try {
    res.status(200).json(req.file);
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "file can't fetch",
      error,
    });
  }
};

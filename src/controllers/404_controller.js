// API NOT FOUND

exports.apiNotFound_control = (req, res, next) => {
  res.status(404).json({ message: "API Not Found", data: {} });
};
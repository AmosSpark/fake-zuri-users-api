// API NOT FOUND

exports.apiNotFound_control = (req, res, next) => {
  res.status(404).json({ error: {message: "Wrong Route / API Not Found", data: {} }});
};
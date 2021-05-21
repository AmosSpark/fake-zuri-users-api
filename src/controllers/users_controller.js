const User = require("../models/db_models/Users_models");

// CREATE USER
exports.createUser = async (req, res) => {

  const newUser = new User({
    fullName: req.body.fullName,
    email: req.body.email,
    country: req.body.country
  });
  try {
    // save
    const user = await newUser.save();
    res.status(200).json({ message: `successful`, data: user}); 
  } catch (err) {
    // error
    res.status(400).json({ message: `unsucessful`, error: {
                                                     message: `${err.message}`
                                                   } 
                        });
  }

};
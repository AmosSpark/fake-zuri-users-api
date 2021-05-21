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
    res.status(400).json({ message: `unsucessful`, 
                           error: {
                             message: `${err.message}`
                           } 
                        });
  }

};

// DELETE USER
exports.deleteUser = async (req, res) => {

  const _id = req.params.id;
  const findUserToRemove = await User.findOneAndRemove({ _id });
  // validate 
  if (findUserToRemove) {
    res.status(204).json({}); // request succeeded with no content (i.e. deleted)
  } else {
      res.status(400).json({ message: `unsucessful`, 
                           error: {
                             message: `Usser id: ${_id} not found.`
                           } 
                          });
  }

};

const User = require("../models/db_models/Users_models");

// CREATE USER

/*
 * @route POST api/users
 * @desc create user
 * @access public
 */

exports.createUser = async (req, res) => {

  const newUser = new User({
    fullName: req.body.fullName,
    email: req.body.email,
    country: req.body.country
  });
  try {
    // save
    const user = await newUser.save();
    res.status(201).json({ message: `successful`, data: user }); 
  } catch (err) {
    // error
    res.status(400).json({ message: `unsucessful`, 
                           error: {
                             message: `${err.message}`
                           } 
                        });
  }

};

// UPDATE USER

/*
 * @route PUT api/users
 * @desc update user
 * @access public
 */

exports.updateUser = async (req, res) => {

  const _id = req.params.id;
  try{
    const updateUser = await User.findByIdAndUpdate(_id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({ message: `successful`, data: updateUser });
  } catch (err) {
      // error
      res.status(400).json({ message: `unsucessful`, 
                             error: {
                               message: `${err.message}`
                             } 
                          });   
  }

}

// DELETE USER

/*
 * @route DELETE api/users/:id
 * @desc delete user
 * @access public
 */

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

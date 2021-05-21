const User = require("../models/db_models/Users_models");

// GET USERS

/*
 * @route GET api/users
 * @desc get users
 * @access public
 */

exports.getUsers = async (req, res) => {

  const findUsers = await User.find();
  const users = findUsers;
  const userLength = users.length;
  res.status(200).json({ message: `successful`, result: userLength, data: users });

};

// GET FIRST N AMOUNT OF USERS

/*
 * @route GET api/users/first/:n
 * @desc get first N amount of users
 * @access public
 */

exports.getFirstNAmountOfUsers = async (req, res) => {

  const n = parseInt(req.params.n);
  const users = await User.find().limit(n);
  // validate
  const userLength = users.length;
  if (n > userLength) {
    res.status(400).json({ message: `unsucessful`, 
                             error: {
                             message: `Requsted number of users is more than available (${userLength}) users`
                           } 
                        });   
  } else {
      res.status(200).json({ message: `successful`, result: userLength, data: users });
  }

};

// GET A USER

/*
 * @route GET api/users/:id
 * @desc get a user
 * @access public
 */

exports.getAUser = async (req, res) => {

  const _id = req.params.id;
  const users = await User.findById(_id);
  // vaildate
  if (users) {
    res.status(200).json({ message: `successful`, data: users });
  } else {
      res.status(404).json({ message: `unsucessful`, 
                               error: {
                               message: `Usser id: ${_id} not found.`
                              } 
                          });
  }

};

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
 * @route PUT api/users/:id
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

};

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
      res.status(404).json({ message: `unsucessful`, 
                           error: {
                             message: `Usser id: ${_id} not found.`
                           } 
                          });
  }

};

const Validator = require("validator");
const mongoose = require("mongoose");

// SCHEMA
const usersSchema = new mongoose.Schema({

  fullName: {
    type: String,
    trim: true,
    required: [true, "Please provide your full name."],
    minlength: [2, `Your name must be at least 2 characters long, got {VALUE}.`],
    maxlength: [30, `Your name must not be 30 characters long, got {VALUE}.`],
  },

  email: {
    type: String,
    required: [
        function() {
          return this.name; 
        },
        "Please provide your email.",
    ],
    unique: [true, "Your email must be unique,there's already a user with {VALLUE}"],
    lowercase: true,
    validate: [
      Validator.isEmail,
      "Please provide a valid email, got {VALUE}."
    ],
  },

    country: {
      type: String,
      trim: true,
      required: [
          function() {
            return this.email;
          },
          "Please tell us where you're from."
      ],
      minlength: [3, `Your country must be at least 3 characters long, got {VALUE}.`],
      maxlength: [30, `Your country must not be 30 characters long, got {VALUE}.`],
      validate: [
        Validator.isAlpha,
        "Your country should only be in letters, got {VALUE}."
      ],
    },

});

// MODEL
const User = mongoose.model("User", usersSchema);

module.exports = User;
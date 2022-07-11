const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
  username: {
    type: String,
    trim: true,
    unique: true,
    required: [true, "username field is required and must be unique"],
  },
  password: {
    type: String,
    required: [true, "password field is required"],
  },
  name: {
    type: String,
    required: [true, "name field is required"],
    trim: true,
  },
  dob: {
    type: Date,
    required: [true, "date of birth field is required"],
  },
  mobile: {
    type: Number,
    required: [true, "mobile field is required"],
  },
});

module.exports = mongoose.model("users", UsersSchema);

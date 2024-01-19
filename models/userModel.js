const mongoose = require("mongoose");

//User Schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
});

//Creating Models
const User = mongoose.model("User", userSchema);
module.exports = User;

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/ExpressDemo");

const UserSchema = mongoose.Schema(
  {
    username: String,
    password: String,
  },
  { collection: "User" }
);

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;


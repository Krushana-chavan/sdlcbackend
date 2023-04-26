const mongoose = require("mongoose");
const AuthSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    phonenumber: {
      type: Number,
      require:true,
      unique:true,
    },
    
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 5,
    },
  },
  { timestamps: true }
);

const userModel = mongoose.model("friend", AuthSchema);

module.exports = {
  userModel,
};

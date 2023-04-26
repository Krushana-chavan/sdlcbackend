const { AuthModel } = require("../models/auth.model");
const {userModel}= require("../models/user.model")
const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await AuthModel.findById(id);
    res.status(200).json(user);
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};

const getalluser = async (req,res)=>{
  try{
    // const {username,email,password,phonenumber} = req.body;
    const user = await userModel.find()
    res.status(200).json(user)
  }
  catch{
    res.status(401)
  }
}
const adduser = async (req,res)=>{
  try{
    const {username,email,password,phonenumber} = req.body;
    const newUser = new userModel({
      username,
      email,
      password,
      phonenumber,
    });
    await newUser.save()
    res.status(200).json("User Added Successfully !")
  }
  catch{
    res.status(400).json("Something went wrong !")
  }
}



const UserController = {
  getUser,
  getalluser,
  adduser
};

module.exports = {
  UserController,
};

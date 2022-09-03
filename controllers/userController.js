

const { fail } = require('assert');
const fs=require('fs');
const User=require('./../models/usermodel.js');


exports.getAllUsers = async(req, res) => {
  console.log(req.requestTime);

  const users= await User.find();
  try{
  res.status(500).json({
    status: 'success',
    users
  });
}catch(err){
  status:fail,
  err
}
};
exports.getUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined!'
  });
};
exports.createUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined!'
  });
};
exports.updateUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined!'
  });
};
exports.deleteUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined!'
  });
};
